import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#141414]">
      <Navbar />
      <Hero />
      <Milestones />
      <ScrollToTop />
    </main>
  );
}
