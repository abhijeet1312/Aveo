// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Leaf, Shield, Truck, Phone } from 'lucide-react';
// import CategoryFilter from '../components/product/CategoryFilter';
// import ProductGrid from '../components/product/ProductGrid';

// const HomePage = () => {
//   const Hero = () => (
//     <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Your Pet Deserves
//                 <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   Eco-Luxury
//                 </span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-lg">
//                 Premium sustainable products that last years & help save the planet. 
//                 From bamboo bowls to solar feeders.
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 Shop Now - Free UAE Shipping
//               </button>
//               <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
//                 Watch Demo
//               </button>
//             </div>

//             <div className="flex items-center space-x-8 pt-4">
//               <div className="flex items-center space-x-2">
//                 <Shield className="w-6 h-6 text-green-600" />
//                 <span className="text-sm text-gray-600">Eco-Certified</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Truck className="w-6 h-6 text-green-600" />
//                 <span className="text-sm text-gray-600">Fast Shipping</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-6 h-6 text-green-600" />
//                 <span className="text-sm text-gray-600">24/7 Support</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl transform rotate-6 opacity-20"></div>
//             <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop"
//                 alt="Eco-friendly pet products"
//                 className="w-full h-96 object-cover rounded-2xl"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
//                 <div className="text-2xl font-bold">50%</div>
//                 <div className="text-sm">ECO SAVINGS</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   const Features = () => (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
//             <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Leaf className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="text-xl font-bold text-gray-900 mb-2">100% Eco-Friendly</h4>
//             <p className="text-gray-600">
//               All products are made from sustainable, renewable materials that protect our planet.
//             </p>
//           </div>

//           <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
//             <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Shield className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
//             <p className="text-gray-600">
//               Rigorously tested products that combine sustainability with exceptional durability.
//             </p>
//           </div>

//           <div className="text-center p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
//             <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Truck className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Shipping</h4>
//             <p className="text-gray-600">
//               Free shipping across UAE and fast delivery to India and Southeast Asia.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div>
//       <Hero />
//       <CategoryFilter />
//       <ProductGrid />
//       <Features />
//     </div>
//   );
// };

// export default HomePage;



// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Leaf, Shield, Truck, Phone, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
// import CategoryFilter from '../components/product/CategoryFilter';
// import ProductGrid from '../components/product/ProductGrid';

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const featuredCarouselRef = useRef(null);
//   const categoryCarouselRef = useRef(null);

//   const heroSlides = [
//     {
//       title: "Sustainable Living is Easy",
//       subtitle: "Premium eco-friendly products for conscious pet parents",
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
//       cta: "SHOP SUSTAINABLE"
//     },
//     {
//       title: "Your Pet Deserves Eco-Luxury",
//       subtitle: "From bamboo bowls to solar feeders - sustainable choices",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
//       cta: "EXPLORE PRODUCTS"
//     }
//   ];

//   const featuredProducts = [
//     {
//       id: 1,
//       name: "Bamboo Pet Bowl Set",
//       price: "₹469",
//       originalPrice: "₹599",
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
//       badge: "Save 22%",
//       rating: 4.7
//     },
//     {
//       id: 2,
//       name: "Eco-Friendly Pet Bed",
//       price: "₹809",
//       originalPrice: "₹999",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
//       badge: "Save 10%",
//       rating: 4.6
//     },
//     {
//       id: 3,
//       name: "Natural Hemp Toy",
//       price: "₹1,499",
//       originalPrice: "₹1,799",
//       image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
//       badge: "Save 17%",
//       rating: 5.0
//     },
//     {
//       id: 4,
//       name: "Solar Pet Feeder",
//       price: "₹799",
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
//       badge: "NEW",
//       rating: 4.7
//     },
//     {
//       id: 5,
//       name: "Coconut Shell Water Bowl",
//       price: "₹548",
//       originalPrice: "₹699",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
//       badge: "Save 22%",
//       rating: 4.7
//     }
//   ];

//   const categoryCards = [
//     {
//       title: "Pet Care",
//       subtitle: "Sustainable & Safe",
//       description: "Non-toxic & eco-friendly",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Essential Accessories",
//       subtitle: "For Daily Use",
//       description: "Durable & planet-friendly",
//       image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Organic Treats",
//       subtitle: "Natural & Healthy",
//       description: "Premium organic ingredients",
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Solar Accessories",
//       subtitle: "Energy Efficient",
//       description: "Solar-powered pet solutions",
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Eco Toys",
//       subtitle: "Safe Play",
//       description: "Reusable, 100% natural",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
//     }
//   ];

