export default function Hero() {

  return (

    <section
      id="home"
      className="relative px-6 pt-24 pb-20 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-green-500/5 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 mb-8">

          AI Powered Healthcare Platform

        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

          Discover
          <span className="text-green-400">
            {" "}Medicinal Plants{" "}
          </span>

          Using Artificial Intelligence

        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-9 mb-12">

          AI-driven medicinal plant intelligence platform combining
          Computer Vision and Generative AI to identify plants,
          analyze medicinal benefits, detect toxicity, and generate
          healthcare insights instantly.

        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="#scanner"
            className="bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-xl font-bold shadow-lg shadow-green-500/30"
          >

            Start Scanning

          </a>

          <a
            href="#features"
            className="border border-white/20 hover:border-green-500/40 transition px-10 py-5 rounded-2xl text-xl font-bold bg-white/5"
          >

            Explore Features

          </a>

        </div>

      </div>

    </section>
  );
}