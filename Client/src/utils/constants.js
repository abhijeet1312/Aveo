export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const SHIPPING_THRESHOLD = 50;
export const TAX_RATE = 0.08;
export const SHIPPING_COST = 9.99;

export const PRODUCT_CATEGORIES = {
  ALL: 'all',
  PETS: 'pets',
  ECO: 'eco',
  FITNESS: 'fitness'
};

export const BADGE_TYPES = {
  ECO_FRIENDLY: 'Eco-Friendly',
  PREMIUM: 'Premium',
  BEST_SELLER: 'Best Seller',
  NEW: 'New'
};

// src/utils/formatters.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

export const calculateDiscount = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

// src/utils/helpers.js
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};