//   const scrollCarousel = (ref, direction) => {
//     if (ref.current) {
//       const scrollAmount = 320;
//       ref.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const Hero = () => (
//     <section className="relative h-[70vh] overflow-hidden">
//       {heroSlides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//           </div>
          
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//             <div className="text-white max-w-2xl">
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 {slide.title}
//               </h1>
//               <p className="text-xl mb-8 text-white/90">
//                 {slide.subtitle}
//               </p>
//               <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
//                 <span>{slide.cta}</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
      
//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );

//   const FeaturedProducts = () => (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">Best in Home & Living</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Warm, <span className="text-teal-600">Green</span>, <span className="border-b-4 border-orange-400">Serene</span>
//             </h2>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(featuredCarouselRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(featuredCarouselRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={featuredCarouselRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {featuredProducts.map((product) => (
//             <div key={product.id} className="flex-none w-80">
//               <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                       product.badge.includes('Save') ? 'bg-green-100 text-green-800' :
//                       product.badge === 'NEW' ? 'bg-blue-100 text-blue-800' :
//                       'bg-orange-100 text-orange-800'
//                     }`}>
//                       {product.badge}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
//                       <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                       <span className="text-xs font-medium">{product.rating}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-lg font-bold text-gray-900">{product.price}</span>
//                     {product.originalPrice && (
//                       <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const CategorySection = () => (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">Best in Lifestyle</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Curated for <span className="border-b-4 border-yellow-400">Thoughtful</span> Homes
//             </h2>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(categoryCarouselRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(categoryCarouselRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={categoryCarouselRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {categoryCards.map((category, index) => (
//             <div key={index} className="flex-none w-80">
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-xl font-bold mb-1">{category.title}</h3>
//                   <p className="text-sm text-white/90 mb-1">{category.subtitle}</p>
//                   <p className="text-xs text-white/75">{category.description}</p>
//                   <ArrowRight className="w-5 h-5 mt-2 transform group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const SustainableSwaps = () => (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <p className="text-sm text-gray-600 mb-2">Curated with Love</p>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             <span className="border-b-4 border-orange-400">Easy</span> Sustainable Swaps
//           </h2>
//           <p className="text-gray-600 max-w-3xl">
//             Choose from our handpicked list of every-day essentials that help you get started with a plastic-free and earth-friendly lifestyle.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {[
//             {
//               title: "Food Wrap",
//               subtitle: "Reuse upto 100 times",
//               image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Bamboo Speakers",
//               subtitle: "Electricity-Free Amplifier",
//               image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Shampoo Bar",
//               subtitle: "Travel-Friendly",
//               image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Water Saving Devices",
//               subtitle: "Saves upto 90% water",
//               image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Vegetable Bags",
//               subtitle: "Reusable, 100% Cotton",
//               image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
//             }
//           ].map((item, index) => (
//             <div key={index} className="group cursor-pointer">
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="font-bold mb-1">{item.title}</h3>
//                   <p className="text-xs text-white/90">{item.subtitle}</p>
//                   <ArrowRight className="w-4 h-4 mt-2 transform group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div className="overflow-hidden">
//       <Hero />
//       <CategoryFilter />
//       <FeaturedProducts />
//       <CategorySection />
//       <ProductGrid />
//       <SustainableSwaps />
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Leaf, Shield, Truck, Phone, Star, CheckCircle, ChevronLeft, ChevronRight, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../redux/slices/cartSlice';
// import { toggleFavorite } from '../redux/slices/userSlice';
// import { useCart } from '../hooks/useCart';

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const featuredCarouselRef = useRef(null);
//   const categoryCarouselRef = useRef(null);
//   const petCareRef = useRef(null);
//   const ecoLivingRef = useRef(null);
//   const fitnessRef = useRef(null);
//   const dispatch = useDispatch();
//   const { favorites } = useSelector(state => state.user);
//   const { addItemToCart, incrementItemQuantity, decrementItemQuantity, getItemQuantity } = useCart();

//   const heroSlides = [
//     {
//       title: "Sustainable Living is Easy",
//       subtitle: "Premium eco-friendly products for conscious pet parents",
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
//       cta: "SHOP SUSTAINABLE"
//     },
//     {
//       title: "Your Pet Deserves Eco-Luxury",
//       subtitle: "From bamboo bowls to solar feeders - sustainable choices",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
//       cta: "EXPLORE PRODUCTS"
//     }
//   ];

