import { ExternalLink, Github, Briefcase, FileArchive, Terminal, Laptop } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Khatu Shyam Trading Co.',
      description:
        'A comprehensive B2B ecommerce platform for a wholesale distributor in Gwalior. Features dynamic product search, filtering, trade pricing, catalog browsing, and direct WhatsApp order inquiries.',
      tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
      icon: Briefcase,
      links: {
        live: 'https://khatu-shyam-trading-co.vercel.app',
        github: '#',
      },
      note: 'The public deployment showcases the catalog and client-facing trade portal.',
    },
    {
      title: 'StudyHub',
      description:
        'A full-stack productivity web application featuring study-session tracking and performance analytics. Built with high-throughput REST APIs and end-to-end relational data integration.',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'HTML5/CSS3', 'REST APIs'],
      icon: Laptop,
      links: {
        live: null,
        github: 'https://github.com/sidd-sharma22',
      },
      note: 'Engineered during full-stack developer internship at Decodelabs.',
    },
    {
      title: 'File Compression Tool',
      description:
        'A high-performance command-line utility for lossless text compression and decompression using Huffman coding and greedy algorithms. Achieved up to 40% storage reduction on text datasets without data loss.',
      tech: ['C++', 'DSA', 'Huffman Coding', 'Greedy Algorithms'],
      icon: FileArchive,
      links: {
        live: null,
        github: null,
      },
    },
  ];

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Featured Work</p>
          <h2 id="projects-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p>Production web applications, full-stack systems, and algorithmic software.</p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="glass-panel project-card">
              <div className="project-card__icon" aria-hidden="true">
                <project.icon size={26} />
              </div>

              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.note ? <p className="project-card__note">{project.note}</p> : null}

                <div className="chip-list">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.links.github && project.links.github !== '#' ? (
                    <a href={project.links.github} className="text-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} aria-hidden="true" />
                      Code
                    </a>
                  ) : null}

                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-link">
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : null}

                  {!project.links.live && (!project.links.github || project.links.github === '#') && (
                    <span className="project-card__link-muted">
                      <Terminal size={16} aria-hidden="true" />
                      Local / CLI build
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <a
            href="https://github.com/sidd-sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--secondary"
          >
            <Github size={18} aria-hidden="true" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
