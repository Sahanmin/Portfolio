import { GraduationCap } from "lucide-react";
import uomLogo from "../assets/uom_logo-removebg-preview.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl shadow-pink-500/30">
                <img 
                  src="/Dpp2.png" 
                  alt="Sahan Abeyrathna Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content - Right Side */}
          <div className="flex-1 text-left space-y-6">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-400 opacity-0 animate-fade-in-delay-1">
                Hello, I'm
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-2">
                <span className="text-gradient-pink">Sahan</span>{" "}
                <span className="text-gradient-blue">Abeyrathna</span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 opacity-0 animate-fade-in-delay-3">
                Electronic & Telecommunication Engineering Student
              </h2>

              <div className="flex items-center gap-3 text-lg md:text-xl text-gray-400 opacity-0 animate-fade-in-delay-4">
                <img src={uomLogo} alt="University of Moratuwa" className="w-6 h-6 object-contain" />
                <p>Final Year Undergraduate at University of Moratuwa</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded transition-colors duration-300"
              >
                CONTACT ME
              </a>
              <a 
                href="#resume" 
                className="px-8 py-3 border-2 border-pink-600 text-pink-500 hover:bg-pink-600/10 font-semibold rounded transition-colors duration-300"
              >
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
