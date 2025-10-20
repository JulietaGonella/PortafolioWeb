function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MySQL', 'Python'];

  return (
    <section id="skills" className="skills">
      <h2>Tecnologías</h2>
      <ul>
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </section>
  );
}
export default Skills;
