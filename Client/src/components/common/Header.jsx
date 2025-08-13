// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchQuery } from '../../redux/slices/productSlice';
// import { ShoppingCart, Search, Menu, X, Heart, Leaf } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { totalQuantity } = useSelector(state => state.cart);
//   const { favorites } = useSelector(state => state.user);
//   const { searchQuery } = useSelector(state => state.products);

//   const handleSearchChange = (e) => {
//     dispatch(setSearchQuery(e.target.value));
//   };

//   const handleCartClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//               <Leaf className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                 AveoStore
//               </h1>
//               <p className="text-xs text-gray-500 -mt-1">Eco Premium</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Home
//             </Link>
//             <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Products
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               About
//             </Link>
//             <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Contact
//             </Link>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             <div className="relative hidden sm:block">
//               <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
//               />
//             </div>
            
//             <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
//               <Heart className="w-6 h-6" />
//               {favorites.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {favorites.length}
//                 </span>
//               )}
//             </button>

//             <button 
//               onClick={handleCartClick}
//               className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
//             >
//               <ShoppingCart className="w-6 h-6" />
//               {totalQuantity > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalQuantity}
//                 </span>
//               )}
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-gray-700"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200">
//             <div className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <nav className="flex flex-col space-y-2">
//                 <Link to="/" className="text-gray-700 hover:text-green-600 py-2">Home</Link>
//                 <Link to="/products" className="text-gray-700 hover:text-green-600 py-2">Products</Link>
//                 <Link to="/about" className="text-gray-700 hover:text-green-600 py-2">About</Link>
//                 <Link to="/contact" className="text-gray-700 hover:text-green-600 py-2">Contact</Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchQuery } from '../../redux/slices/productSlice';
// import { ShoppingCart, Search, Menu, X, Heart, User, Leaf } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { totalQuantity } = useSelector(state => state.cart);
//   const { favorites } = useSelector(state => state.user);
//   const { searchQuery } = useSelector(state => state.products);

//   const handleSearchChange = (e) => {
//     dispatch(setSearchQuery(e.target.value));
//   };

//   const handleCartClick = () => {
//     navigate('/cart');
//   };

//   const navigationItems = [
//     { name: 'Products', href: '/products' },
//     { name: 'Care', href: '/care' },
//     { name: 'Home', href: '/' },
//     { name: 'Contact', href: '/contact' },
    
//   ];

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-emerald-50 border-b border-emerald-100 text-center py-2 text-sm text-emerald-700">
//         <div className="max-w-7xl mx-auto px-4">
//           Free shipping on orders above ₹999 | 24/7 Customer Support
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="bg-[#f9e8dc] text-white sticky top-0 z-50 shadow-xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
            
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
//               <div className="flex items-center space-x-2">
//                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
//                   <Leaf className="w-7 h-7 text-emerald-600" />
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold text-white">
//                     AveoStore
//                   </h1>
//                   <p className="text-xs text-emerald-200 -mt-1 tracking-wide">ECO PREMIUM</p>
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`relative font-semibold text-sm tracking-wide transition-all duration-300 hover:text-emerald-200 px-3 py-2 rounded-lg ${
//                     item.isHighlight 
//                       ? 'bg-orange-500 text-white hover:bg-orange-600 px-4' 
//                       : 'text-white hover:bg-white/10'
//                   } ${item.hasDropdown ? 'flex items-center space-x-1' : ''}`}
//                 >
//                   <span>{item.name}</span>
//                   {item.hasDropdown && (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   )}
//                 </Link>
//               ))}
//             </nav>

//             {/* Right Actions */}
//             <div className="flex items-center space-x-2">
              
//               {/* Search */}
//               <div className="hidden lg:block relative">
//                 {isSearchOpen ? (
//                   <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//                     <Search className="w-4 h-4 text-white mr-3 flex-shrink-0" />
//                     <input
//                       type="text"
//                       placeholder="Search eco products..."
//                       value={searchQuery}
//                       onChange={handleSearchChange}
//                       className="bg-transparent text-white placeholder-white/70 focus:outline-none w-56"
//                       autoFocus
//                       onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
//                     />
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => setIsSearchOpen(true)}
//                     className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
//                   >
//                     <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                   </button>
//                 )}
//               </div>

//               {/* User Account */}
//               <button className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group">
//                 <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
//               </button>

//               {/* Favorites */}
//               <button className="relative p-3 hover:bg-white/10 rounded-full transition-all duration-300 group">
//                 <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 {favorites.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
//                     {favorites.length}
//                   </span>
//                 )}
//               </button>

//               {/* Cart */}
//               <button 
//                 onClick={handleCartClick}
//                 className="relative p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
//               >
//                 <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 {totalQuantity > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </button>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="xl:hidden p-3 hover:bg-white/10 rounded-full transition-all duration-300 ml-2"
//               >
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="xl:hidden py-6 border-t border-white/20 bg-emerald-800">
              
