"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
};

export const ThemeProvider = ({
  children,
  attribute,
  defaultTheme,
}: ThemeProviderProps) => {
  return (
    <NextThemeProvider attribute={attribute} defaultTheme={defaultTheme}>
      {children}
    </NextThemeProvider>
  );
};
