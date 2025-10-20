import { Link } from "react-router-dom";

export default function MoviePageUi({ movie }) {
  return (
    <div className="relative text-white">
     
      {movie.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(7,8,9,0.9) 30%, rgba(7,8,9,0.95) 70%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
          }}
        />
      )}

     
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-0 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:items-start">
          
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className="rounded-2xl shadow-2xl w-[200px] md:w-[260px] object-cover"
            />
          </div>

          
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              <span className="text-[#9BC09C] mr-2">{movie.title}</span>
              <span className="text-gray-300 text-base font-medium">
                ({movie.release_date?.slice(0, 4)})
              </span>
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-gray-300">
                ⭐ {movie.vote_average?.toFixed(1)} / 10
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-gray-300">
                ⏱ {movie.runtime} min
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-gray-300">
                🎬 {movie.genres?.map((g) => g.name).slice(0, 3).join(", ")}
              </span>
            </div>

            <p className="text-gray-300 mt-6 text-sm md:text-base leading-relaxed max-w-3xl">
              {movie.overview}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>
                  <span className="text-[#9BC09C] font-semibold">
                    Production:
                  </span>{" "}
                  {movie.production_companies
                    ?.slice(0, 3)
                    .map((c) => c.name)
                    .join(", ") || "—"}
                </p>
                <p className="mt-1">
                  <span className="text-[#9BC09C] font-semibold">
                    Countries:
                  </span>{" "}
                  {movie.production_countries
                    ?.map((c) => c.name)
                    .join(", ") || "—"}
                </p>
              </div>
              <div>
                <p>
                  <span className="text-[#9BC09C] font-semibold">Budget:</span>{" "}
                  {movie.budget && movie.budget > 0
                    ? `$${movie.budget.toLocaleString()}`
                    : "—"}
                </p>
                <p className="mt-1">
                  <span className="text-[#9BC09C] font-semibold">Revenue:</span>{" "}
                  {movie.revenue && movie.revenue > 0
                    ? `$${movie.revenue.toLocaleString()}`
                    : "—"}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {movie.homepage ? (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#9BC09C] text-black px-4 py-2 rounded-full font-semibold shadow hover:brightness-95 transition"
                >
                  Visit Website
                </a>
              ) : (
                <button
                  disabled
                  className="inline-block bg-gray-700 text-gray-400 px-4 py-2 rounded-full font-semibold cursor-not-allowed"
                >
                  No Website
                </button>
              )}

              <Link
                to="/"
                className="inline-block text-gray-300 px-4 py-2 rounded-full border border-white/10 hover:text-[#9BC09C] hover:border-[#9BC09C]/50 transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
