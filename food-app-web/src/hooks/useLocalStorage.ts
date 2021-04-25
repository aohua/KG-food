import { useState } from 'react';

export const KEYS = {
    DISHS: "dishs",
    ORDERS: "orders",
    CART: "cart",
    CATEGORIES: "categories"
}

function useLocalStorage<T>(name: string, initValue: T): [T, (value: T) => void] {
    const [state, setState] = useState(initValue);
    const setLocalStorage = (value: T) => {
        setState(value);
        localStorage.setItem(name, JSON.stringify(value));
    }
    const localStorageState = JSON.parse(localStorage.getItem(name) || JSON.stringify(initValue)) || state;
    return [localStorageState, setLocalStorage]
}

export default useLocalStorage;