//   const petCareProducts = [
//     {
//       id: 1,
//       name: "Bamboo Pet Bowl Set",
//       description: "Eco-friendly dining for your pet",
//       price: 469,
//       originalPrice: 599,
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
//       badge: "Eco-Friendly",
//       rating: 4.7,
//       reviews: 124,
//       inStock: 15,
//       category: "pets"
//     },
//     {
//       id: 2,
//       name: "Natural Hemp Rope Toy",
//       description: "Safe and durable playtime",
//       price: 299,
//       originalPrice: 399,
//       image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
//       badge: "Best Seller",
//       rating: 4.8,
//       reviews: 89,
//       inStock: 8,
//       category: "pets"
//     },
//     {
//       id: 3,
//       name: "Organic Cotton Pet Bed",
//       description: "Comfortable & sustainable sleep",
//       price: 1299,
//       originalPrice: 1599,
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
//       badge: "Premium",
//       rating: 4.9,
//       reviews: 156,
//       inStock: 5,
//       category: "pets"
//     },
//     {
//       id: 4,
//       name: "Solar Pet Water Fountain",
//       description: "Energy-efficient hydration",
//       price: 2499,
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
//       badge: "New",
//       rating: 4.6,
//       reviews: 67,
//       inStock: 12,
//       category: "pets"
//     },
//     {
//       id: 5,
//       name: "Coconut Shell Food Bowl",
//       description: "Natural & biodegradable",
//       price: 349,
//       originalPrice: 449,
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
//       badge: "Eco-Friendly",
//       rating: 4.5,
//       reviews: 98,
//       inStock: 20,
//       category: "pets"
//     }
//   ];

//   const ecoLivingProducts = [
//     {
//       id: 6,
//       name: "Bamboo Toothbrush Set",
//       description: "Plastic-free oral care",
//       price: 199,
//       originalPrice: 299,
//       image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
//       badge: "Eco-Friendly",
//       rating: 4.7,
//       reviews: 203,
//       inStock: 25,
//       category: "eco"
//     },
//     {
//       id: 7,
//       name: "Reusable Food Wraps",
//       description: "Replace plastic wrap naturally",
//       price: 549,
//       originalPrice: 699,
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
//       badge: "Best Seller",
//       rating: 4.8,
//       reviews: 145,
//       inStock: 18,
//       category: "eco"
//     },
//     {
//       id: 8,
//       name: "Solar LED Lantern",
//       description: "Sustainable outdoor lighting",
//       price: 899,
//       originalPrice: 1199,
//       image: "https://images.unsplash.com/photo-1573160103600-30629dfeabb4?w=400&h=400&fit=crop",
//       badge: "Premium",
//       rating: 4.6,
//       reviews: 87,
//       inStock: 10,
//       category: "eco"
//     },
//     {
//       id: 9,
//       name: "Organic Cotton Tote Bag",
//       description: "Stylish & sustainable shopping",
//       price: 399,
//       image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
//       badge: "New",
//       rating: 4.5,
//       reviews: 76,
//       inStock: 30,
//       category: "eco"
//     },
//     {
//       id: 10,
//       name: "Stainless Steel Water Bottle",
//       description: "BPA-free hydration solution",
//       price: 799,
//       originalPrice: 999,
//       image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
//       badge: "Eco-Friendly",
//       rating: 4.9,
//       reviews: 234,
//       inStock: 22,
//       category: "eco"
//     }
//   ];

//   const fitnessProducts = [
//     {
//       id: 11,
//       name: "Cork Yoga Mat",
//       description: "Natural grip & comfort",
//       price: 1999,
//       originalPrice: 2499,
//       image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop",
//       badge: "Premium",
//       rating: 4.8,
//       reviews: 112,
//       inStock: 8,
//       category: "fitness"
//     },
//     {
//       id: 12,
//       name: "Bamboo Resistance Bands",
//       description: "Eco-friendly strength training",
//       price: 699,
//       originalPrice: 899,
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
//       badge: "Best Seller",
//       rating: 4.7,
//       reviews: 89,
//       inStock: 15,
//       category: "fitness"
//     },
//     {
//       id: 13,
//       name: "Organic Hemp Protein",
//       description: "Plant-based nutrition",
//       price: 1299,
//       image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
//       badge: "New",
//       rating: 4.6,
//       reviews: 67,
//       inStock: 12,
//       category: "fitness"
//     },
//     {
//       id: 14,
//       name: "Wooden Yoga Blocks",
//       description: "Sustainable support & alignment",
//       price: 899,
//       originalPrice: 1199,
//       image: "https://images.unsplash.com/photo-1506629905586-b19ea1a1d093?w=400&h=400&fit=crop",
//       badge: "Eco-Friendly",
//       rating: 4.5,
//       reviews: 94,
//       inStock: 20,
//       category: "fitness"
//     },
//     {
//       id: 15,
//       name: "Natural Rubber Dumbbells",
//       description: "Chemical-free strength training",
//       price: 1799,
//       originalPrice: 2199,
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
//       badge: "Premium",
//       rating: 4.9,
//       reviews: 156,
//       inStock: 6,
//       category: "fitness"
//     }
//   ];

