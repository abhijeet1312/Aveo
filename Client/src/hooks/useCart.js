import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../redux/slices/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const addItemToCart = (product) => {
    dispatch(addToCart({ product }));
  };

  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const incrementItemQuantity = (productId) => {
    dispatch(incrementQuantity({ productId }));
  };

  const decrementItemQuantity = (productId) => {
    dispatch(decrementQuantity({ productId }));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const getCartItemCount = () => {
    return cart.totalQuantity;
  };

  const getCartTotal = () => {
    return cart.finalTotal;
  };

  const isItemInCart = (productId) => {
    return cart.items.some(item => item.id === productId);
  };

  const getItemQuantity = (productId) => {
    const item = cart.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCartItems,
    getCartItemCount,
    getCartTotal,
    isItemInCart,
    getItemQuantity
  };
};