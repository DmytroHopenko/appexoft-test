import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Appexoft Test",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <StoreProvider>
          <div className="wrapper">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
