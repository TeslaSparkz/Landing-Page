import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div class="fl">
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Events />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
