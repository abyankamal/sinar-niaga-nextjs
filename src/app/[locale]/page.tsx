"use client";

import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Header from "../components/Headers";
import Home from "../components/Home";

export default function Page() {
  return (
    <main className="min-h-screen bg-white max-w-7xl scroll-smooth">
      <Header />
      <Home />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
