import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../../components/common/navbar/NavBar";
import Footer from "../../components/common/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Flyeast",
  description: "Developed by webx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="grain"></div>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
