import React from 'react';
import { REVIEWS } from '../data';
import { Star, MessageCircle } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="bg-stone-100 py-20 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">What Our Customers Say</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" className="text-yellow-500/50" />
              </div>
              <span className="font-bold text-lg text-stone-700">4.3</span>
              <span className="text-stone-500">(2,074 Google Reviews)</span>
            </div>
          </div>
          <a 
            href="https://www.google.com/search?q=Meen+Satti+Seafood+Restaurant+Ekkatuthangal+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-2 border border-stone-300 rounded-full text-sm font-semibold hover:bg-white hover:border-clay-500 transition-colors inline-block"
          >
            Write a Review
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center text-stone-600 font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{review.author}</h4>
                    <p className="text-xs text-stone-500">{review.source}</p>
                  </div>
                </div>
                <div className="text-xs text-stone-400">{review.date}</div>
              </div>
              
              <div className="flex text-yellow-500 mb-3">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-stone-300" : ""} />
                 ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed flex-grow mb-4">
                "{review.content}"
              </p>

              {review.ownerResponse && (
                <div className="mt-4 bg-stone-50 p-3 rounded-lg border-l-2 border-clay-500">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageCircle size={14} className="text-clay-600" />
                    <span className="text-xs font-bold text-stone-700">Response from Owner</span>
                  </div>
                  <p className="text-xs text-stone-500 italic">
                    {review.ownerResponse.length > 80 ? review.ownerResponse.substring(0, 80) + '...' : review.ownerResponse}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;