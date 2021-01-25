import { useEffect, useState } from 'react';

export const useFetch = (url, method = 'get') => {

    const [response, setResponse] = useState({
        data: null,
        loading: false
    })

    useEffect(function () {
        //catch json
        fetch(url, { method })
            .then(response => response.json())
            .then(json => setResponse({
                data: json,
                loading: false,
            }))


    }, [url, method])

    return response
}

/* http://files.cod3r.com.br/curso-react/estados.json */