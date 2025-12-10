import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-100">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-clay-50">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clay-600 shadow-sm flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">Location</h3>
                  <p className="text-stone-600 mt-1">
                    7-A, Jawaharlal Nehru Salai, Ambal Nagar,<br/> 
                    Ekkatuthangal, Chennai, Tamil Nadu 600032
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Meen+Satti+Seafood+Restaurant+Ekkatuthangal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-clay-700 mt-2 inline-block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clay-600 shadow-sm flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">Opening Hours</h3>
                  <p className="text-stone-600 mt-1">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-green-700 uppercase">Open Now</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clay-600 shadow-sm flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">Contact</h3>
                  <p className="text-stone-600 mt-1">General: 093429 51596</p>
                  <p className="text-stone-600">Delivery: 809129 1280</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder Side (Usually an iframe) */}
          <div className="relative h-96 lg:h-auto bg-stone-200">
             <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1000" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg text-center">
                 <p className="font-bold text-clay-800">Meen Satti</p>
                 <p className="text-xs text-stone-500">Ekkatuthangal</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Meen+Satti+Seafood+Restaurant+Ekkatuthangal" 
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20"
            >
               <span className="bg-white text-stone-900 px-4 py-2 rounded-full font-bold shadow-lg">View on Google Maps</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;