//               {/* Mobile Search */}
//               <div className="mb-6">
//                 <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20">
//                   <Search className="w-5 h-5 text-white mr-3" />
//                   <input
//                     type="text"
//                     placeholder="Search eco products..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="bg-transparent text-white placeholder-white/70 focus:outline-none flex-1"
//                   />
//                 </div>
//               </div>

//               {/* Mobile Navigation */}
//               <nav className="grid grid-cols-2 gap-3">
//                 {navigationItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`py-4 px-4 rounded-xl font-semibold transition-all duration-300 text-center ${
//                       item.isHighlight 
//                         ? 'bg-orange-500 text-white hover:bg-orange-600' 
//                         : 'hover:bg-white/10 text-white border border-white/20'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>

//               {/* Mobile Social Links */}
//               <div className="mt-6 pt-6 border-t border-white/20">
//                 <p className="text-emerald-200 text-sm mb-4 text-center">Follow Us</p>
//                 <div className="flex justify-center space-x-4">
//                   <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                     <span className="text-white text-sm font-bold">f</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                     <span className="text-white text-sm font-bold">t</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                     <span className="text-white text-sm font-bold">📷</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                     <span className="text-white text-sm font-bold">▶</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchQuery } from '../../redux/slices/productSlice';
// import { ShoppingCart, Search, Menu, X, Heart, User, Leaf } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { totalQuantity } = useSelector(state => state.cart);
//   const { favorites } = useSelector(state => state.user);
//   const { searchQuery } = useSelector(state => state.products);

//   const handleSearchChange = (e) => {
//     dispatch(setSearchQuery(e.target.value));
//   };

//   const handleCartClick = () => {
//     navigate('/cart');
//   };

