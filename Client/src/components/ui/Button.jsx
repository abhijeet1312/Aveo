import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = "", 
  disabled = false,
  loading = false,
  icon,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700';
      case 'secondary':
        return 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-white';
      case 'outline':
        return 'border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white';
      case 'ghost':
        return 'text-gray-600 hover:bg-gray-100 bg-transparent';
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700';
      default:
        return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center space-x-2 font-semibold rounded-xl
        transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${getVariantStyles()} ${getSizeStyles()} ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
      )}
      {icon && !loading && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;