function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's work together!</h3>

          <p>
            I'm always interested in learning, creating and working
            on exciting web development projects.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>stagheja@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Patiala, Punjab</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn primary">
            Send Message 🚀
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;