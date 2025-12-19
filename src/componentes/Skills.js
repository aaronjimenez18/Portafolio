import meter1 from "../assets/img/skillsweb.png";
import meter2 from "../assets/img/backendskills.png";
import meter3 from "../assets/img/automatizacionskills.png";
import meter4 from "../assets/img/skillsia.png";
import meter5 from "../assets/img/basesskills.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const techStack = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Bootstrap",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                Como desarrollador Full Stack, diseño y construyo soluciones
                integrales, desde interfaces interactivas hasta arquitecturas de
                datos robustas. Mi enfoque combina la eficiencia del código con
                una experiencia de usuario excepcional.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item-skill">
                  <div className="img-wrapper">
                    <img src={meter1} alt="Web" />
                  </div>
                  <h5>Desarrollo Web</h5>
                  <span className="skill-desc">
                    Interfaces responsivas y dinámicas.
                  </span>
                </div>
                <div className="item-skill">
                  <div className="img-wrapper">
                    <img src={meter2} alt="Backend" />
                  </div>
                  <h5>Backend</h5>
                  <span className="skill-desc">
                    APIs escalables y lógica de servidor eficiente.
                  </span>
                </div>
                <div className="item-skill">
                  <div className="img-wrapper">
                    <img src={meter3} alt="Auto" />
                  </div>
                  <h5>Automatización</h5>
                  <span className="skill-desc">
                    Optimización de flujos y procesos digitales.
                  </span>
                </div>
                <div className="item-skill">
                  <div className="img-wrapper">
                    <img src={meter4} alt="IA" />
                  </div>
                  <h5>Inteligencia Artificial</h5>
                  <span className="skill-desc">
                    Integración de modelos y soluciones inteligentes.
                  </span>
                </div>
                <div className="item-skill">
                  <div className="img-wrapper">
                    <img src={meter5} alt="DB" />
                  </div>
                  <h5>Base de Datos</h5>
                  <span className="skill-desc">
                    Gestión y modelado de datos seguro.
                  </span>
                </div>
              </Carousel>

              <div className="tech-stack-container">
                <h3>Ecosistema Tecnológico</h3>
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <div className="tech-card" key={index}>
                      <img src={tech.img} alt={tech.name} />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="decor" />
    </section>
  );
};
