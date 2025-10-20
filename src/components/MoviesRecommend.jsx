import { Link } from "react-router-dom";

export default function MoviesRecommend({ recommend }) {
    if (!recommend || recommend.length === 0) return null;

    const baseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="text-white">
            <h2 className="text-2xl font-semibold mb-6">Recommended Movies</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {recommend.slice(0, 10).map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                        <Link to={`/movie/${movie.id}`}>
                        <img
                            src={
                                movie.poster_path
                                    ? `${baseUrl}${movie.poster_path}`
                                    : "/no-image.jpg"
                            }
                            alt={movie.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-3">
                            <h3 className="text-sm font-semibold truncate">
                                {movie.title || movie.name}
                            </h3>
                            <p className="text-gray-400 text-xs mt-1">
                                ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                            </p>
                        </div>
                    </Link>
                        </div>
                    ))}
        </div>
            
        </div >
    );
}
