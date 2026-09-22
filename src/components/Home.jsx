function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Sania Tagheja</span>
        </h1>

        <h2>Frontend & Full Stack Developer</h2>

        <p className="home-text">
          I create modern, responsive and user-friendly web applications
          with clean design and powerful functionality.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        </div>
      </div>

      <div className="home-image">
        <div className="image-circle">
            <img src="src/image/IMG-20260718-WA0160.jpg" alt="Sania Tagheja" />
        </div>
      </div>

    </section>
  );
}

export default Home;