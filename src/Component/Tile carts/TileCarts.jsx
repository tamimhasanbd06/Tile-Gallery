import Image from "next/image";
import React from "react";

const TileCarts = ({ tiles }) => {
  const { image, title, rating, dimensions, price, currency, category } = tiles;

  return (
    <div className="group w-full bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">

      {/* Image Section */}
      <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay badge */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md">
          {category}
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[11px] px-2 py-1 rounded-full font-semibold shadow">
          ⭐ {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <h2 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1">
          {title}
        </h2>

        {/* Dimensions */}
        <p className="text-xs text-gray-500">
          📏 {dimensions}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-bold text-blue-600">
            {currency} {price}
          </p>

          <span className="text-[11px] text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
            In Stock
          </span>
        </div>

        {/* Button */}
        <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-2xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default TileCarts;