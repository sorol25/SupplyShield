import { createContext, useState, useMemo, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("theme-dark", "theme-light");
    document.documentElement.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={
          theme === "dark"
            ? "min-h-screen bg-transparent text-white transition-colors duration-300"
            : "min-h-screen bg-white/70 text-slate-900 transition-colors duration-300"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
