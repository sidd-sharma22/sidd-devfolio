import { BookOpenText, FlaskConical, Microscope } from 'lucide-react';

const ResearchSection = () => {
  type Publication = {
    title: string;
    venue: string;
    status: string;
    date: string;
    description: string;
    links?: { label: string; href: string }[];
  };

  const researchExperience = {
    role: 'Research Intern',
    organization: 'ABV-IIITM Gwalior',
    engagement: 'Full-Time',
    period: 'May 2026 – Jul 2026',
    summary:
      'Developed a lightweight TinyML intrusion detection pipeline on 2.2M+ network-flow records for resource-constrained IoT environments.',
    contributions: [
      'Performed EDA, preprocessing, feature engineering, Random Forest feature selection, and autoencoder-based anomaly detection.',
      'Designed Dense and Undercomplete Autoencoders using Python, TensorFlow/Keras, scikit-learn, NumPy, and Pandas.',
      'Reduced input features from 63 to 20 while achieving 99.78% accuracy with the Undercomplete Autoencoder and reducing parameters by 35% (956 to 624).',
      'Reduced model size from 43.37 KB to 39.47 KB and inference latency from 0.17 ms to 0.06 ms/sample.',
      'Evaluated models across 845,090 test samples, with Dense Autoencoder results including 99.85% F1-score and 100% recall.',
    ],
    technologies: ['Python', 'TensorFlow/Keras', 'scikit-learn', 'NumPy', 'Pandas', 'TinyML', 'Anomaly Detection'],
  };

  const publications: Publication[] = [
    {
      title: 'TinyML-Based Intrusion Detection: A Comparative Study of Autoencoders for Smart City IoT Devices',
      venue: 'ICIIS 2026',
      status: 'Accepted',
      date: '2026',
      description:
        'Publication based on the TinyML intrusion detection research comparing autoencoder approaches for smart city IoT device security.',
    },
  ];

  return (
    <section id="research" className="section section--soft-bg" aria-labelledby="research-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Research</p>
          <h2 id="research-title">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p>Academic and applied AI/ML research work with measurable outcomes and publication results.</p>
        </header>

        <div className="research-grid">
          <article className="glass-panel research-card">
            <div className="research-card__icon" aria-hidden="true">
              <FlaskConical size={24} />
            </div>
            <h3>{researchExperience.role}</h3>
            <p className="research-card__meta">
              {researchExperience.organization} • {researchExperience.engagement}
            </p>
            <p className="research-card__meta">{researchExperience.period}</p>
            <p>{researchExperience.summary}</p>

            <ul className="research-list">
              {researchExperience.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="chip-list" aria-label="Research technologies">
              {researchExperience.technologies.map((tech) => (
                <span key={tech} className="chip chip--outlined">
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <article className="glass-panel research-card">
            <div className="research-card__icon" aria-hidden="true">
              <Microscope size={24} />
            </div>
            <h3>Publications</h3>
            <div className="publication-grid">
              {publications.map((publication) => (
                <article key={publication.title} className="publication-card">
                  <h4>{publication.title}</h4>
                  <p className="publication-card__meta">
                    <BookOpenText size={15} aria-hidden="true" />
                    {publication.venue}
                  </p>
                  <p className="publication-card__meta">
                    {publication.status} • {publication.date}
                  </p>
                  <p>{publication.description}</p>
                  {publication.links?.length ? (
                    <div className="publication-card__links">
                      {publication.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
