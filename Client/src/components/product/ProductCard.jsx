// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../../redux/slices/cartSlice';
// import { toggleFavorite } from '../../redux/slices/userSlice';
// import { useCart } from '../../hooks/useCart';
// import { ShoppingCart, Heart, Star, Plus, Minus } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const { favorites } = useSelector(state => state.user);
//   const { addItemToCart, incrementItemQuantity, decrementItemQuantity, getItemQuantity } = useCart();
  
//   const quantity = getItemQuantity(product.id);
//   const isFavorite = favorites.includes(product.id);

//   const handleAddToCart = () => {
//     addItemToCart(product);
//   };

//   const handleToggleFavorite = () => {
//     dispatch(toggleFavorite(product.id));
//   };

//   const handleIncrement = () => {
//     incrementItemQuantity(product.id);
//   };

//   const handleDecrement = () => {
//     decrementItemQuantity(product.id);
//   };

//   return (
//     <Link to={`/product/15`}>
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
//       <div className="relative overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//         />
//         <div className="absolute top-4 left-4">
//           <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
//             product.badge === 'Eco-Friendly' ? 'bg-green-100 text-green-800' :
//             product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
//             product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
//             'bg-blue-100 text-blue-800'
//           }`}>
//             {product.badge}
//           </span>
//         </div>
//         <button
//           onClick={handleToggleFavorite}
//           className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           <Heart
//             className={`w-5 h-5 ${
//               isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
//             }`}
//           />
//         </button>
//       </div>

//       <div className="p-6">
//         <h4 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h4>
//         <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
//         <div className="flex items-center space-x-2 mb-3">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-4 h-4 ${
//                   i < Math.floor(product.rating)
//                     ? 'fill-yellow-400 text-yellow-400'
//                     : 'text-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-500">({product.reviews})</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <span className="text-2xl font-bold text-green-600">${product.price}</span>
//           {product.originalPrice && (
//             <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//           )}
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <span className="text-sm text-gray-600">Stock:</span>
//           <span className={`text-sm font-medium ${
//             product.inStock > 10 ? 'text-green-600' : 
//             product.inStock > 0 ? 'text-yellow-600' : 'text-red-600'
//           }`}>
//             {product.inStock > 0 ? `${product.inStock} available` : 'Out of stock'}
//           </span>
//         </div>

//         {quantity > 0 ? (
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={handleDecrement}
//                 className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
              
//               <span className="w-8 text-center font-semibold">{quantity}</span>
              
//               <button
//                 onClick={handleIncrement}
//                 className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 text-green-600" />
//               </button>
//             </div>
            
//             <span className="text-green-600 font-semibold">In Cart</span>
//           </div>
//         ) : (
//           <button
//             onClick={handleAddToCart}
//             disabled={product.inStock === 0}
//             className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
//               product.inStock > 0
//                 ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
//                 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             }`}
//           >
//             <ShoppingCart className="w-5 h-5" />
//             <span>{product.inStock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
//           </button>
//         )}
//       </div>
//     </div>
//     </Link>
//   );
// };

// export default ProductCard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleFavorite } from '../../redux/slices/userSlice';
import { useCart } from '../../hooks/useCart';
import { ShoppingCart, Heart, Star, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.user);
  const { addItemToCart, incrementItemQuantity, decrementItemQuantity, getItemQuantity } = useCart();
  
  const quantity = getItemQuantity(product.id);
  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking cart button
    e.stopPropagation(); // Stop event bubbling
    addItemToCart(product);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault(); // Prevent navigation when clicking favorite button
    e.stopPropagation(); // Stop event bubbling
    dispatch(toggleFavorite(product.id));
  };

  const handleIncrement = (e) => {
    e.preventDefault(); // Prevent navigation when clicking increment
    e.stopPropagation(); // Stop event bubbling
    incrementItemQuantity(product.id);
  };

  const handleDecrement = (e) => {
    e.preventDefault(); // Prevent navigation when clicking decrement
    e.stopPropagation(); // Stop event bubbling
    decrementItemQuantity(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              product.badge === 'Eco-Friendly' ? 'bg-green-100 text-green-800' :
              product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
              product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {product.badge}
            </span>
          </div>
          
        </div>

        <div className="p-6">
          <h4 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h4>
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          
          {/* <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div> */}

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
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
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <span className="w-8 text-center font-semibold">{quantity}</span>
                
                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors z-10"
                >
                  <Plus className="w-4 h-4 text-green-600" />
                </button>
              </div>
              
              <span className="text-green-600 font-semibold">In Cart</span>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={product.inStock === 0}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 z-10 ${
                product.inStock > 0
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
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

export default ProductCard;