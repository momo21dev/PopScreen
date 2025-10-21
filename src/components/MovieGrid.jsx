import { Link } from "react-router-dom";

export default function MovieGrid({ movies }) {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 py-10 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black w-full">
      <div
        className="
          grid 
          gap-6 
          sm:gap-8 
          justify-center 
          max-w-7xl 
          w-full
        "
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        }}
      >
        {movies?.map((m) => (
          <Link key={m.id} to={`/movie/${m.id}`}>
            <div
              className="
                bg-[#111111]
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-[#9BC09C]/40
                hover:-translate-y-1.5
                transition-all
                duration-300
                flex
                flex-col
                mx-auto
                border border-gray-800
                w-[210px]
              "
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                className="w-full aspect-[2/3] object-cover hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
