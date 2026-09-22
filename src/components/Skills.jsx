function Skills() {

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Node.js", level: "65%" },
    { name: "MongoDB", level: "60%" },
    { name: "Git & GitHub", level: "75%" }
  ];

  return (
    <section id="skills" className="section skills">

      <div className="section-title">
        <p>MY EXPERTISE</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;