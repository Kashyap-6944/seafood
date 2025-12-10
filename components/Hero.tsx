import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#2E1A16] text-white overflow-hidden min-h-[650px] flex items-center justify-center">
      
      {/* Background Collage Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
         {/* Top Right - Seafood Feast */}
         <img 
            src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop" 
            alt="Seafood Background 1" 
            className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] object-contain opacity-20 mix-blend-overlay rotate-12 blur-[1px]"
         />
         {/* Bottom Left - Clay Pot */}
         <img 
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop" 
            alt="Seafood Background 2" 
            className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] object-contain opacity-20 mix-blend-overlay -rotate-12 blur-[1px]"
         />
         {/* Center/Random - Spices */}
         <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
            alt="Spices Texture" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
         
         {/* Dark Gradient Overlay for Readability */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#2E1A16]/50 via-[#2E1A16]/80 to-[#2E1A16]"></div>
         <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#2E1A16] opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Rating Pill */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#1a0f0a]/60 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.15)] backdrop-blur-sm">
            <Star size={16} className="fill-orange-500 text-orange-500" />
            <span className="text-orange-50 font-medium tracking-wide text-sm">4.3 Rating on Google (2,074 Reviews)</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
          The Ultimate <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB086] via-[#FF7D29] to-[#FFB086] animate-gradient-x bg-[length:200%_auto]">
            Seafood Experience
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 tracking-wide">
          Authentic clay pot cooking in the heart of Chennai. From spicy Nandu Rasam to our signature 10-course Rajavirundhu feast.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a 
            href="#menu"
            className="px-10 py-4 bg-gradient-to-b from-[#EA580C] to-[#C2410C] text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_4px_0_rgb(154,52,18)] active:shadow-none active:translate-y-1 hover:brightness-110"
          >
            View Menu <ArrowRight size={20} />
          </a>
          <a 
            href="#contact"
            className="px-10 py-4 bg-transparent border-2 border-stone-600 hover:border-white text-stone-300 hover:text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center hover:bg-white/5"
          >
            Reserve a Table
          </a>
        </div>

      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden leading-none z-10">
         <svg className="relative block w-[calc(100%+1.3px)] h-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V75.85C1159.91,104.14,1065.71,113.84,985.66,92.83Z" className="fill-clay-50"></path>
         </svg>
      </div>

    </div>
  );
};

export default Hero;