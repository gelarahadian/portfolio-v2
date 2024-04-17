"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Efek untuk mengatur kelas pada elemen <html> berdasarkan tema yang tersimpan
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
