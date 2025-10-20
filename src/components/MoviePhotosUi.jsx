import { useState } from "react";

export default function MoviePhotosUi({ moviePhotos }) {
  if (!moviePhotos) return null;

  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const { posters, backdrops } = moviePhotos;

  // States for show more/less
  const [showAllPosters, setShowAllPosters] = useState(false);
  const [showAllBackdrops, setShowAllBackdrops] = useState(false);

  return (
    <div className="text-white">
     
      <h2 className="text-3xl font-semibold mb-6">Posters</h2>
      {posters && posters.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {(showAllPosters ? posters : posters.slice(0, 3)).map(
              (poster, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl group shadow-md"
                >
                  <img
                    src={`${baseUrl}${poster.file_path}`}
                    alt={`Poster ${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            )}
          </div>
          {posters.length > 3 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllPosters(!showAllPosters)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium transition-all duration-300"
              >
                {showAllPosters ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-400">No posters available.</p>
      )}

      
      <div className="border-t border-gray-800 my-12"></div>

      
      <h2 className="text-3xl font-semibold mb-6">Backdrops</h2>
      {backdrops && backdrops.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {(showAllBackdrops ? backdrops : backdrops.slice(0, 3)).map(
              (backdrop, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl group shadow-md"
                >
                  <img
                    src={`${baseUrl}${backdrop.file_path}`}
                    alt={`Backdrop ${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            )}
          </div>
          {backdrops.length > 3 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllBackdrops(!showAllBackdrops)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium transition-all duration-300"
              >
                {showAllBackdrops ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-400">No backdrops available.</p>
      )}
    </div>
  );
}
