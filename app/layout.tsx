"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <NavigationBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
