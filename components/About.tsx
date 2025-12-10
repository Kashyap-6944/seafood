import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-clay-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
               <span className="h-px w-12 bg-clay-600"></span>
               <span className="text-clay-700 font-bold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              We didn't invent fish curry. <span className="text-clay-700 italic">We just never forgot how to cook it right.</span>
            </h2>

            <div className="prose prose-stone text-lg text-stone-600 space-y-6">
              <p>
                What began as a home cloud kitchen in 2021 has now grown into a celebrated seafood destination - all sparked by a phone call between two best friends craving something close to home: a bowl of authentic Fish Curry.
              </p>
              <p>
                At Meen Satti, we believe fish curry isn't fancy — it's family. It's how we grew up eating. Steaming rice, tangy curry, fish fry on the side.
              </p>
              <div className="bg-white p-6 rounded-xl border-l-4 border-clay-600 shadow-sm my-8">
                 <Quote className="text-clay-300 mb-2 h-8 w-8" />
                 <p className="italic font-serif text-stone-800 font-medium">
                  "Every meal is cooked like home - just like how Amma makes it, fresh with slow-simmered masalas, and the kind of taste that lingers long after the last bite."
                 </p>
              </div>
              <p>
                Since our launch, we are incredibly happy to have served <span className="font-bold text-clay-700">1 Lakh plus meals</span>. Whether you're working late, homesick, or just hungry for something familiar, Meen Satti is your everyday fix.
              </p>
              
              <div className="pt-4 font-handwriting text-2xl text-clay-800">
                Fishing you the best,<br/>
                <span className="font-bold font-serif">Team Meen Satti</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600" 
                  alt="Spicy Fish Fry" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" 
                  alt="Restaurant Ambiance" 
                  className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
             </div>
             <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600" 
                  alt="Clay Pot Cooking" 
                  className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600" 
                  alt="Seafood Thali" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;