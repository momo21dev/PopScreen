import { useEffect, useState } from "react";

export default function Category({ setCategory }) {
  const [data, setData] = useState(null);

  async function FetchCategory() {
    const api =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e4df677c740d3bb623f61c30a5ebff09&language=en-US";
    const res = await fetch(api);
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    FetchCategory();
  }, []);

  return (
    <>
     
      <div className="hidden md:grid grid-cols-1 gap-2">
        {data?.genres.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all"
          >
            {c.name}
          </button>
        ))}
      </div>

      
      <div className="md:hidden">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-600 outline-none"
        >
          <option value="">Select Category</option>
          {data?.genres.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
