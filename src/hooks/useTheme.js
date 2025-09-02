import { useEffect, useState, useCallback } from "react";

const THEME_KEY = "theme";
const isValid = (t) => t === "light" || t === "dark";

function getSystemPref() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (isValid(saved)) return saved;
  return getSystemPref();
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (isValid(saved)) return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme(mql.matches ? "dark" : "light");
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, setTheme, toggleTheme };
}
