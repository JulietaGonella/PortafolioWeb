function Projects() {
  const proyectos = [
    {
      nombre: 'Gestión de Eventos y Conferencias',
      descripcion: 'Sistema para la gestión integral de eventos, conferencias y participantes. Permite registrar, editar y administrar información de manera eficiente.',
      tecnologias: ['Node.js', 'MySQL'],
      github: ['https://github.com/JulietaGonella/auth_service.git'],
      demo: '' // 🔹 vacío = no mostrar botón
    },
    {
      nombre: 'Gestión de Clima',
      descripcion: 'Aplicación web que muestra y administra información meteorológica de Shanghai, Río de Janeiro y Berlín. Incluye integración con APIs, manejo de datos y visualización dinámica.',
      tecnologias: ['Node.js', 'MongoDB', 'HTML', 'JavaScript'],
      github: [
        'https://github.com/JulietaGonella/ms1-client-generator.git',
        'https://github.com/JulietaGonella/ms2-server.git',
        'https://github.com/JulietaGonella/ms3-webhook.git',
        'https://github.com/JulietaGonella/ms4-api.git',
        'https://github.com/JulietaGonella/ms4-api.git'
      ],
      demo: 'https://frontend-clima-d17l.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="grid">
        {proyectos.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><strong>Tecnologías:</strong> {p.tecnologias.join(', ')}</p>
            
            <div className="buttons">
              {/* 🔹 Mostrar botón "Ver demo" solo si existe */}
              {p.demo && p.demo !== '#' && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn">
                  Ver demo
                </a>
              )}

              {/* 🔹 Mostrar todos los repos de GitHub */}
              {p.github.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub {p.github.length > 1 ? idx + 1 : ''}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
