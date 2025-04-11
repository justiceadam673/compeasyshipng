import React from 'react';

const ButtonBorderStroke = ({ children, className }) => {
  return (
    <button
      className={`w-[156px] h-[34px] rounded-[50px] font-bold text-white border-white border-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonBorderStroke;
