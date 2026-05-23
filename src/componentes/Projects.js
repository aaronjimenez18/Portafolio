import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cloudy-img.PNG";
import projImg2 from "../assets/img/djgdl-captura.JPG";
import projImg3 from "../assets/img/zenith-captura.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Cloudy",
      description: "Aplicación del clima con API de OpenWeather",
      imgUrl: projImg1,
      projectUrl: "https://cloudymx.netlify.app",
      githubUrl: "https://github.com/aaronjimenez18/cloudy",
    },
    {
      title: "DJ-GDL",
      description: "Web para venta y cotizacion de servicos de DJ",
      imgUrl: projImg2,
      projectUrl: "https://djgdl.netlify.app",
    },
    {
      title: "Zenith-erp",
      description: "Software as a Service Enterprise Resource Planning",
      imgUrl: projImg3,
      projectUrl: "https://zenitherpp.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Proyectos</h2>
                  <p>
                    Una recopilación de mis trabajos full stack. Como futuro
                    ingeniero, me enfoco en crear soluciones reales, funcionales
                    y escalables.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* CONTENEDOR DE CONTENIDO */}
                    <div className="project-content">
                      <Tab.Content
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row className="justify-content-center">
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
