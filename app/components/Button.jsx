const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`w-[156px] h-[30.5px] rounded-[22.5px] text-white bg-[#1858BE] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
