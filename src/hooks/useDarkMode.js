import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body');
    useEffect(() => {
        if (value === false) {
            body.classList.add('dark-mode');
            console.log('xo', body.classList)
        } else {
            body.classList.remove('dark-mode');
            console.log('xx', body.classList)
        }
    }, [value])

    return [value, setValue];
}