//   const navigationItems = [
//      { name: 'Home', href: '/' },
//     { name: 'Products', href: '/products' },
//     { name: 'About', href: '/about' },
   
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-amber-50 border-b border-amber-100 text-center py-2 text-sm text-amber-800">
//         <div className="max-w-7xl mx-auto px-4">
//           Free shipping on orders above ₹999 | 24/7 Customer Support
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="sticky top-0 z-50 shadow-xl" style={{ backgroundColor: '#f9e8dc' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
            
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
//               <div className="flex items-center space-x-2">
//                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-amber-200">
//                   <Leaf className="w-7 h-7 text-amber-600" />
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold text-amber-900">
//                     AveoStore
//                   </h1>
//                   <p className="text-xs text-amber-700 -mt-1 tracking-wide">ECO PREMIUM</p>
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="relative font-semibold text-sm tracking-wide transition-all duration-300 hover:text-orange-700 px-4 py-2 rounded-lg text-amber-800 hover:bg-amber-100/70"
//                 >
//                   <span>{item.name}</span>
//                 </Link>
//               ))}
//             </nav>

//             {/* Right Actions */}
//             <div className="flex items-center space-x-2">
              
//               {/* Search */}
//               <div className="hidden lg:block relative">
//                 {isSearchOpen ? (
//                   <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200 shadow-md">
//                     <Search className="w-4 h-4 text-amber-700 mr-3 flex-shrink-0" />
//                     <input
//                       type="text"
//                       placeholder="Search eco products..."
//                       value={searchQuery}
//                       onChange={handleSearchChange}
//                       className="bg-transparent text-amber-900 placeholder-amber-600 focus:outline-none w-56"
//                       autoFocus
//                       onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
//                     />
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => setIsSearchOpen(true)}
//                     className="p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
//                   >
//                     <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                   </button>
//                 )}
//               </div>

//               {/* User Account */}
//               <button className="p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800">
//                 <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
//               </button>

//               {/* Favorites */}
//               <button className="relative p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800">
//                 <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 {favorites.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
//                     {favorites.length}
//                   </span>
//                 )}
//               </button>

//               {/* Cart */}
//               <button 
//                 onClick={handleCartClick}
//                 className="relative p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
//               >
//                 <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 {totalQuantity > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </button>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="xl:hidden p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 ml-2 text-amber-800"
//               >
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="xl:hidden py-6 border-t border-amber-200" style={{ backgroundColor: '#f9e8dc' }}>
              
//               {/* Mobile Search */}
//               <div className="mb-6">
//                 <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 border border-amber-200 shadow-md">
//                   <Search className="w-5 h-5 text-amber-700 mr-3" />
//                   <input
//                     type="text"
//                     placeholder="Search eco products..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="bg-transparent text-amber-900 placeholder-amber-600 focus:outline-none flex-1"
//                   />
//                 </div>
//               </div>

//               {/* Mobile Navigation */}
//               <nav className="grid grid-cols-2 gap-3">
//                 {navigationItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="py-4 px-4 rounded-xl font-semibold transition-all duration-300 text-center hover:bg-amber-100/70 text-amber-800 border border-amber-200 bg-white/50"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>

//               {/* Mobile Social Links */}
//               <div className="mt-6 pt-6 border-t border-amber-200">
//                 <p className="text-amber-700 text-sm mb-4 text-center">Follow Us</p>
//                 <div className="flex justify-center space-x-4">
//                   <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
//                     <span className="text-white text-sm font-bold">f</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
//                     <span className="text-white text-sm font-bold">t</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
//                     <span className="text-white text-sm font-bold">📷</span>
//                   </a>
//                   <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
//                     <span className="text-white text-sm font-bold">▶</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/slices/productSlice';
import { logout } from '../../redux/slices/userSlice';
import { ShoppingCart, Search, Menu, X, Heart, User, Leaf, LogOut, Settings, Package } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { totalQuantity } = useSelector(state => state.cart);
  const { favorites, user, isAuthenticated } = useSelector(state => state.user);
  const { searchQuery } = useSelector(state => state.products);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowUserDropdown(false);
    navigate('/');
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-50 border-b border-amber-100 text-center py-2 text-sm text-amber-800">
        <div className="max-w-7xl mx-auto px-4">
          Free shipping on orders above ₹999 | 24/7 Customer Support
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 shadow-xl" style={{ backgroundColor: '#f9e8dc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-amber-200">
                  <Leaf className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-amber-900">
                    AveoEarth
                  </h1>
                  <p className="text-xs text-amber-700 -mt-1 tracking-wide">ECO PREMIUM</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative font-semibold text-sm tracking-wide transition-all duration-300 hover:text-orange-700 px-4 py-2 rounded-lg text-amber-800 hover:bg-amber-100/70"
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              
              {/* Search */}
              {/* <div className="hidden lg:block relative">
                {isSearchOpen ? (
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200 shadow-md">
                    <Search className="w-4 h-4 text-amber-700 mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search eco products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="bg-transparent text-amber-900 placeholder-amber-600 focus:outline-none w-56"
                      autoFocus
                      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
                  >
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                )}
              </div> */}

              {/* User Account */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-2 p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {user?.user_first_name?.charAt(0) || 'U'}
                    </div>
                  </button>

                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-amber-100">
                        <p className="text-sm font-medium text-amber-900">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-amber-700">{user?.email}</p>
                      </div>
                      
                      <div className="">
                        {/* <Link
                          to="/profile"
                          onClick={() => setShowUserDropdown(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
                        >
                          <User className="w-4 h-4" />
                          <span className="text-sm">My Profile</span>
                        </Link> */}
                        
                        <Link
                          to="/orders"
                          onClick={() => setShowUserDropdown(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
                        >
                          <Package className="w-4 h-4" />
                          <span className="text-sm">My Orders</span>
                        </Link>
                        
                        {/* <Link
                          to="/favorites"
                          onClick={() => setShowUserDropdown(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">Favorites ({favorites.length})</span>
                        </Link>
                        
                        <Link
                          to="/settings"
                          onClick={() => setShowUserDropdown(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          <span className="text-sm">Settings</span>
                        </Link> */}
                      </div>
                      
                      <div className="border-t border-amber-100 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}

              {/* Favorites */}
              {/* <button className="relative p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
                    {favorites.length}
                  </span>
                )}
              </button> */}

              {/* Cart */}
              <button 
                onClick={handleCartClick}
                className="relative p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 group text-amber-800"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px] animate-pulse">
                    {totalQuantity}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-3 hover:bg-amber-100/70 rounded-full transition-all duration-300 ml-2 text-amber-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="xl:hidden py-6 border-t border-amber-200" style={{ backgroundColor: '#f9e8dc' }}>
              
              {/* Mobile Search */}
              <div className="mb-6">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 border border-amber-200 shadow-md">
                  <Search className="w-5 h-5 text-amber-700 mr-3" />
                  <input
                    type="text"
                    placeholder="Search eco products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-transparent text-amber-900 placeholder-amber-600 focus:outline-none flex-1"
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-4 px-4 rounded-xl font-semibold transition-all duration-300 text-center hover:bg-amber-100/70 text-amber-800 border border-amber-200 bg-white/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Social Links */}
              {!isAuthenticated && (
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-center block hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-3 px-4 border-2 border-amber-600 text-amber-800 rounded-xl font-semibold text-center block hover:bg-amber-50 transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}

              {isAuthenticated && (
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user?.firstName?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-amber-900">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs text-amber-700">{user?.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {/* <Link
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm">My Profile</span>
                    </Link> */}
                    
                    <Link
                      to="/orders"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2 text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      <Package className="w-4 h-4" />
                      <span className="text-sm">My Orders</span>
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-amber-700 text-sm mb-4 text-center">Follow Us</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-sm font-bold">t</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-sm font-bold">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-sm font-bold">▶</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;