import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [gameMode, setGameMode] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            try {

                setLoading(true)
                const res = await makeRequest.get(url);

                setGameMode(res.data.data)
                setData(res.data.data)
            } catch (error) {
                setError(true);
            }
            setLoading(false)
        };
        fetchData();
    }, [url]);

    return { data, gameMode, loading, error }

}

export default useFetch;