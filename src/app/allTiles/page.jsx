import SearchTiles from "./SearchTiles";

const TopTiles = async () => {
  const res = await fetch(
    "https://tile-gallery-azure.vercel.app/timeData.json",
    {
      cache: "no-store",
    }
  );

  const allTiles = await res.json();

  return <SearchTiles allTiles={allTiles} />;
};

export default TopTiles;