"use client";
import React, { FC, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Switch } from "@nextui-org/switch";

export const ThemeSwitch: FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [resolvedTheme]);

  const onChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={resolvedTheme != "dark"}
      color="secondary"
      size="lg"
      thumbIcon={({ isSelected, className }) =>
        !isSelected ? (
          <FontAwesomeIcon
            className={clsx(className, "text-yellow-500")}
            icon={faSun}
          />
        ) : (
          <FontAwesomeIcon
            className={clsx(className, "text-gray-500")}
            icon={faMoon}
          />
        )
      }
      onChange={onChange}
    />
  );
};
