export default function SortBy({ setSortBy, setPage, setCategory, setSearch }) {
  function handleSort(value) {
    setSortBy(value);
    setCategory("");
    setSearch("");
    setPage(1);
  }
  return (
    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mt-4">
      <button
        onClick={() => handleSort("top_rated")}
        className="px-4 py-2 sm:px-6 sm:py-2 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#3b3b3b] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
      >
        TOP RATED
      </button>

      <button
        onClick={() => handleSort("upcoming")}
        className="px-4 py-2 sm:px-6 sm:py-2 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#3b3b3b] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
      >
        UPCOMING
      </button>

      <button
        onClick={() => handleSort("now_playing")}
        className="px-4 py-2 sm:px-6 sm:py-2 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#3b3b3b] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
      >
        NOW PLAYING
      </button>
    </div>
  );
}
