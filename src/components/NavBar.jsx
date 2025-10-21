import { useState } from "react";

export default function NavBar({
  search,
  onSearch,
  handleShowPopular,
  setPage,
  setCategory,
  setSortBy,
}) {
  function handleSearch(e) {
    const value = e.target.value;
    onSearch(value);
    setCategory("");
    setSortBy("");
    setPage(1);
  }

  function handleMoviesClick() {
    handleShowPopular();
    setPage(1);
    setCategory("");
    setSortBy("");
  }

  return (
    <nav className="flex flex-col sm:flex-row justify-center items-center sm:items-center m-4 sm:m-8 gap-4 sm:gap-8">
      <div className="flex items-center gap-6 text-white">
        <h1
          style={{ fontFamily: "bungee" }}
          className="text-[#DC2525] text-lg sm:text-xl tracking-wide"
        >
          POPSCREEN
        </h1>
        <span className="hidden sm:block font-light text-gray-300">|</span>

        <h1
          onClick={handleMoviesClick}
          className="sm:block font-light text-lg hover:text-purple-400 transition cursor-pointer"
        >
          Movies
        </h1>
      </div>

      <div className="w-full sm:w-auto">
        <input
          onChange={handleSearch}
          type="text"
          value={search}
          placeholder="Search movies..."
          className="w-full sm:w-72 md:w-80 px-5 py-2 rounded-2xl bg-white text-black placeholder-gray-600 outline-none shadow-md focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />
      </div>
    </nav>
  );
}
