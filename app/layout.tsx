import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roundel Randomiser for Connecting London game",
  description: "Just click the button to generate the two good service tokens needed for each turn!",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
