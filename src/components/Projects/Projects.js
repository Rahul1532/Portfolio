import { Col, Container, Row } from "react-bootstrap";
import chatbot from "../../Assets/Projects/chatbot.png";
import parser from "../../Assets/Projects/parser.png";
import spotify from "../../Assets/Projects/spotify.png";
import weather from "../../Assets/Projects/Weather.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import linode from "../../Assets/Projects/linode.jpg";
import dbService from "../../Assets/Projects/databse.png";
import laptop from "../../Assets/Projects/laptop.png";
import Simon from "../../Assets/Projects/Simon.png";
import Wanderlust from "../../Assets/Projects/Wanderlust.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parser}
              isBlog={false}
              title="Automated Email Parser Engine"
              description="Architected and developed an intelligent automated email parsing engine that harnesses the power of OpenAI’s natural language models in combination with vector embeddings to accurately extract, classify, and process information from large volumes of unstructured email data. The system is capable of identifying key entities, relationships, and contextual cues, transforming raw text into structured, machine-readable formats. By integrating this parser into automated workflows, it significantly reduced the need for manual intervention, improved data accuracy, and streamlined downstream processes such as CRM updates, customer support ticketing, and analytics pipelines. This solution not only enhanced operational efficiency but also demonstrated the potential of combining AI-driven NLP with real-time automation for scalable enterprise applications."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AI-Powered Chatbot with RAG"
              description="Engineered and fine-tuned an AI-powered conversational chatbot utilizing LangChain and OpenAI’s GPT-4, designed to provide intelligent, context-aware interactions. Implemented a Retrieval-Augmented Generation (RAG) pipeline that dynamically integrates with real-time databases, enabling the chatbot to fetch, process, and deliver up-to-date information with high accuracy. The system was optimized for scalability and adaptability, supporting complex queries, contextual memory, and domain-specific knowledge retrieval. This solution streamlined user interactions, reduced dependency on manual support, and showcased the practical potential of combining advanced LLMs with retrieval pipelines to deliver reliable, real-time, enterprise-ready AI assistants."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linode}
              isBlog={false}
              title="Cloud Infrastructure on Linode"
              description="Designed, configured, and managed virtual machines on Linode to support deployment of production-grade applications and enterprise workloads. Implemented secure and scalable server environments by optimizing resource allocation, configuring firewalls, and automating deployment pipelines. Monitored system performance with real-time metrics and logging tools to ensure reliability and responsiveness. Proactively troubleshooted and resolved issues such as memory overuse, process crashes, and connection resets, improving system uptime and stability. Applied best practices in cloud infrastructure management to achieve high availability, fault tolerance, and efficient utilization of computing resources, thereby ensuring seamless operation of mission-critical services."
              demoLink="#"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbService}
              isBlog={false}
              title="Database Service in Go"
              description="Designed and developed a high-performance service in GoLang for efficient storage and management of JSON objects in real-time databases. The service was architected with a focus on scalability, low-latency operations, and fault tolerance, ensuring seamless handling of large-scale data ingestion and retrieval. By leveraging Go’s concurrency model and optimized database interactions, the solution significantly improved system throughput, reduced data processing bottlenecks, and enhanced overall accessibility of structured and semi-structured data across applications. This project not only streamlined data integration pipelines but also provided a robust foundation for building scalable, event-driven, and real-time enterprise systems."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="Wanderlust is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js), designed to function as an Airbnb-like platform for travel accommodations and experiences. The platform allows users to explore destinations, search and filter listings, view property details, and book stays with ease. Implemented robust authentication and authorization features to ensure secure user access, along with responsive UI components for a seamless cross-device experience. The backend integrates RESTful APIs with MongoDB for scalable data storage, enabling efficient management of users, bookings, and property listings. This project highlights expertise in building dynamic, real-world applications that combine intuitive design, database efficiency, and scalable architecture to enhance the travel booking experience."
              ghLink="https://github.com/Rahul1532/Wanderlust"
              demoLink="https://wanderlust-mv64.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simon}
              isBlog={false}
              title="Simon Says"
              description="Simpson Says Game is a fun and interactive web-based memory game inspired by the classic Simon Says, but with a creative twist featuring characters from the iconic TV show The Simpsons. Built with modern web technologies, the game challenges players to replicate sequences of actions demonstrated by the system. As players advance, the sequences grow progressively longer and more complex, testing memory, attention, and focus. The application incorporates engaging visuals, smooth animations, and responsive interactions to create an entertaining user experience. This project not only demonstrates strong front-end development skills but also highlights the ability to design gamified applications that combine logic, creativity, and user engagement."
              ghLink="https://github.com/Rahul1532/Simpson-Says-Game-WebApp"
              demoLink="https://rahul1532.github.io/Simpson-Says-Game-WebApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="Laptop Price Predictor"
              description="Laptop Price Predictor is an innovative web-based application designed to estimate laptop prices using advanced machine learning models. Built with R programming for statistical modeling and integrated with HTML, CSS, and JavaScript for the front-end, the platform provides users with accurate and data-driven price predictions. The system analyzes multiple features such as processor type, RAM size, storage capacity, brand, and display specifications to generate realistic pricing insights. By leveraging R’s robust statistical and regression capabilities, the predictor ensures high accuracy and reliability in its estimations. The application also incorporates an intuitive user interface, allowing users to input laptop configurations and instantly receive price predictions. This project demonstrates expertise in combining machine learning, statistical computing, and full-stack web development to deliver a practical and user-centric predictive tool."
              ghLink="https://github.com/Rahul1532/LaptopPricePredictor"
              demoLink="https://laptoppricepredictor1100.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="The Spotify Clone is a web application that replicates the core functionality and design of the popular music streaming platform, Spotify. It allows users to explore a wide range of music, search for their favorite songs or artists, and create personalized playlists. The project includes features like a modern user interface, music playback controls, and seamless navigation between different sections such as Home, Search, and Library. Built with a focus on responsive design, it provides an immersive user experience across devices."
              ghLink="https://github.com/Rahul1532/Spotify-Clone"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mini-Chat"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Stay updated with the latest weather conditions using our intuitive and user-friendly weather website. Get real-time updates on temperature, humidity, wind speed, and precipitation for any location worldwide. Our platform features hourly, daily, and weekly forecasts, along with interactive maps to track weather patterns. Whether you're planning your day or preparing for a trip, our weather website ensures you have accurate and reliable information at your fingertips."
              ghLink="https://github.com/Rahul1532/Weather-App"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
