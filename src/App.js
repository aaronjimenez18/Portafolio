import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./componentes/NavBar";
import { Banner } from "./componentes/Banner";
import { Skills } from "./componentes/Skills";
import { Projects } from "./componentes/Projects";
import { Contact } from "./componentes/Contact";
import { Footer } from "./componentes/Footer";

function App() {
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
