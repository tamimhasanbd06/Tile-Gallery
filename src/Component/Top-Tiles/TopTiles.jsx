import TileCarts from "../Tile carts/TileCarts";

const TopTiles = async () => {
    const res = await fetch('https://tile-gallery-azure.vercel.app/timeData.json', {
        cache: 'no-store',
    });

    const tiles = await res.json();
    const topTiles = tiles.slice(0, 4);

    return (
        <div className="w-full">
            <div>
                <h1 className="text-[30px] my-5 font-bold text-[#155DFC]">
                    Feature Tiles
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topTiles.map((tile) => (
                    <TileCarts
                        key={tile.id}
                        tiles={tile}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopTiles;