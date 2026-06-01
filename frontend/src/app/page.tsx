import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <UploadCard />

        <FeaturesSection />

        <Footer />

      </div>

    </main>
  );
}