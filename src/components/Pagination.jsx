export default function Pagination({ data, page, setPage }) {
    if (!data) return null; 

    return (
        <div className="flex justify-center items-center gap-4 mb-6">
            <button
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all disabled:opacity-40"
                onClick={() => setPage(data.page - 1)}
                disabled={data.page === 1}
            >
                Previous
            </button>

            <h1 className="text-white font-semibold">{data.page}</h1>

            <button
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all disabled:opacity-40"
                onClick={() => setPage(data.page + 1)}
                disabled={data.page === 500}
            >
                Next
            </button>
        </div>
    );
}
