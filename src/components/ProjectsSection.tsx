import { ExternalLink, Github, Briefcase, FileArchive, Terminal } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Khatu Shyam Trading Co.',
      description:
        'A B2B ecommerce platform for a wholesale distributor in Gwalior. It organizes product lines, presents brand catalogs, and supports direct business contact through WhatsApp.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      icon: Briefcase,
      links: {
        live: 'https://khatu-shyam-trading-co.vercel.app',
        github: '#',
      },
      note: 'The current public deployment only includes a portfolio-facing view.',
    },
    {
      title: 'File Compression Tool',
      description:
        'A command-line utility for lossless text compression and decompression using Huffman coding. Built to improve compression efficiency on text-heavy datasets.',
      tech: ['C++', 'DSA', 'Huffman Coding'],
      icon: FileArchive,
      links: {
        live: null,
        github: null,
      },
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Featured work</p>
          <h2>
            My <span className="text-gradient">Projects</span>
          </h2>
          <p>Selected builds that reflect my technical strengths and interests.</p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="glass-panel project-card">
              <div className="project-card__icon" aria-hidden="true">
                <project.icon size={44} />
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
                  {project.links.github ? (
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

                  {!project.links.github && !project.links.live && (
                    <span className="project-card__link-muted">
                      <Terminal size={16} aria-hidden="true" />
                      Local / CLI only
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <a href="https://github.com/sidd-sharma22" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            <Github size={18} aria-hidden="true" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
