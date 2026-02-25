// components/Layout.jsx
import HomePageNavbar from "./HomePageNavbar";
import InnerPageNavbar from "./InnerPageNavbar";
import Footer from "./Footer";

export default function Layout({ children, isHomePage }) {
  return (
    <div className="bg-dark-bg text-white min-h-screen flex flex-col">
      {isHomePage ? <HomePageNavbar /> : <InnerPageNavbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}