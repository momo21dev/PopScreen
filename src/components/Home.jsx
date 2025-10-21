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
  // useEffect(() => {
  //   setPage(1);
  // }, [search, category, sortBy]);


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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // لو عايزها تطلع بسلاسة، ممكن تشيل السطر ده لو عايزها فورية
    });
  }, [search, category, sortBy, page]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black text-white flex flex-col md:flex-row">


      <div className="md:w-[240px]   p-5 md:p-6">
        <div className="flex justify-between items-center md:block">
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
          className={`${showCategories ? "block" : "hidden"
            } md:block mt-4 px-2 transition-all duration-300`}
        >
          <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 overflow-y-auto md:overflow-visible max-h-[250px] md:max-h-none">
            <Category setCategory={(value) => {
              setCategory(value);
              setSortBy("");
              setSearch("");
              setPage(1);
            }}
            />
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6">
        <NavBar
          search={search}
          handleShowPopular={handleShowPopular}
          onSearch={(value) => {
            setSearch(value);
            setCategory("");
            setSortBy("");
            setPage(1);
          }}
        />

        < div className="w-full flex justify-center mb-6" >
          <SortBy setSortBy={setSortBy}
            setPage={setPage}
            setCategory={setCategory}
            setSearch={setSearch} />
        </div>

        {loading && (
          <p className="text-gray-400 mt-6 animate-pulse">Loading...</p>
        )}
        {error && (
          <p className="text-red-400 mt-6 font-medium">Failed to load data</p>
        )}

        <MovieGrid movies={movies} />
        <Pagination setPage={setPage} data={data} />
      </div>
    </div >
  );
}
