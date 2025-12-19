import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div className="proj-btn-container">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn"
              >
                <i className="bi bi-eye"></i> Ver Proyecto
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn"
              >
                <i className="bi bi-github"></i> Código
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
