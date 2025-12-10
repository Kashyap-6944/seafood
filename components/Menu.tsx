import React, { useState } from 'react';
import { MENU_DATA } from '../data';
import { ChefHat } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Our Menu</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            From quick bites to grand feasts. All prices are exclusive of GST.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Category Sidebar (Desktop) / Scrollbar (Mobile) */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 z-30 bg-white lg:bg-transparent pb-4 lg:pb-0">
               <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 hide-scrollbar snap-x">
                {MENU_DATA.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      document.getElementById(`cat-${category.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`whitespace-nowrap px-6 py-3 rounded-lg text-left transition-all text-sm font-bold tracking-wide snap-center
                      ${activeCategory === category.id 
                        ? 'bg-clay-700 text-white shadow-md' 
                        : 'bg-stone-100 text-stone-600 hover:bg-clay-100 hover:text-clay-700'
                      }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="lg:w-3/4 space-y-16">
            {MENU_DATA.map((category) => (
              <div 
                key={category.id} 
                id={`cat-${category.id}`} 
                className="scroll-mt-28"
                onMouseEnter={() => setActiveCategory(category.id)} // Optional: Update active on hover
              >
                <div className="flex items-baseline gap-4 mb-8 border-b border-stone-200 pb-4">
                  <h3 className="text-3xl font-serif font-bold text-clay-800">{category.title}</h3>
                  {category.note && (
                    <span className="text-sm text-stone-500 italic bg-stone-100 px-2 py-1 rounded">
                      {category.note}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {category.items.map((item, index) => (
                    <div key={index} className="group flex justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline">
                           <h4 className="font-bold text-lg text-stone-800 group-hover:text-clay-700 transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-bold text-clay-700 font-serif text-lg">
                            ₹{item.price}
                          </span>
                        </div>
                        
                        {item.description && (
                          <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        
                        <div className="flex gap-2 mt-2">
                          {item.isPopular && (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-white bg-amber-500 px-2 py-0.5 rounded-full">
                              <ChefHat size={12} /> Bestseller
                            </span>
                          )}
                          {item.tag && (
                            <span className="text-[10px] uppercase font-bold text-clay-600 bg-clay-100 px-2 py-0.5 rounded-full border border-clay-200">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
