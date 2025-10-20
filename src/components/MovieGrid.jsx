export default function MovieGrid({ movies }) {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 py-8">
      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-5 
        lg:grid-cols-5 
        xl:grid-cols-5 
        gap-4 
        sm:gap-6 
        md:gap-8
        justify-center
      "
      >
        {movies?.map((m) => (
          <div
            key={m.id}
            className="
              bg-[#1c1c1c]
              rounded-2xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-[#9BC09C]/40 
              hover:-translate-y-1 
              transition-all 
              duration-300 
              flex 
              flex-col
              w-full
              max-w-[200px]
              mx-auto
            "
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              alt={m.title}
              className="w-full aspect-[2/3] object-cover"
              loading="lazy"
            />
            <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
              <h3
                className="text-[#9BC09C] text-sm sm:text-base font-semibold mb-2 line-clamp-2 text-center"
                style={{ fontFamily: "bungee" }}
              >
                {m.original_title}
              </h3>
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>📅 {m.release_date || "Unknown"}</span>
                <span className="text-yellow-400 font-medium">
                  ⭐ {m.vote_average ? m.vote_average.toFixed(1) : "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
