import { useEffect, useState } from "react";
import { useApi } from "./useApi";

export  function useData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const { BASE_URL, API_KEY } = useApi()
    async function fetchDAta() {
        try {
            const api = url
            const data = await fetch(url)
            const json = await data.json()
            setData(json)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }


    }
    useEffect(() => {
        fetchDAta()
    }, [url])
    return { data, error, loading }
}