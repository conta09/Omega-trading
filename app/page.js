import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/Faqs";
import AuthOptions from "./components/AuthOptions";
import UserInfo from "./components/UserInfo";
export default function Home() {
  const activeMenu="true";
  return (
    <div>

      <Navbar />
      <HeroSection />
      <About />
      <AuthOptions />
      <UserInfo />
      <FAQ />
    </div>
  );
}
