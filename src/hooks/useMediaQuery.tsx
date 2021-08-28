import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        mediaQuery.addEventListener('change', (e) => setMatches(e.matches));
        return () =>
            mediaQuery.removeEventListener('change', (e) =>
                setMatches(e.matches)
            );
    }, []);
    return matches;
}
