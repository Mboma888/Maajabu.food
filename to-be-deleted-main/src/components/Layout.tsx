import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
