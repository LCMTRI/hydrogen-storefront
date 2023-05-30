import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({children}: LayoutProps) {
    return (
      <div className="flex flex-col min-h-screen antialiased">
        <Header />
  
        <main
          role="main"
          id="mainContent"
          className="flex-grow mx-auto"
        >
          {children}
        </main>
        <Footer />
      </div>
    );
  }