//   const categoryCards = [
//     {
//       title: "Pet Care",
//       subtitle: "Sustainable & Safe",
//       description: "Non-toxic & eco-friendly",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Essential Accessories",
//       subtitle: "For Daily Use",
//       description: "Durable & planet-friendly",
//       image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Organic Treats",
//       subtitle: "Natural & Healthy",
//       description: "Premium organic ingredients",
//       image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Solar Accessories",
//       subtitle: "Energy Efficient",
//       description: "Solar-powered pet solutions",
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Eco Toys",
//       subtitle: "Safe Play",
//       description: "Reusable, 100% natural",
//       image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
//     }
//   ];

//   const scrollCarousel = (ref, direction) => {
//     if (ref.current) {
//       const scrollAmount = 320;
//       ref.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const ProductCard = ({ product }) => {
//     const quantity = getItemQuantity(product.id);
//     const isFavorite = favorites.includes(product.id);

//     const handleAddToCart = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       addItemToCart(product);
//     };

//     const handleToggleFavorite = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       dispatch(toggleFavorite(product.id));
//     };

//     const handleIncrement = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       incrementItemQuantity(product.id);
//     };

//     const handleDecrement = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       decrementItemQuantity(product.id);
//     };

//     return (
//       <Link to={`/product/${product.id}`} className="block flex-none w-80">
//         <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
//           <div className="relative">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute top-4 left-4">
//               <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                 product.badge === 'Eco-Friendly' ? 'bg-green-100 text-green-800' :
//                 product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
//                 product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
//                 'bg-blue-100 text-blue-800'
//               }`}>
//                 {product.badge}
//               </span>
//             </div>
//             <button
//               onClick={handleToggleFavorite}
//               className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
//             >
//               <Heart
//                 className={`w-5 h-5 ${
//                   isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
//                 }`}
//               />
//             </button>
//             <div className="absolute top-4 right-16">
//               <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
//                 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                 <span className="text-xs font-medium">{product.rating}</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="p-6">
//             <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
//             <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            
//             <div className="flex items-center space-x-2 mb-3">
//               <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
//             </div>

//             <div className="flex items-center space-x-2 mb-4">
//               <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
//               )}
//             </div>

//             <div className="flex items-center space-x-2 mb-4">
//               <span className="text-sm text-gray-600">Stock:</span>
//               <span className={`text-sm font-medium ${
//                 product.inStock > 10 ? 'text-green-600' : 
//                 product.inStock > 0 ? 'text-yellow-600' : 'text-red-600'
//               }`}>
//                 {product.inStock > 0 ? `${product.inStock} available` : 'Out of stock'}
//               </span>
//             </div>

//             {quantity > 0 ? (
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <button
//                     onClick={handleDecrement}
//                     className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
                  
//                   <span className="w-8 text-center font-semibold">{quantity}</span>
                  
//                   <button
//                     onClick={handleIncrement}
//                     className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors z-10"
//                   >
//                     <Plus className="w-4 h-4 text-green-600" />
//                   </button>
//                 </div>
                
