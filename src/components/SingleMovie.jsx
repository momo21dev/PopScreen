import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import MoviePageUi from "./MoviePageUi";
import CastUi from "./CastUi";
import MoviePhotosUi from "./MoviePhotosUi";
import MoviesRecommend from "./MoviesRecommend";

export default function SingleMovie() {
    const { id } = useParams();
    const { BASE_URL, API_KEY } = useApi();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [moviePhotos, setMoviePhotos] = useState(null)
    const [recommend, setRecommend] = useState([])

    async function fetchMovie() {
        const movieApi = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const movieData = await fetch(movieApi);
        const movieJson = await movieData.json();
        setMovie(movieJson);

        const castApi = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
        const castData = await fetch(castApi);
        const castJson = await castData.json();
        setCast(castJson.cast || []);

        const MoviePhotosApi = `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
        const moviePhotosData = await fetch(MoviePhotosApi)
        const MoviePhotoJson = await moviePhotosData.json()
        setMoviePhotos(MoviePhotoJson)

        const recApi = `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
        const recData = await fetch(recApi)
        const recJson = await recData.json()
        setRecommend(recJson.results || [])
    }

    useEffect(() => {
        fetchMovie();
    }, [id]);

    if (!movie)
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-gray-300 text-lg tracking-wide">
                Loading...
            </div>
        );

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black text-white px-4 sm:px-8 lg:px-16 py-10">
            <div className="max-w-7xl mx-auto space-y-16">
                <MoviePageUi movie={movie} />
                <div className="border-t border-gray-800"></div>

                <MoviePhotosUi moviePhotos={moviePhotos} />
                <CastUi cast={cast} />

                <div className="border-t border-gray-800"></div>
                <MoviesRecommend recommend={recommend} />
            </div>
        </div>
    );

}
