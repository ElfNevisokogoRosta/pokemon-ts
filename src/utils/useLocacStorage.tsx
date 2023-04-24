import { useState } from 'react';

type LocalStorageValueType<T> = T | null;

export function useLocalStorage<T>(key: string, defaultValue: T): [LocalStorageValueType<T>, (value: T) => void] {
  const [state, setState] = useState<LocalStorageValueType<T>>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(`Error while getting "${key}" from localStorage: ${error}`);
      return defaultValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error while setting "${key}" to localStorage: ${error}`);
    }
  };

  return [state, setValue];
}