//                 <span className="text-green-600 font-semibold">In Cart</span>
//               </div>
//             ) : (
//               <button
//                 onClick={handleAddToCart}
//                 disabled={product.inStock === 0}
//                 className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 z-10 ${
//                   product.inStock > 0
//                     ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//               >
//                 <ShoppingCart className="w-5 h-5" />
//                 <span>{product.inStock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </Link>
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const Hero = () => (
//     <section className="relative h-[70vh] overflow-hidden">
//       {heroSlides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//           </div>
          
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//             <div className="text-white max-w-2xl">
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 {slide.title}
//               </h1>
//               <p className="text-xl mb-8 text-white/90">
//                 {slide.subtitle}
//               </p>
//               <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
//                 <span>{slide.cta}</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
      
//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );

//   const FeaturedProducts = () => (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">Best in Home & Living</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Warm, <span className="text-teal-600">Green</span>, <span className="border-b-4 border-orange-400">Serene</span>
//             </h2>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(featuredCarouselRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(featuredCarouselRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={featuredCarouselRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {petCareProducts.slice(0, 3).concat(ecoLivingProducts.slice(0, 2)).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const PetCareSection = () => (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">🐾 Pet Care Essentials</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Sustainable <span className="border-b-4 border-green-400">Pet Care</span>
//             </h2>
//             <p className="text-gray-600 mt-2">Eco-friendly products that keep your pets happy and healthy</p>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(petCareRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(petCareRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={petCareRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {petCareProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const EcoLivingSection = () => (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">🌱 Eco Living</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Green <span className="border-b-4 border-blue-400">Lifestyle</span> Choices
//             </h2>
//             <p className="text-gray-600 mt-2">Sustainable alternatives for everyday living</p>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(ecoLivingRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(ecoLivingRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={ecoLivingRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {ecoLivingProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const FitnessSection = () => (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">💪 Fitness & Wellness</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Natural <span className="border-b-4 border-purple-400">Fitness</span> Solutions
//             </h2>
//             <p className="text-gray-600 mt-2">Eco-friendly fitness equipment for a healthier you and planet</p>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(fitnessRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(fitnessRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={fitnessRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {fitnessProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );


//   const CategorySection = () => (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-2">Best in Lifestyle</p>
//             <h2 className="text-3xl font-bold text-gray-900">
//               Curated for <span className="border-b-4 border-yellow-400">Thoughtful</span> Homes
//             </h2>
//           </div>
          
//           <div className="flex space-x-2">
//             <button
//               onClick={() => scrollCarousel(categoryCarouselRef, 'left')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scrollCarousel(categoryCarouselRef, 'right')}
//               className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div 
//           ref={categoryCarouselRef}
//           className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {categoryCards.map((category, index) => (
//             <div key={index} className="flex-none w-80">
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-xl font-bold mb-1">{category.title}</h3>
//                   <p className="text-sm text-white/90 mb-1">{category.subtitle}</p>
//                   <p className="text-xs text-white/75">{category.description}</p>
//                   <ArrowRight className="w-5 h-5 mt-2 transform group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const SustainableSwaps = () => (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <p className="text-sm text-gray-600 mb-2">Curated with Love</p>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             <span className="border-b-4 border-orange-400">Easy</span> Sustainable Swaps
//           </h2>
//           <p className="text-gray-600 max-w-3xl">
//             Choose from our handpicked list of every-day essentials that help you get started with a plastic-free and earth-friendly lifestyle.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {[
//             {
//               title: "Food Wrap",
//               subtitle: "Reuse upto 100 times",
//               image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Bamboo Speakers",
//               subtitle: "Electricity-Free Amplifier",
//               image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Shampoo Bar",
//               subtitle: "Travel-Friendly",
//               image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Water Saving Devices",
//               subtitle: "Saves upto 90% water",
//               image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
//             },
//             {
//               title: "Vegetable Bags",
//               subtitle: "Reusable, 100% Cotton",
//               image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
//             }
//           ].map((item, index) => (
//             <div key={index} className="group cursor-pointer">
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="font-bold mb-1">{item.title}</h3>
//                   <p className="text-xs text-white/90">{item.subtitle}</p>
//                   <ArrowRight className="w-4 h-4 mt-2 transform group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div className="overflow-hidden">
//       <Hero />
//       <FeaturedProducts />
//       <PetCareSection />
//       <EcoLivingSection />
//       <FitnessSection />
//       <CategorySection />
//       <SustainableSwaps />
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck, Phone, Star, CheckCircle, ChevronLeft, ChevronRight, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { toggleFavorite } from '../redux/slices/userSlice';
import { useCart } from '../hooks/useCart';
import { fetchCJProducts } from '../redux/slices/productSlice';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredCarouselRef = useRef(null);
  const categoryCarouselRef = useRef(null);
  const petCareRef = useRef(null);
  const ecoLivingRef = useRef(null);
  const fitnessRef = useRef(null);
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.user);
  const {products} = useSelector(state => state.products);
  const { addItemToCart, incrementItemQuantity, decrementItemQuantity, getItemQuantity } = useCart();

 

  useEffect(() => {
    // Fetch products when app loads
    dispatch(fetchCJProducts());
  }, [dispatch]);

  const heroSlides = [
    {
      title: "Sustainable Living is Easy",
      subtitle: "Premium eco-friendly products for conscious pet parents",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
      cta: "SHOP SUSTAINABLE"
    },
    {
      title: "Your Pet Deserves Eco-Luxury",
      subtitle: "From bamboo bowls to solar feeders - sustainable choices",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
      cta: "EXPLORE PRODUCTS"
    }
  ];

  const petCareProducts = products.filter(product => product.category === 'pets');
  const ecoLivingProducts = products.filter(product => product.category === 'eco');
  const fitnessProducts = products.filter(product => product.category === 'fitness');

  // const petCareProducts = [
  //   {
  //     id: 1,
  //     name: "Bamboo Pet Bowl Set",
  //     description: "Eco-friendly dining for your pet",
  //     price: 469,
  //     originalPrice: 599,
  //     image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
  //     badge: "Eco-Friendly",
  //     rating: 4.7,
  //     reviews: 124,
  //     inStock: 15,
  //     category: "pets"
  //   },
  //   {
  //     id: 2,
  //     name: "Natural Hemp Rope Toy",
  //     description: "Safe and durable playtime",
  //     price: 299,
  //     originalPrice: 399,
  //     image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
  //     badge: "Best Seller",
  //     rating: 4.8,
  //     reviews: 89,
  //     inStock: 8,
  //     category: "pets"
  //   },
  //   {
  //     id: 3,
  //     name: "Organic Cotton Pet Bed",
  //     description: "Comfortable & sustainable sleep",
  //     price: 1299,
  //     originalPrice: 1599,
  //     image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
  //     badge: "Premium",
  //     rating: 4.9,
  //     reviews: 156,
  //     inStock: 5,
  //     category: "pets"
  //   },
  //   {
  //     id: 4,
  //     name: "Solar Pet Water Fountain",
  //     description: "Energy-efficient hydration",
  //     price: 2499,
  //     image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
  //     badge: "New",
  //     rating: 4.6,
  //     reviews: 67,
  //     inStock: 12,
  //     category: "pets"
  //   },
  //   {
  //     id: 5,
  //     name: "Coconut Shell Food Bowl",
  //     description: "Natural & biodegradable",
  //     price: 349,
  //     originalPrice: 449,
  //     image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
  //     badge: "Eco-Friendly",
  //     rating: 4.5,
  //     reviews: 98,
  //     inStock: 20,
  //     category: "pets"
  //   }
  // ];

  // const ecoLivingProducts = [
  //   {
  //     id: 6,
  //     name: "Bamboo Toothbrush Set",
  //     description: "Plastic-free oral care",
  //     price: 199,
  //     originalPrice: 299,
  //     image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
  //     badge: "Eco-Friendly",
  //     rating: 4.7,
  //     reviews: 203,
  //     inStock: 25,
  //     category: "eco"
  //   },
  //   {
  //     id: 7,
  //     name: "Reusable Food Wraps",
  //     description: "Replace plastic wrap naturally",
  //     price: 549,
  //     originalPrice: 699,
  //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  //     badge: "Best Seller",
  //     rating: 4.8,
  //     reviews: 145,
  //     inStock: 18,
  //     category: "eco"
  //   },
  //   {
  //     id: 8,
  //     name: "Solar LED Lantern",
  //     description: "Sustainable outdoor lighting",
  //     price: 899,
  //     originalPrice: 1199,
  //     image: "https://images.unsplash.com/photo-1573160103600-30629dfeabb4?w=400&h=400&fit=crop",
  //     badge: "Premium",
  //     rating: 4.6,
  //     reviews: 87,
  //     inStock: 10,
  //     category: "eco"
  //   },
  //   {
  //     id: 9,
  //     name: "Organic Cotton Tote Bag",
  //     description: "Stylish & sustainable shopping",
  //     price: 399,
  //     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  //     badge: "New",
  //     rating: 4.5,
  //     reviews: 76,
  //     inStock: 30,
  //     category: "eco"
  //   },
  //   {
  //     id: 10,
  //     name: "Stainless Steel Water Bottle",
  //     description: "BPA-free hydration solution",
  //     price: 799,
  //     originalPrice: 999,
  //     image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
  //     badge: "Eco-Friendly",
  //     rating: 4.9,
  //     reviews: 234,
  //     inStock: 22,
  //     category: "eco"
  //   }
  // ];

  // const fitnessProducts = [
  //   {
  //     id: 11,
  //     name: "Cork Yoga Mat",
  //     description: "Natural grip & comfort",
  //     price: 1999,
  //     originalPrice: 2499,
  //     image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop",
  //     badge: "Premium",
  //     rating: 4.8,
  //     reviews: 112,
  //     inStock: 8,
  //     category: "fitness"
  //   },
  //   {
  //     id: 12,
  //     name: "Bamboo Resistance Bands",
  //     description: "Eco-friendly strength training",
  //     price: 699,
  //     originalPrice: 899,
  //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
  //     badge: "Best Seller",
  //     rating: 4.7,
  //     reviews: 89,
  //     inStock: 15,
  //     category: "fitness"
  //   },
  //   {
  //     id: 13,
  //     name: "Organic Hemp Protein",
  //     description: "Plant-based nutrition",
  //     price: 1299,
  //     image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
  //     badge: "New",
  //     rating: 4.6,
  //     reviews: 67,
  //     inStock: 12,
  //     category: "fitness"
  //   },
  //   {
  //     id: 14,
  //     name: "Wooden Yoga Blocks",
  //     description: "Sustainable support & alignment",
  //     price: 899,
  //     originalPrice: 1199,
  //     image: "https://images.unsplash.com/photo-1506629905586-b19ea1a1d093?w=400&h=400&fit=crop",
  //     badge: "Eco-Friendly",
  //     rating: 4.5,
  //     reviews: 94,
  //     inStock: 20,
  //     category: "fitness"
  //   },
  //   {
  //     id: 15,
  //     name: "Natural Rubber Dumbbells",
  //     description: "Chemical-free strength training",
  //     price: 1799,
  //     originalPrice: 2199,
  //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
  //     badge: "Premium",
  //     rating: 4.9,
  //     reviews: 156,
  //     inStock: 6,
  //     category: "fitness"
  //   }
  // ];

  const categoryCards = [
    {
      title: "Pet Care",
      subtitle: "Sustainable & Safe",
      description: "Non-toxic & eco-friendly",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
    },
    {
      title: "Essential Accessories",
      subtitle: "For Daily Use",
      description: "Durable & planet-friendly",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"
    },
    {
      title: "Organic Treats",
      subtitle: "Natural & Healthy",
      description: "Premium organic ingredients",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
    },
    {
      title: "Solar Accessories",
      subtitle: "Energy Efficient",
      description: "Solar-powered pet solutions",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    },
    {
      title: "Eco Toys",
      subtitle: "Safe Play",
      description: "Reusable, 100% natural",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
    }
  ];

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 320;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const ProductCard = ({ product }) => {
    const quantity = getItemQuantity(product.id);
    const isFavorite = favorites.includes(product.id);

    const handleAddToCart = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addItemToCart(product);
    };

    const handleToggleFavorite = (e) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(toggleFavorite(product.id));
    };

    const handleIncrement = (e) => {
      e.preventDefault();
      e.stopPropagation();
      incrementItemQuantity(product.id);
    };

    const handleDecrement = (e) => {
      e.preventDefault();
      e.stopPropagation();
      decrementItemQuantity(product.id);
    };

    return (
      <Link to={`/product/${product.id}`} className="block flex-none w-80">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-amber-100">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                product.badge === 'Eco-Friendly' ? 'bg-amber-100 text-amber-800' :
                product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {product.badge}
              </span>
            </div>
            {/* <button
              onClick={handleToggleFavorite}
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`}
              />
            </button> */}
            <div className="absolute top-4 right-2">
              <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{product.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-amber-700">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            {/* <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-600">Stock:</span>
              <span className={`text-sm font-medium ${
                product.inStock > 10 ? 'text-green-600' : 
                product.inStock > 0 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {product.inStock > 0 ? `${product.inStock} available` : 'Out of stock'}
              </span>
            </div> */}

            {quantity > 0 ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleDecrement}
                    className="w-8 h-8 rounded-full bg-amber-50 hover:bg-amber-100 flex items-center justify-center transition-colors z-10 border border-amber-200"
                  >
                    <Minus className="w-4 h-4 text-amber-700" />
                  </button>
                  
                  <span className="w-8 text-center font-semibold text-amber-800">{quantity}</span>
                  
                  <button
                    onClick={handleIncrement}
                    className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors z-10"
                  >
                    <Plus className="w-4 h-4 text-amber-700" />
                  </button>
                </div>
                
                <span className="text-amber-700 font-semibold">In Cart</span>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                disabled={product.inStock === 0}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 z-10 ${
                  product.inStock > 0
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            )}
          </div>
        </div>
      </Link>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const Hero = () => (
    <section className="relative h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-900/50 to-transparent"></div> */}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {slide.subtitle}
              </p>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2">
                <span>{slide.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );

  const FeaturedProducts = () => (
    <section className="py-16" style={{ backgroundColor: '#f9e8dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-amber-700 mb-2">Best in Home & Living</p>
            <h2 className="text-3xl font-bold text-amber-900">
              Warm, <span className="text-orange-700">Natural</span>, <span className="border-b-4 border-amber-500">Premium</span>
            </h2>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel(featuredCarouselRef, 'left')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => scrollCarousel(featuredCarouselRef, 'right')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>

        <div 
          ref={featuredCarouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {petCareProducts.slice(0, 3).concat(ecoLivingProducts.slice(0, 2)).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  const PetCareSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-amber-700 mb-2">🐾 Pet Care Essentials</p>
            <h2 className="text-3xl font-bold text-amber-900">
              Sustainable <span className="border-b-4 border-orange-400">Pet Care</span>
            </h2>
            <p className="text-amber-700 mt-2">Eco-friendly products that keep your pets happy and healthy</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel(petCareRef, 'left')}
              className="p-2 bg-amber-50 border border-amber-200 rounded-full hover:bg-amber-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => scrollCarousel(petCareRef, 'right')}
              className="p-2 bg-amber-50 border border-amber-200 rounded-full hover:bg-amber-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>

        <div 
          ref={petCareRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {petCareProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  const EcoLivingSection = () => (
    <section className="py-16" style={{ backgroundColor: '#f9e8dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-amber-700 mb-2">🌱 Eco Living</p>
            <h2 className="text-3xl font-bold text-amber-900">
              Green <span className="border-b-4 border-orange-400">Lifestyle</span> Choices
            </h2>
            <p className="text-amber-700 mt-2">Sustainable alternatives for everyday living</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel(ecoLivingRef, 'left')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => scrollCarousel(ecoLivingRef, 'right')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>

        <div 
          ref={ecoLivingRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ecoLivingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  const FitnessSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-amber-700 mb-2">💪 Fitness & Wellness</p>
            <h2 className="text-3xl font-bold text-amber-900">
              Natural <span className="border-b-4 border-amber-500">Fitness</span> Solutions
            </h2>
            <p className="text-amber-700 mt-2">Eco-friendly fitness equipment for a healthier you and planet</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel(fitnessRef, 'left')}
              className="p-2 bg-amber-50 border border-amber-200 rounded-full hover:bg-amber-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => scrollCarousel(fitnessRef, 'right')}
              className="p-2 bg-amber-50 border border-amber-200 rounded-full hover:bg-amber-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>

        <div 
          ref={fitnessRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {fitnessProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );

  const CategorySection = () => (
    <section className="py-16" style={{ backgroundColor: '#f9e8dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-amber-700 mb-2">Best in Lifestyle</p>
            <h2 className="text-3xl font-bold text-amber-900">
              Curated for <span className="border-b-4 border-amber-500">Thoughtful</span> Homes
            </h2>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel(categoryCarouselRef, 'left')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => scrollCarousel(categoryCarouselRef, 'right')}
              className="p-2 bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>

        <div 
          ref={categoryCarouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categoryCards.map((category, index) => (
            <div key={index} className="flex-none w-80">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-amber-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-900/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm text-white/90 mb-1">{category.subtitle}</p>
                  <p className="text-xs text-white/75">{category.description}</p>
                  <ArrowRight className="w-5 h-5 mt-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SustainableSwaps = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm text-amber-700 mb-2">Curated with Love</p>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            <span className="border-b-4 border-amber-500">Easy</span> Sustainable Swaps
          </h2>
          <p className="text-amber-700 max-w-3xl">
            Choose from our handpicked list of every-day essentials that help you get started with a plastic-free and earth-friendly lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Food Wrap",
              subtitle: "Reuse upto 100 times",
              image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
            },
            {
              title: "Bamboo Speakers",
              subtitle: "Electricity-Free Amplifier",
              image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop"
            },
            {
              title: "Shampoo Bar",
              subtitle: "Travel-Friendly",
              image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop"
            },
            {
              title: "Water Saving Devices",
              subtitle: "Saves upto 90% water",
              image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
            },
            {
              title: "Vegetable Bags",
              subtitle: "Reusable, 100% Cotton",
              image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
            }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-900/30 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-white/90">{item.subtitle}</p>
                  <ArrowRight className="w-4 h-4 mt-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

const ValueProposition = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Why Choose <span className="text-orange-700">AveoStore</span>
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            We're committed to creating products that benefit your pets, your family, and our planet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group bg-amber-50 p-8 rounded-3xl border border-amber-100 hover:shadow-lg transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Leaf className="w-10 h-10 text-amber-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">100% Eco-Friendly</h3>
            <p className="text-amber-700 leading-relaxed">
              Every product is crafted from sustainable, renewable materials. We're carbon-neutral 
              certified and committed to protecting our planet for future generations.
            </p>
          </div>

          <div className="text-center group bg-orange-50 p-8 rounded-3xl border border-orange-100 hover:shadow-lg transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-orange-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Premium Quality</h3>
            <p className="text-amber-700 leading-relaxed">
              Rigorously tested products that combine sustainability with exceptional durability. 
              Each item comes with our lifetime eco-guarantee promise.
            </p>
          </div>

          <div className="text-center group bg-yellow-50 p-8 rounded-3xl border border-yellow-100 hover:shadow-lg transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="w-10 h-10 text-yellow-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Global Shipping</h3>
            <p className="text-amber-700 leading-relaxed">
              Free carbon-neutral shipping across UAE. Fast, reliable delivery to India, 
              Southeast Asia, and 50+ countries worldwide with eco-friendly packaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

const StatsSection = () => (
    <section className="py-20 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">50K+</div>
            <div className="text-lg opacity-90">Happy Pet Parents</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">100%</div>
            <div className="text-lg opacity-90">Eco-Certified</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">25+</div>
            <div className="text-lg opacity-90">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">4.9★</div>
            <div className="text-lg opacity-90">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedProducts />
      <PetCareSection />
      <EcoLivingSection />
      <FitnessSection />
      <CategorySection />
      <SustainableSwaps />
      <ValueProposition />
      {/* <StatsSection /> */}
    </div>
  );
};

export default HomePage;