// components/Layout.tsx
import React, { FC, ReactNode, useState, useEffect } from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import { AvailableTheme } from "@/types";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<AvailableTheme>("light");
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setTheme("dark");
  }, []);
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={theme === "light" ? "#ffffff" : "#0d0d0d"}
        />
      </Head>
      <div
        className={`theme-${theme} flex h-screen text-primary bg-secondary transition-all duration-300`}
      >
        <ThemeSwitch
          onSwitch={() => setTheme(theme === "light" ? "dark" : "light")}
          theme={theme}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
