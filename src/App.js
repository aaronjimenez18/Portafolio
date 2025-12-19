import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { NavBar } from "./componentes/NavBar";
import { Banner } from "./componentes/Banner";
import { Skills } from "./componentes/Skills";
import { Projects } from "./componentes/Projects";
import { Contact } from "./componentes/Contact";
import { Footer } from "./componentes/Footer";
import Loader from "./componentes/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // duración del loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
