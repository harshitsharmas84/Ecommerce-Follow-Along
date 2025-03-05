import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-600">${price}</p>
        </div>
      </Link>
      <div className="px-4 pb-4 flex justify-between">
        <Link
          to={`/edit-product/${id}`}
          className="text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="text-red-500 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
