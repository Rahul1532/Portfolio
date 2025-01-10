import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import weather from "../../Assets/Projects/Weather.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import Wanderlust from "../../Assets/Projects/Wanderlust.png";
import laptop from "../../Assets/Projects/laptop.png";
import Simon from "../../Assets/Projects/Simon.png";

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
              imgPath={Wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="Wanderlust is a project designed to function as an Airbnb-like platform using the MERN stack (MongoDB, Express.js, React, and Node.js). It is a web application aimed at facilitating travel accommodations and experiences for users."
              ghLink="https://github.com/Rahul1532/Wanderlust"
              demoLink="https://wanderlust-mv64.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simon}
              isBlog={false}
              title="Simon Says"
              description="Simon Says Game is game is a fun and interactive memory game inspired by the classic Simon Says game, but with a twist. It features characters from the beloved TV show, The Simpsons. The goal of the game is to mimic a sequence of actions demonstrated by the game. As the player progresses, the sequences become longer and more challenging, testing the player's memory and focus."
              ghLink="https://github.com/Rahul1532/Simpson-Says-Game-WebApp"
              demoLink="https://rahul1532.github.io/Simpson-Says-Game-WebApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="Laptop Price Predictor"
              description="Introducing our innovative Laptop Price Predictor, a dynamic web application powered by R programming, HTML, CSS, and JavaScript. This predictive tool utilizes advanced machine learning algorithms to analyze various features of laptops, providing users with accurate price estimations. The seamless integration of R programming ensures robust statistical modeling for precise predictions."
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
