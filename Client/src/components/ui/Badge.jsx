import React from 'react';

const Badge = ({ type, children, className = "" }) => {
  const getBadgeStyles = (badgeType) => {
    switch (badgeType) {
      case 'eco-friendly':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'premium':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'best-seller':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'new':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sale':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'featured':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border
        ${getBadgeStyles(type)} ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;