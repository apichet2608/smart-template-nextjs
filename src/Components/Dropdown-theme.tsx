"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Dropdown_theme = () => {
  const { theme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setActiveTheme(theme);
  }, [theme]);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const lightThemes = [
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "retro",
    "cyberpunk",
    "valentine",
    "garden",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
    "nord",
    "caramellatte",
    "silk",
  ];

  const darkThemes = [
    "dark",
    "synthwave",
    "halloween",
    "forest",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
    "dim",
    "sunset",
    "abyss",
  ];

  const isCurrentTheme = (t: string) => activeTheme === t;
  const isDarkTheme = (t: string) => darkThemes.includes(t);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {activeTheme ? `Theme: ${activeTheme}` : "Select Theme"} ⬇️
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg"
      >
        <li className="menu-title">Light Themes</li>
        {lightThemes.map((t) => (
          <li key={t}>
            <button
              className={`${
                isCurrentTheme(t) ? "btn btn-primary btn-sm" : "btn-sm"
              }`}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}

        <li className="menu-title pt-2">Dark Themes</li>
        {darkThemes.map((t) => (
          <li key={t}>
            <button
              className={`${
                isCurrentTheme(t) ? "btn btn-primary btn-sm" : "btn-sm"
              }`}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown_theme;
