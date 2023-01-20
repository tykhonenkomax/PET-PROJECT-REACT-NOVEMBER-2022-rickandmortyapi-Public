import React, {useMemo, useState} from 'react';

import axios from 'axios'

export const useGetLocationHook = (url) => {

    const [data, setData] = useState()

    useMemo(async () => {
        const response = await axios(`${url}`)
            .then(res => setData(res.data))
    }, [])

    return data
};

