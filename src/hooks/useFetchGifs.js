import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [giphyData, setGiphyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const callGiphyApi = async () => {
        const newGiphyData = await getGifs(category);
        setGiphyData(newGiphyData);
        setIsLoading(false);
    }

    useEffect(() => {
        callGiphyApi();
    }, [])

    return {
        giphyData: giphyData,
        isLoading: isLoading
    }
}