import { useEffect, useState } from 'react';

const useScroll = (offsetThreshold = 50) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > offsetThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offsetThreshold]);

    return scrolled;
};

export default useScroll;
