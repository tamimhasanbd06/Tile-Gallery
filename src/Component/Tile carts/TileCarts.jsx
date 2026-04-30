import Image from "next/image";
import Link from "next/link"; // Link ইমপোর্ট করুন

const TileCarts = ({ tiles, index }) => {
  const {
    id, // আইডি ডিস্ট্রাকচার করে নিন
    image,
    title,
    rating,
    dimensions,
    price,
    currency,
    category,
    inStock,
  } = tiles;

  const safeImage =
    typeof image === "string" && image.startsWith("https://")
      ? image
      : "/placeholder.png";

  return (
    <div className="group w-full bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
      
      {/* IMAGE SECTION */}
      <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
        <Image
          src={safeImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3} 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full">
          {category}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold text-gray-800 line-clamp-1">{title}</h2>
          <span className={`text-[11px] px-2 py-1 rounded-full ${inStock ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <p className="text-sm text-gray-500">📏 {dimensions}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">{currency} {price}</p>

        {/* See Details Button with Link */}
        {/* এখানে আইডি অনুযায়ী ডাইনামিক রাউট সেট করা হয়েছে */}
   {/* See Details Button with Link */}
<Link href={`/allTiles/${id}`} className="w-full"> {/* এখানে tiles এর বদলে allTiles দিন */}
  <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    See Details
  </button>
</Link>
      </div>
    </div>
  );
};

export default TileCarts;