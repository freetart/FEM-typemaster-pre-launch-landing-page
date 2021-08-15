import Globals from "./abstracts/Globals";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Features from "./components/Features";
import { Copyright } from "./components/styledElements/Paragraphs";
import Tag from "./components/Tag";

const App = () => {
  AOS.init({ offset: 100, duration: 1000, once: true });

  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <Product />
        <Features />
      </main>
      <Copyright>
        <span>Typemaster 2021 </span>| All Rights Reserved
      </Copyright>
      <Tag />
    </>
  );
};

export default App;
