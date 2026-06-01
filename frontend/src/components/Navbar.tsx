export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-3xl font-black text-green-400">

          PlantAI

        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <a
            href="#home"
            className="hover:text-green-400 transition"
          >
            Home
          </a>

          <a
            href="#scanner"
            className="hover:text-green-400 transition"
          >
            Scanner
          </a>

          <a
            href="#features"
            className="hover:text-green-400 transition"
          >
            Features
          </a>

          <a
            href="#footer"
            className="hover:text-green-400 transition"
          >
            About
          </a>

        </div>

        {/* Button */}
        <a
          href="#scanner"
          className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-500/20"
        >

          Get Started

        </a>

      </div>

    </nav>
  );
}