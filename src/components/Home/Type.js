import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "LLM & RAG Innovator",
          "Architect of Scalable AI Solutions",
          "Full-Stack Developer with AI Focus",
          "AI & Product Engineer at SOFTEVIA LLP",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
