import { Outlet } from "react-router-dom";
import Header from "./Header";
import AdBanner from "./AdBanner";
import Footer from "./Footer";
import FeedbackButton from "./FeedbackButton";
import ScrollToTop from "./ScrollToTop";
import LanguageRedirect from "./LanguageRedirect";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1117] via-[#131520] to-[#0f1117] text-white flex flex-col">
      <ScrollToTop />
      <LanguageRedirect />
      <Header />
      <AdBanner position="top" />
      <div className="flex-1">
        <Outlet />
      </div>
      <AdBanner position="bottom" />
      <Footer />
      <FeedbackButton />
    </div>
  );
}

export default Layout;
