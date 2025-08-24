import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Pandey</span>, a{" "}
            <b className="purple">Computer Science Engineer</b> Passout of{" "}
            <b className="purple">
              Rustamji Institute of Technology, BSF Academy Tekanpur
              (2021–2025).
            </b>
            <br />
            {/* <br />I am currently working as a{" "}
            <b className="purple">AI & Product Engineer</b> at{" "}
            <b className="purple">SoftDevia LLP</b>, where I build AI-powered
            systems, automated workflows, and real-time database services using{" "}
            <b className="purple">GoLang, LangChain, and OpenAI.</b>
            <br /> */}
            <br />
            My technical expertise centers on{" "}
            <b className="purple">
              Artificial Intelligence, Large Language Models (LLMs), LangChain,
              RAG pipelines, and Vector Databases,
            </b>{" "}
            with strong supporting skills in{" "}
            <b className="purple">
              GoLang, MERN stack, Java, C++, SQL, and PostgreSQL.
            </b>{" "}
            I have hands-on experience in building{" "}
            <b className="purple">
              AI-powered solutions, intelligent automation systems, and scalable
              web applications,
            </b>{" "}
            bridging the gap between advanced machine learning and real-world
            product development.
            <br />
            <br />
            Apart from coding, I enjoy{" "}
            <span className="purple">
              exploring new technologies, problem solving, mentoring, traveling,
              and movies.
            </span>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand"{" "}
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
