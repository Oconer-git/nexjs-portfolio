import { useCallback } from 'react';

const useBookmark = () => {
    const handleScroll = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return handleScroll;
};

export default useBookmark;
