import { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { useReveal } from "../hooks/useReveal";
import { useParallax } from "../hooks/useParallax";

function mergeRefs(...refs) {
  return (el) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    });
  };
}

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});
  const [imgRef, imgVisible] = useReveal({ threshold: 0.2 });
  const [formRef] = useReveal({ threshold: 0.1 });
  const parallaxImgRef = useParallax(0.1);
  const combinedImgRef = mergeRefs(imgRef, parallaxImgRef);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceID = "service_kn2ahr4";
    const templateID = "template_brt0a9l";
    const publicKey = "pqX8MsZjzbI83MIiU";

    const templateParams = {
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
      time: new Date().toLocaleString(),
      title: "Nuevo mensaje desde el Portafolio",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "¡Mensaje enviado con éxito!" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setButtonText("Send");
        setStatus({
          success: false,
          message: `Error: ${error.text || "Intenta más tarde."}`,
        });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div
              ref={combinedImgRef}
              className={`reveal scale-up ${imgVisible ? "visible" : ""}`}
            >
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible
                        ? "animate__animated animate__zoomIn floating-img"
                        : "floating-img"
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  ref={formRef}
                >
                  <h2>Contáctame</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          value={formDetails.firstName}
                          placeholder="Nombre"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          value={formDetails.lastName}
                          placeholder="Apellido"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          required
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Telefono"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          required
                          value={formDetails.message}
                          placeholder="Mensaje"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col className="mt-3">
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
