import React, { useEffect } from 'react';
import debounce from 'lodash.debounce';

const ViewportProvider = ({ children }) => {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        const debouncedSetVh = debounce(setVh, 100);

        setVh();
        window.addEventListener('resize', debouncedSetVh);
        return () => {
            window.removeEventListener('resize', debouncedSetVh);
            debouncedSetVh.cancel();
        };
    }, []);

    return <>{children}</>;
};

export default ViewportProvider;