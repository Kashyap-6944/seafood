import { MenuCategory, Review } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'soup',
    title: 'Soup',
    items: [
      { name: 'Nandu Rasam', price: 249, tag: 'Spicy' },
      { name: 'Kozhi Rasam', price: 199 },
      { name: 'Mix Veg Soup', price: 149 },
    ]
  },
  {
    id: 'fish-starters',
    title: 'Fish Starters',
    items: [
      { name: 'Ayila Tawa Fry', price: 299 },
      { name: 'Sankara Tawa Fry', price: 299 },
      { name: 'Vanjaram Tawa Fry', price: 399, isPopular: true },
      { name: 'Maththi Tawa Fry', price: 249 },
      { name: 'Ayila Meen Masala Fry', price: 349 },
      { name: 'Sankara Meen Masala Fry', price: 349 },
      { name: 'Karuvadu Thokku', price: 249 },
      { name: 'Sura Puttu', price: 349 },
      { name: 'Fish Chukka', price: 349 },
      { name: 'Fish Kola Urundai', price: 349 },
      { name: 'Poricha Nethili', price: 299 },
      { name: 'Crispy Karuveppilai Fish', price: 349, description: 'Marinated Boneless Fish Fillet fried to perfection with Karuveppilai' },
    ]
  },
  {
    id: 'mutton-chicken-starters',
    title: 'Mutton & Chicken Starters',
    items: [
      { name: 'Mutton Chukka', price: 349, isPopular: true },
      { name: 'Moolai Roast', price: 349 },
      { name: 'Mutton Pepper', price: 349 },
      { name: 'Chicken Chukka', price: 299 },
      { name: 'Chicken 65', price: 299 },
      { name: 'Pichipota Kozhi Roast', price: 299 },
      { name: 'Chicken Thodakari Roast', price: 299 },
      { name: 'Military Chicken 65', price: 299, description: 'Tender Boneless Chicken pieces marinated in red chilies, garlic and deep-fried.' },
    ]
  },
  {
    id: 'prawn-crab-squid',
    title: 'Prawn, Crab & Squid',
    items: [
      { name: 'Prawn Thokku', price: 349 },
      { name: 'Prawn Nei Thokku', price: 349 },
      { name: 'Garlic Prawn 65', price: 349 },
      { name: 'Prawn Bites', price: 399 },
      { name: 'Crab Pepper Roast', price: 499 },
      { name: 'Crab Lollipop', price: 349 },
      { name: 'Golden Calamari', price: 399 },
      { name: 'Squid Tawa Roast', price: 399 },
      { name: 'Soft Shell Crab Roast', price: 499, description: 'Roasted to perfection offering a crispy outer layer and succulent meat.', tag: 'Signature' },
    ]
  },
  {
    id: 'veg-starters',
    title: 'Veg Starters',
    items: [
      { name: 'Gobi 65', price: 249 },
      { name: 'Mushroom Pepper', price: 249 },
    ]
  },
  {
    id: 'curries',
    title: 'Signature Curries',
    items: [
      { name: 'Ayila Meen Kuzhambu', price: 349, description: 'Ayila simmered in a bold, rustic Kuzhambu with hand-ground masalas and tamarind.' },
      { name: 'Nandu Kuzhambu', price: 499, description: 'Succulent Crab in a tangy gravy made with hand-ground spices.' },
      { name: 'Sankara Meen Kuzhambu', price: 349, description: 'Flavourful tamarind based Sankara Fish curry, simmered in rich tangy gravy.' },
      { name: 'Vanjaram Meen Kuzhambu', price: 499, description: 'Rich South Indian curry made with tender pieces of Vanjaram.' },
      { name: 'Pennaiyur Kari Kuzhambu', price: 399 },
      { name: 'Kozhi Kuzhambu', price: 349 },
    ]
  },
  {
    id: 'meals',
    title: 'Meals & Thalis',
    note: 'Experience the traditional Banana Leaf service',
    items: [
      { 
        name: 'Then Arcot Rajavirundhu', 
        price: 1999, 
        tag: 'Serves 2',
        isPopular: true,
        description: 'The Ultimate Feast: Kozhi Rasam, Chicken Biryani, Parotta, Mutton Chukka, Chicken 65, Maththi Fry, Egg Masala, Chicken Thodakari, Garlic Prawns, Crab Masala, Sura Puttu, Mutton Curry, Fish Curry, Sweet, etc.'
      },
      { name: 'Mutton Meals', price: 499, description: 'Rice, Mutton Chukka, Mutton Curry, Kootu, Poriyal, Rasam, etc.' },
      { name: 'Maththi Fish Meals', price: 399, description: 'Rice, Maththi Fry, Maththi Curry, Kootu, Poriyal, Rasam, etc.' },
      { name: 'Chicken Meals', price: 349, description: 'Rice, Chicken Chukka, Chicken Curry, Kootu, Poriyal, Rasam, etc.' },
      { name: 'Asaiva Saapaadu', price: 249, description: 'Non-Veg Meal: Chicken, Mutton, Fish gravies with Rice.' },
      { name: 'Saiva Saapaadu', price: 199, description: 'Veg Meal: Sambar, Vathakulambu, Rasam, Kootu, Poriyal.' },
    ]
  },
  {
    id: 'biryani',
    title: 'Biryani',
    items: [
      { name: 'Mutton Biryani', price: 399 },
      { name: 'Chicken Biryani', price: 299 },
      { name: 'Chicken 65 Biryani', price: 349, description: 'Crispy Chicken 65 chunks layered with masala biryani.' },
      { name: 'Chicken Thodakari Biryani', price: 399, description: 'Chicken Biryani crowned with a crispy Chicken Thodakari piece.' },
      { name: 'Prawn Nei Thokku Biryani', price: 449, description: 'Prawn Biryani with a spicy twist topped with Signature Prawn Nei Thokku.' },
    ]
  },
  {
    id: 'tiffin',
    title: 'Tiffin & Parotta',
    items: [
      { name: 'Chicken Kizhi Parotta', price: 349, isPopular: true, description: 'Flaky Parottas layered with Chicken Chukka, wrapped in banana leaf and steamed.' },
      { name: 'Mutton Kari Dosa', price: 399, description: 'Dosa topped with flavourful mixture of Mutton.' },
      { name: 'Egg Kothu Parotta', price: 249 },
      { name: 'Chicken Kothu Parotta', price: 349 },
      { name: 'Mutton Kizhi Parotta', price: 399 },
    ]
  },
  {
    id: 'dessert',
    title: 'Desserts & Drinks',
    items: [
      { name: 'Karuppatti Kavuni Halwa', price: 149, isPopular: true },
      { name: 'Coconut Pudding', price: 199 },
      { name: 'Rose Pudding', price: 199 },
      { name: 'Nannari Sarbath', price: 149 },
      { name: 'Goli Soda', price: 59 },
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Karthik Sivaraj',
    rating: 5,
    date: '4 months ago',
    source: 'Local Guide · 25 reviews',
    content: "We tried their famous 10-course meal without many expectations and it was surprisingly good. Here are the highlights that stood out...",
    ownerResponse: "Dear Karthik, Thank you for such a thoughtful review! We’re so glad our 10-course meal met your expectations. Looking forward to serving you again."
  },
  {
    id: '2',
    author: 'Bala Mani',
    rating: 3,
    date: 'a month ago',
    source: 'Local Guide · 12 reviews',
    content: "Yesterday (16/10/2025) I went to this Meen Satti restaurant with my cousin... Sorry to say that as I am from Kanyakumari district the food is not upto my taste expectations.",
    ownerResponse: "Dear Bala, I’m sorry to hear that your experience at Meen Satti didn’t meet your expectations regarding the authenticity of the taste. We take feedback seriously."
  },
  {
    id: '3',
    author: 'Raju Balaraman',
    rating: 3,
    date: 'a month ago',
    source: '1 review',
    content: "Although my order was taken promptly, it took nearly 20 minutes to be served. The food quality was only average.",
    ownerResponse: "Dear Raju, I’m sorry to hear about the delay. We are working on improving our service speed."
  }
];
