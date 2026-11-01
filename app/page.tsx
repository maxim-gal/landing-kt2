import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
