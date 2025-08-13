// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: [],
//   user: null,
//   isAuthenticated: false
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const productId = action.payload;
//       const index = state.favorites.indexOf(productId);
      
//       if (index >= 0) {
//         state.favorites.splice(index, 1);
//         toast.success('Removed from favorites!');
//       } else {
//         state.favorites.push(productId);
//         toast.success('Added to favorites!');
//       }
//     },
    
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
    
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.favorites = [];
//     }
//   }
// });

// export const { toggleFavorite, setUser, logout } = userSlice.actions;
// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  user: null,
  isAuthenticated: true,
  authLoading: false,
  authError: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Authentication actions
    authStart: (state) => {
      state.authLoading = true;
      state.authError = null;
    },

    authSuccess: (state, action) => {
      state.authLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authError = null;
    },

    authFailure: (state, action) => {
      state.authLoading = false;
      state.authError = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },

    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authError = null;
    },

    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.authError = null;
      state.authLoading = false;
      state.favorites = [];
    },

    clearAuthError: (state) => {
      state.authError = null;
    },

    // Favorites actions
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const index = state.favorites.indexOf(productId);
      
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(productId);
      }
    },

    addToFavorites: (state, action) => {
      const productId = action.payload;
      if (!state.favorites.includes(productId)) {
        state.favorites.push(productId);
      }
    },

    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.favorites = state.favorites.filter(id => id !== productId);
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },

    // Sync favorites with user (when user logs in, merge favorites)
    syncFavoritesWithUser: (state, action) => {
      // Merge local favorites with user's saved favorites
      const userFavorites = action.payload || [];
      const mergedFavorites = [...new Set([...state.favorites, ...userFavorites])];
      state.favorites = mergedFavorites;
    },

    // Load user favorites from server
    loadUserFavorites: (state, action) => {
      state.favorites = action.payload || [];
    }
  }
});

export const { 
  authStart,
  authSuccess, 
  authFailure,
  setUser, 
  updateUser,
  logout,
  clearAuthError,
  toggleFavorite,
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  syncFavoritesWithUser,
  loadUserFavorites
} = userSlice.actions;

export default userSlice.reducer;