export default function Footer() {

  return (

    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-green-400 mb-4">

              PlantAI

            </h2>

            <p className="text-gray-400 leading-7">

              AI-powered medicinal plant intelligence platform
              using Computer Vision and Generative AI
              for healthcare insights.

            </p>

          </div>

          {/* Features */}
          <div>

            <h3 className="text-xl font-bold mb-4 text-white">

              Features

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>AI Plant Detection</li>

              <li>Medicinal Analysis</li>

              <li>Toxicity Detection</li>

              <li>Care Recommendations</li>

            </ul>

          </div>

          {/* Tech Stack */}
          <div>

            <h3 className="text-xl font-bold mb-4 text-white">

              Tech Stack

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Next.js</li>

              <li>FastAPI</li>

              <li>Tailwind CSS</li>

              <li>Generative AI</li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">

          © 2026 PlantAI — Built with AI and Full Stack Technologies

        </div>

      </div>

    </footer>
  );
}