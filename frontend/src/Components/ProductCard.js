import React from "react";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
