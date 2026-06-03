from urllib import response

from fastapi import APIRouter, UploadFile, File
import shutil
import os
import requests
from dotenv import load_dotenv
from openai import OpenAI

# LOAD ENV VARIABLES
load_dotenv()

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# API KEYS
PLANT_API_KEY = os.getenv("PLANT_ID_API_KEY")

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

# OPENROUTER CLIENT
client = OpenAI(

    base_url="https://openrouter.ai/api/v1",

    api_key=OPENROUTER_API_KEY
)


@router.post("/upload-plant")
async def upload_plant_image(file: UploadFile = File(...)):

    try:

        # SAVE IMAGE
        file_path = f"{UPLOAD_FOLDER}/{file.filename}"

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # SEND IMAGE TO PLANT.ID
        headers = {
            "Api-Key": PLANT_API_KEY
        }

        files = {
            "images": open(file_path, "rb")
        }

        response = requests.post(
            "https://api.plant.id/v2/identify",
            headers=headers,
            files=files
        )
        print("STATUS CODE:", response.status_code)
        print("RAW RESPONSE:", response.text)

        result = response.json()

        print("PLANT.ID RESPONSE:")
        print(result)

        suggestions = result.get("suggestions", [])

        # IF NO PLANT DETECTED
        if not suggestions:

            return {

                "plant_name": "Unknown Plant",

                "scientific_name": "Unknown",

                "probability": 0,

                "ai_generated_info":
                    "AI could not identify this plant clearly. Try another image."

            }

        # TOP PREDICTION
        prediction = suggestions[0]

        scientific_name = prediction.get(
            "plant_name",
            "Unknown Plant"
        )

        probability = prediction.get(
            "probability",
            0
        )

        # AI PROMPT
        prompt = f"""
        Give medicinal information about this plant.

        Plant Name: {scientific_name}

        Return response in this format:

        Description:
        short paragraph

        Medicinal Uses:
        - use 1
        - use 2
        - use 3

        Toxicity:
        Safe or Toxic

        Care Tips:
        short paragraph
        """

        # OPENROUTER AI REQUEST
        completion = client.chat.completions.create(

            model="openai/gpt-3.5-turbo",

            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        generated_text = completion.choices[0].message.content

        # FINAL RESPONSE
        return {

            "plant_name": scientific_name,

            "scientific_name": scientific_name,

            "probability": probability,

            "ai_generated_info": generated_text

        }

    except Exception as e:

        print("BACKEND ERROR:")
        print(str(e))

        return {

            "plant_name": "System Error",

            "scientific_name": "System Error",

            "probability": 0,

            "ai_generated_info":
                f"Backend Error: {str(e)}"

        }