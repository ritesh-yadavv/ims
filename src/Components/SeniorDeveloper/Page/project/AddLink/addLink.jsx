import React from 'react';

const AddLink = () => {
  const links = [
    { id: 1, name: "Figma", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { id: 2, name: "GitHub", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  ];

  return (
    <>
      <div className="flex gap-32 bg-[#ECECEC] py-5  font-jakarta">
        {links.map((link) => (
          <div key={link.id} className="flex items-center gap-2 font-medium">
            <img src={link.imgSrc} alt={link.name} className="w-8 h-8 rounded-full bg-black p-1" />
            <button className="text-base border  border-[#14509F] text-[#14509F] px-4 py-1 rounded-md flex items-center gap-2 hover:bg-blue-100">
              <span className="text-xl -mt-1">+</span> Add Link
            </button>
          </div>
        ))}
      </div>
    </>

  );
};

export default AddLink;