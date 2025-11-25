import React from 'react';

const Loader = ({ color }) => {
  // console.log(color)
  const borderColor = color ? `border-${color}` : "border-blue-200";
  // console.log(borderColor)

  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-8 h-8 border-4 ${borderColor} border-dotted rounded-full animate-spin`}
      />
    </div>
  );
};

export default Loader;
