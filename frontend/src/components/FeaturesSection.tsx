export default function FeaturesSection() {

  const features = [

    {
      icon: "🌿",
      title: "AI Plant Detection",
      description:
        "Detect medicinal plants instantly using advanced Computer Vision AI."
    },

    {
      icon: "🧠",
      title: "Medicinal Analysis",
      description:
        "Generate medicinal benefits, healthcare insights, and plant intelligence dynamically."
    },

    {
      icon: "⚠️",
      title: "Toxicity Detection",
      description:
        "AI-generated toxicity analysis for safer medicinal plant usage."
    },

    {
      icon: "💡",
      title: "Care Recommendations",
      description:
        "Receive smart care guidance and maintenance recommendations instantly."
    }

  ];

  return (

    <section
      id="features"
      className="px-6 py-24"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-green-400 mb-6">

          Platform Features

        </h2>

        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">

          AI-powered medicinal plant intelligence platform built using
          modern full-stack technologies, Computer Vision,
          and Generative AI systems.

        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {
            features.map(
              (
                feature,
                index
              ) => (

                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-3xl p-8 transition duration-500 hover:-translate-y-3 hover:border-green-500/40 hover:bg-green-500/10 hover:shadow-2xl hover:shadow-green-500/10"
                >

                  {/* Icon */}
                  <div className="text-5xl mb-6 transition duration-500 group-hover:scale-110">

                    {feature.icon}

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-green-300 mb-4">

                    {feature.title}

                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-7">

                    {feature.description}

                  </p>

                </div>

              )
            )
          }

        </div>

      </div>

    </section>
  );
}