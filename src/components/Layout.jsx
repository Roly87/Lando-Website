import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}