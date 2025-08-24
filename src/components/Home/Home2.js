import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am deeply passionate about{" "}
              <b className="purple">Artificial Intelligence</b>&nbsp;
              and its application in building intelligent, scalable systems.
              Most of my work revolves around designing solutions that combine{" "}
              <b className="purple">
                OpenAI models, LangChain, and Retrieval-Augmented Generation
                (RAG)&nbsp;
              </b>
              to process unstructured data, enable real-time information
              retrieval, and create smart, adaptive workflows.
              <br />
              <br />
              At <b className="purple">Softevia LLP</b>, I contributed to
              projects such as{" "}
              <b className="purple">
                AI-powered chatbots, automated email parsers, and GoLang-based
                database services
              </b>
              , where I integrated vector embeddings, natural language
              processing, and cloud-based architectures to deliver
              enterprise-grade automation.
              <br />
              <br />
              While AI is my core strength, I also have hands-on experience with{" "}
              <b className="purple">full-stack development</b> using the{" "}
              <b className="purple">MERN stack</b>, and I apply this to create
              user-facing applications that integrate seamlessly with
              intelligent backends.
              <br />
              <br />
              My interests lie in{" "}
              <i>
                <b className="purple">
                  AI-driven applications, LLM-powered products, and real-time
                  automation systems
                </b>
              </i>
              , and I’m constantly exploring ways to push the boundaries of how
              intelligent software can improve workflows and decision-making.
              <br />
              <br />
              In addition, I serve as a{" "}
              <b className="purple">Core Team Member & Mentor</b> at the{" "}
              <b className="purple">Google Developer Student Club (GDSC)</b>,
              where I guide students in learning and applying AI and modern
              technologies.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahul1532"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahul-pandey-41a192219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__.rahulpandey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
