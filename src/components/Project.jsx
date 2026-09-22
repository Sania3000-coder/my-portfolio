function Projects() {

  const projects = [
    {
      icon: "✈️",
      title: "Smart Travel Planner",
      description:
        "A creative travel planning website that helps users explore destinations and organize their trips.",
      technologies: "HTML • CSS • JavaScript • React"
    },

    {
      icon: "📰",
      title: "News Headlines",
      description:
        "A responsive news application designed to display the latest news using a clean and user-friendly interface.",
      technologies: "React • JavaScript • API"
    },

    {
      icon: "🌤️",
      title: "Weather Forecast",
      description:
        "A weather application that displays weather information using an API and a responsive interface.",
      technologies: "HTML • CSS • JavaScript • API"
    },

    {
      icon: "🖼️",
      title: "Image Slider",
      description:
        "An interactive image slider with smooth navigation and responsive design.",
      technologies: "HTML • CSS • JavaScript • Bootstrap"
    },

    {
      icon: "🧮",
      title: "JavaScript Calculator",
      description:
        "A simple and responsive calculator application created using JavaScript.",
      technologies: "HTML • CSS • JavaScript"
    },

    {
      icon: "💼",
      title: "Personal Portfolio",
      description:
        "A modern responsive portfolio website showcasing skills, experience and projects.",
      technologies: "React • CSS • JavaScript"
    }
  ];

  return (
    <section id="projects" className="section projects">

      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies}
            </div>

            <a href="#contact" className="project-link">
              View Project →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;