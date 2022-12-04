import {useEffect, useState} from "react";

export const useGetEpisodeHook = (episodeUrl) => {


    const [episode, setEpisode] = useState();

    useEffect(() => {
        async function getEpisode() {
            const response = await fetch(episodeUrl)
            const result = await response.json()
            return result
        }

        getEpisode().then(result => {
            setEpisode(result)
        })

    }, [])

    return episode
}