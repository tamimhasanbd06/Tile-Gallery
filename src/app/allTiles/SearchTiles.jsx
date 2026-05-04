"use client";
import { FaSearchengin } from "react-icons/fa6";
import { useState, useMemo } from "react";
import TileCarts from "@/Component/Tile carts/TileCarts";

const SearchTiles = ({ allTiles }) => {
  const [search, setSearch] = useState("");
  const [loading] = useState(false);

  const filteredTiles = useMemo(() => {
    return allTiles?.filter((tile) =>
      tile.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allTiles]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700">
          All Tiles
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Discover our most popular and luxury tile collections
        </p>
      </div>

      

      <div className="mb-10 flex justify-center">
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="Search tiles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearchengin />
          </span>
        </div>
      </div>

      {/* LOADER */}
      {loading && (
        <div className="flex justify-center my-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      )}

      
      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6
      ">
        {(filteredTiles?.length ? filteredTiles : allTiles)?.map((tile) => (
          <TileCarts key={tile.id} tiles={tile} />
        ))}
      </div>

    </section>
  );
};

export default SearchTiles;