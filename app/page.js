import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const activeMenu="true";
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}
