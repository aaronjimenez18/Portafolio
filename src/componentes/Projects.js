import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cloudy-img.PNG";
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
                    Una recopilación de mis trabajos más recientes. Como futuro
                    ingeniero, me enfoco en crear soluciones reales, funcionales
                    y escalables.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* TABS */}
                    <Nav
                      variant="pills"
                      className="project-tabs justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Desarrollo Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Diseño UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">En desarrollo</Nav.Link>
                      </Nav.Item>
                    </Nav>

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

                        <Tab.Pane eventKey="second">
                          <p className="text-center empty-tab-text">
                            Próximamente diseños en Figma y Adobe XD.
                          </p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                          <p className="text-center empty-tab-text">
                            Proyectos de ingeniería y análisis de datos.
                          </p>
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
