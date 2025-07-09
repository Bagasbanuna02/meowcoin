import type React from "react";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

// Custom theme for MEOWCOIN
const theme = createTheme({
  primaryColor: "orange",
  colors: {
    // You can customize the color palette here
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MEOWCOIN - The Future of Meme Coins</title>
        <meta
          name="description"
          content="A community-driven meme token that loves cat and pawsitively changes the crypto world forever."
        />
      </head>
      <body cz-shortcut-listen="true">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
