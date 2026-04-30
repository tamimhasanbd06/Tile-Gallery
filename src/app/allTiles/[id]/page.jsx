import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

const TilesDetails = async ({ params }) => {
  const { id } = params;

  // public ফোল্ডার থেকে JSON ডেটা রিড করা
  const filePath = path.join(process.cwd(), "public", "timeData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const tilesData = JSON.parse(jsonData);

  // আইডি অনুযায়ী ডেটা খুঁজে বের করা
  const tile = tilesData.find((t) => t.id === id);

  if (!tile) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
          ← Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 p-6 md:p-10">
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2">{tile.brand}</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{tile.title}</h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {tile.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10 border-y py-8 border-gray-200">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase">Material</p>
                <p className="text-xl font-bold text-gray-800">{tile.material}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase">Dimensions</p>
                <p className="text-xl font-bold text-gray-800">{tile.dimensions}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase">Rating</p>
                <p className="text-xl font-bold text-gray-800">⭐ {tile.rating}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase">Availability</p>
                <p className={`text-xl font-bold ${tile.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {tile.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-4xl font-black text-blue-600">{tile.currency} {tile.price}</p>
              <button className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
                Add to Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;