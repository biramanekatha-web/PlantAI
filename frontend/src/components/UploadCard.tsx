"use client";

import { useState } from "react";

export default function UploadCard() {

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (file) {

      setImage(file);

      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  const uploadToBackend = async () => {

    if (!image) {

      alert("Please upload image first");

      return;
    }

    const formData = new FormData();

    formData.append("file", image);

    try {

      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/upload-plant",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      console.log(data);

      setResult(data);

    } catch (error) {

      console.error(error);

      alert("Backend connection failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <section
      id="scanner"
      className="py-24 px-6 flex justify-center"
    >

      <div className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-4">

          AI Plant Scanner

        </h2>

        <p className="text-center text-gray-400 mb-10 text-lg">

          Upload medicinal plant images for AI analysis

        </p>

        <label
          className="border-2 border-dashed border-green-500 rounded-3xl h-96 flex items-center justify-center overflow-hidden cursor-pointer"
        >

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          {
            preview ? (

              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover"
              />

            ) : (

              <div className="text-center">

                <p className="text-7xl mb-6">
                  🌿
                </p>

                <p className="text-3xl font-bold text-white">
                  Upload Plant Image
                </p>

              </div>

            )
          }

        </label>

        <div className="flex justify-center mt-10">

          <button
            onClick={uploadToBackend}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 transition px-12 py-5 rounded-2xl text-xl font-bold"
          >

            {
              loading
                ? "Scanning..."
                : "Scan with AI"
            }

          </button>

        </div>

        {
          result && (

            <div className="mt-14 bg-black/40 border border-green-500/20 rounded-3xl p-10">

              <h3 className="text-4xl font-bold text-green-400 mb-8">

                AI Prediction Result

              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white/5 p-6 rounded-2xl">

                  <p className="text-green-300 mb-2">
                    Plant Name
                  </p>

                  <p className="text-3xl font-bold text-white">

                    {result.plant_name || "Unknown"}

                  </p>

                </div>

                <div className="bg-white/5 p-6 rounded-2xl">

                  <p className="text-green-300 mb-2">
                    Scientific Name
                  </p>

                  <p className="text-2xl text-white">

                    {result.scientific_name || "Not Available"}

                  </p>

                </div>

                <div className="bg-white/5 p-6 rounded-2xl">

                  <p className="text-green-300 mb-2">
                    AI Confidence
                  </p>

                  <p className="text-3xl font-bold text-white">

                    {
                      result.probability
                        ? `${(result.probability * 100).toFixed(2)}%`
                        : "Not Available"
                    }

                  </p>

                </div>

                <div className="bg-white/5 p-6 rounded-2xl">

                  <p className="text-green-300 mb-2">
                    Toxicity Status
                  </p>

                  <p className="text-2xl text-yellow-300">

                    AI Generated

                  </p>

                </div>

              </div>

              <div className="mt-10 bg-white/5 p-8 rounded-2xl">

                <h4 className="text-3xl font-bold text-green-300 mb-4">

                  AI Analysis

                </h4>

                <div className="text-gray-300 whitespace-pre-line leading-8">

                  {result.ai_generated_info || "No AI analysis available."}

                </div>

              </div>

            </div>

          )
        }

      </div>

    </section>
  );
}