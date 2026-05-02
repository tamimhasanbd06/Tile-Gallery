import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

import {
  FaBox,
  FaRuler,
  FaStar,
  FaTag,
  FaCalendar,
  FaBuilding,
  FaFolder,
  FaMoneyBill,
  FaCheckCircle,
  FaTimesCircle,
  FaComment,
} from "react-icons/fa";

const TilesDetails = async ({ params, searchParams }) => {
  const { id } = await params;

  const filePath = path.join(process.cwd(), "public", "timeData.json");

  let tilesData = [];

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    tilesData = JSON.parse(jsonData);
  } catch (error) {
    console.error(error);
  }

  const tile = tilesData.find((t) => t.id === id);

  if (!tile) return notFound();



  const backUrl = searchParams?.from === "home" ? "/" : "/allTiles";

  const {
    id: _id,
    image,
    title,
    brand,
    description,
    material,
    dimensions,
    rating,
    inStock,
    price,
    currency,
    category,
    sku,
    releaseDate,
    reviews,
    ...extraData
  } = tile;

  return (
    <div className="min-h-screen bg-white py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON (DYNAMIC) */}
        <Link
          href={backUrl}
          className="text-blue-600 font-bold mb-6 inline-block hover:underline"
        >
          ← Back
        </Link>

        {/* MAIN CARD */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-gray-50 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 p-4 sm:p-6 md:p-10">

          {/* IMAGE SECTION (FULL RESPONSIVE SAFE) */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-white rounded-2xl overflow-hidden p-4">
            <div className="relative w-full h-62.5 sm:h-87.5 md:h-112.5 lg:h-[550px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">

            <p className="text-blue-600 font-bold uppercase mb-2 flex items-center gap-2 text-sm sm:text-base">
              <FaBuilding /> {brand}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
              {title}
            </h1>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              {description}
            </p>

            {/* MAIN INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-8">

              <div className="flex items-center gap-3">
                <FaBox />
                <div>
                  <p className="text-gray-400 text-sm">Material</p>
                  <p className="font-bold">{material}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaRuler />
                <div>
                  <p className="text-gray-400 text-sm">Dimensions</p>
                  <p className="font-bold">{dimensions}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaStar />
                <div>
                  <p className="text-gray-400 text-sm">Rating</p>
                  <p className="font-bold">{rating}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {inStock ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                <div>
                  <p className="text-gray-400 text-sm">Availability</p>
                  <p className={inStock ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                    {inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>

            </div>

            {/* PRICE */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-2xl sm:text-3xl font-black text-blue-600">
                {currency} {price}
              </p>

              <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-xl w-full sm:w-auto">
                Add to Project
              </button>
            </div>

          </div>
        </div>

        {/* EXTRA DATA */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Additional Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            {sku && (
              <div className="bg-gray-50 p-4 rounded-xl border flex items-center gap-3">
                <FaTag />
                <div>
                  <p className="text-gray-400">SKU</p>
                  <p className="font-bold">{sku}</p>
                </div>
              </div>
            )}

            {category && (
              <div className="bg-gray-50 p-4 rounded-xl border flex items-center gap-3">
                <FaFolder />
                <div>
                  <p className="text-gray-400">Category</p>
                  <p className="font-bold">{category}</p>
                </div>
              </div>
            )}

            {releaseDate && (
              <div className="bg-gray-50 p-4 rounded-xl border flex items-center gap-3">
                <FaCalendar />
                <div>
                  <p className="text-gray-400">Release</p>
                  <p className="font-bold">{releaseDate}</p>
                </div>
              </div>
            )}

            {reviews && (
              <div className="bg-gray-50 p-4 rounded-xl border flex items-center gap-3">
                <FaComment />
                <div>
                  <p className="text-gray-400">Reviews</p>
                  <p className="font-bold">{reviews}</p>
                </div>
              </div>
            )}

            {Object.entries(extraData).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-xl border">
                <p className="text-gray-400 capitalize">{key}</p>
                <p className="font-bold">{String(value)}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default TilesDetails;