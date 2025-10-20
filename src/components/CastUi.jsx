export default function CastUi({ cast }) {
  const list = Array.isArray(cast) ? cast.slice(0, 12) : [];

  if (list.length === 0) {
    return (
      <div className="mt-12 text-center text-gray-400">
        No cast information available.
      </div>
    );
  }

  return (
    <section className="mt-16 max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold text-[#9BC09C] mb-10 tracking-wide">
        Cast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-black">
        {list.map((actor) => (
          <div
            key={actor.id}
            className="group bg-[#0f1113] rounded-2xl overflow-hidden shadow-md hover:shadow-[#9BC09C]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={actor.name}
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            <div className="p-4">
              <h3
                className="text-sm font-semibold text-white truncate"
                title={actor.name}
              >
                {actor.name}
              </h3>
              <p
                className="text-xs text-gray-400 mt-1 truncate"
                title={actor.character}
              >
                {actor.character || "—"}
              </p>

              <div className="mt-3 flex items-center justify-between text-gray-500">
                <span className="text-xs">Cast</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#9BC09C]/10 text-[#9BC09C] font-semibold">
                  {actor.order+1 ?? "-"}
                </span>
              </div>
            </div>

            
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="mb-4 bg-[#9BC09C] text-black text-xs font-semibold px-3 py-2 rounded-full shadow-md hover:bg-[#bde4be] transition">
                View profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
