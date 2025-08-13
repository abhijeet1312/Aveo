// import { createSlice } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

// const initialState = {
//   items: [],
//   totalQuantity: 0,
//   totalAmount: 0,
//   shipping: 0,
//   tax: 0,
//   discount: 0,
//   finalTotal: 0
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { product } = action.payload;
//       const existingItem = state.items.find(item => item.id === product.pid);
      
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalPrice = existingItem.quantity * existingItem.price;
//         toast.success(`${product.name} quantity updated!`);
//       } else {
//         state.items.push({
//           ...product,
//           quantity: 1,
//           totalPrice: product.price
//         });
//         toast.success(`${product.name} added to cart!`);
//       }
      
//       cartSlice.caseReducers.calculateTotals(state);
//     },

//     removeFromCart: (state, action) => {
//       const { productId } = action.payload;
//       const item = state.items.find(item => item.id === productId);
      
//       if (item) {
//         state.items = state.items.filter(item => item.id !== productId);
//         toast.success(`${item.name} removed from cart!`);
//         cartSlice.caseReducers.calculateTotals(state);
//       }
//     },

//     incrementQuantity: (state, action) => {
//       const { productId } = action.payload;
//       const item = state.items.find(item => item.id === productId);
      
//       if (item) {
//         item.quantity += 1;
//         item.totalPrice = item.quantity * item.price;
//         cartSlice.caseReducers.calculateTotals(state);
//       }
//     },

//     decrementQuantity: (state, action) => {
//       const { productId } = action.payload;
//       const item = state.items.find(item => item.id === productId);
      
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//         item.totalPrice = item.quantity * item.price;
//         cartSlice.caseReducers.calculateTotals(state);
//       } else if (item && item.quantity === 1) {
//         cartSlice.caseReducers.removeFromCart(state, action);
//       }
//     },

//     updateQuantity: (state, action) => {
//       const { productId, quantity } = action.payload;
//       const item = state.items.find(item => item.id === productId);
      
//       if (item && quantity > 0) {
//         item.quantity = quantity;
//         item.totalPrice = item.quantity * item.price;
//         cartSlice.caseReducers.calculateTotals(state);
//       } else if (item && quantity === 0) {
//         cartSlice.caseReducers.removeFromCart(state, { payload: { productId } });
//       }
//     },

//     clearCart: (state) => {
//       state.items = [];
//       cartSlice.caseReducers.calculateTotals(state);
//       toast.success('Cart cleared!');
//     },

//     applyDiscount: (state, action) => {
//       const { discountPercent } = action.payload;
//       state.discount = (state.totalAmount * discountPercent) / 100;
//       cartSlice.caseReducers.calculateTotals(state);
//     },

//     calculateTotals: (state) => {
//       state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
//       state.totalAmount = state.items.reduce((total, item) => total + Number(item.totalPrice), 0);
      
//       // Calculate shipping (free over $50)
//       state.shipping = state.totalAmount > 50 ? 0 : 9.99;
      
//       // Calculate tax (8%)
//       state.tax = state.totalAmount * 0.08;
      
//       // Calculate final total
//       state.finalTotal = state.totalAmount + state.shipping + state.tax - state.discount;
//     }
//   }
// });

// export const {
//   addToCart,
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
//   updateQuantity,
//   clearCart,
//   applyDiscount,
//   calculateTotals
// } = cartSlice.actions;

// export default cartSlice.reducer


import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  shipping: 0,
  tax: 0,
  discount: 0,
  finalTotal: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const productId = product.id || product.pid;
      const price = Number(product.price);

      const existingItem = state.items.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = Number(existingItem.quantity * existingItem.price);
        toast.success(`${product.name} quantity updated!`);
      } else {
        state.items.push({
          ...product,
          id: productId,
          price,
          quantity: 1,
          totalPrice: price
        });
        toast.success(`${product.name} added to cart!`);
      }

      cartSlice.caseReducers.calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item) {
        state.items = state.items.filter(item => item.id !== productId);
        toast.success(`${item.name} removed from cart!`);
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item) {
        item.quantity += 1;
        item.totalPrice = Number(item.quantity * item.price);
        cartSlice.caseReducers.calculateTotals(state);
      }
    },

    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = Number(item.quantity * item.price);
        cartSlice.caseReducers.calculateTotals(state);
      } else if (item && item.quantity === 1) {
        cartSlice.caseReducers.removeFromCart(state, action);
      }
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item && quantity > 0) {
        item.quantity = quantity;
        item.totalPrice = Number(item.quantity * item.price);
        cartSlice.caseReducers.calculateTotals(state);
      } else if (item && quantity === 0) {
        cartSlice.caseReducers.removeFromCart(state, { payload: { productId } });
      }
    },

    clearCart: (state) => {
      state.items = [];
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Cart cleared!');
    },

    applyDiscount: (state, action) => {
      const { discountPercent } = action.payload;
      state.discount = ((state.totalAmount || 0) * discountPercent) / 100;
      cartSlice.caseReducers.calculateTotals(state);
    },

    calculateTotals: (state) => {
      state.totalQuantity = state.items.reduce(
        (total, item) => total + (item.quantity || 0), 
        0
      );

      state.totalAmount = state.items.reduce(
        (total, item) => total + (Number(item.totalPrice) || 0),
        0
      );

      // Shipping: free over $50
      state.shipping = state.totalAmount > 50 ? 0 : 9.99;

      // Tax: 8%
      state.tax = Number((state.totalAmount * 0.08).toFixed(2)) || 0;

      // Final total
      state.finalTotal = Number(
        (state.totalAmount + state.shipping + state.tax - state.discount).toFixed(2)
      ) || 0;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  clearCart,
  applyDiscount,
  calculateTotals
} = cartSlice.actions;

export default cartSlice.reducer;
