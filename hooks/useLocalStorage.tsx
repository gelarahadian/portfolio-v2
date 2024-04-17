import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  // Check if localStorage is available in the browser
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const [storedValue, setStoredValue] = useState(() => {
    if (!isLocalStorageAvailable) {
      console.warn(
        "localStorage is not available. Defaulting to initial value."
      );
      return initialValue;
    }

    try {
      // Read value from localStorage using the provided key
      const item = window.localStorage.getItem(key);
      // Parse the result into a JavaScript object
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Update value in localStorage when the state changes
  const setValue = (value: any) => {
    try {
      if (!isLocalStorageAvailable) {
        console.warn("localStorage is not available. Cannot set value.");
        return;
      }

      // Set the value into localStorage
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}
