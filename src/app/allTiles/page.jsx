import TileCarts from "@/Component/Tile carts/TileCarts";

const TopTiles = async () => {
  const res = await fetch(
    "https://tile-gallery-azure.vercel.app/timeData.json",
    {
      cache: "no-store",
    }
  );

  const allTiles = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700">
           All Tiles
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Discover our most popular and luxury tile collections
        </p>
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allTiles?.map((tile) => (
          <TileCarts
            key={tile.id}
            tiles={tile}
          />
        ))}
      </div>
    </section>
  );
};

export default TopTiles;