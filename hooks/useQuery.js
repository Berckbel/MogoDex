import { useEffect, useRef, useState } from "react"

export const useQuery = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const isFirstQuery = useRef(true)

    useEffect(() => {
        if (isFirstQuery.current) {
            isFirstQuery.current = query === ''
            return
        }

        if(query === '') {
            setError('empty search')
            return
        }
        if(query.match(/^\d+$/)) {
            setError('no numbers');
            return
        }

        if (query.length < 3) {
            setError('too short')
            return
        }

        if(query.length > 13) {
            setError('too large')
            return
        }

        setError(null)

    }, [query])

    return {
        query,
        queryError: error,
        setQuery,
    }

}