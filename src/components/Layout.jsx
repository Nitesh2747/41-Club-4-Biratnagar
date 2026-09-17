import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
