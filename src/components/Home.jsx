import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useData } from "../hooks/useData";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import Pagination from "./Pagination";
import Category from "./Category";
import SortBy from "./SortBy";

export default function Home() {
  const { BASE_URL, API_KEY } = useApi();
  const [movies, setMovies] = useState(null);
  const [url, setUrl] = useState(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const { data, error, loading } = useData(url);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  function handleShowPopular() {
    setCategory("");
    setSearch("");
    setSortBy("");
    setPage(1);
  }

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  useEffect(() => {
    let newUrl = "";

    if (search.trim() !== "") {
      setSortBy("");
      newUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
    } else if (category !== "") {
      setSortBy("");
      newUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}&page=${page}`;
    } else if (sortBy !== "") {
      newUrl = `${BASE_URL}/movie/${sortBy}?api_key=${API_KEY}&page=${page}`;
    } else {
      newUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    }

    setUrl(newUrl);
  }, [search, page, category, sortBy]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen  text-white">
     
      <div className="md:w-[220px] ">
        <div className="flex justify-between items-center md:block p-4">
          <h2
            className="text-[#9BC09C] text-xl font-bold md:mb-6 text-center"
            style={{ fontFamily: "bungee" }}
          >
            Categories
          </h2>

          
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="md:hidden bg-[#9BC09C] text-black px-3 py-1 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          >
            {showCategories ? "Hide" : "Show"}
          </button>
        </div>

       
        <div
          className={`${
            showCategories ? "block" : "hidden"
          } md:block px-4 pb-3 md:pb-0 transition-all duration-300`}
        >
          <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 overflow-y-auto md:overflow-visible max-h-[250px] md:max-h-none">
            <Category setCategory={setCategory} />
          </div>
        </div>
      </div>

      
      <div className="flex-1 flex flex-col items-center px-3 sm:px-6 py-4">
        <NavBar
          search={search}
          handleShowPopular={handleShowPopular}
          onSearch={(value) => setSearch(value)}
        />

        <div className="w-full flex justify-center mb-4">
          <SortBy setSortBy={setSortBy} />
        </div>

        {loading && <p className="text-gray-400 mt-6">Loading...</p>}
        {error && <p className="text-red-400 mt-6">Failed to load data</p>}

        <MovieGrid movies={movies} />
        <Pagination setPage={setPage} data={data} />
      </div>
    </div>
  );
}
