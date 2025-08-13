import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/slices/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity({ productId: item.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ productId: item.id }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ productId: item.id }));
  };

  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-green-600 font-medium">${item.price}</p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        
        <button
          onClick={handleIncrement}
          className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
        >
          <Plus className="w-4 h-4 text-green-600" />
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg">${item.totalPrice.toFixed(2)}</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 transition-colors mt-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;