import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body');
    useEffect(() => {
        value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [value])

    return [value, setValue];
}