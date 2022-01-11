/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

export const useDebounce = (value, delayTime) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) return;
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
