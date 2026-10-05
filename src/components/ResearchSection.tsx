import { BookOpen, Cpu, CheckCircle2, TrendingUp, Zap, Layers, Sparkles } from 'lucide-react';

const ResearchSection = () => {
  const publication = {
    title: 'TinyML-Based Intrusion Detection: A Comparative Study of Autoencoders for Smart City IoT Devices',
    status: 'Accepted',
    venue: 'IEEE ICIIS 2026 (20th International Conference on Industrial and Information Systems)',
    authors: 'Siddharth Sharma, Santhos Kumar A, G. Bhanu Chander',
    date: 'Accepted · September 2026',
    abstract:
      'A comparative empirical study investigating lightweight Dense and Undercomplete Autoencoder architectures for anomaly-based intrusion detection on edge devices. Demonstrates that compressed autoencoders can defend resource-constrained smart city infrastructure with sub-millisecond latency and ultra-low memory footprints.',
    tags: [
      'TinyML',
      'Intrusion Detection',
      'Undercomplete Autoencoders',
      'Dense Autoencoders',
      'IoT Security',
      'TensorFlow/Keras',
      'Edge AI',
    ],
  };

  const researchMetrics = [
    {
      value: '2.2M+',
      label: 'Network Flows',
      detail: 'Processed with EDA & Random Forest feature selection',
      icon: Layers,
    },
    {
      value: '99.78%',
      label: 'Detection Accuracy',
      detail: 'Achieved by Undercomplete Autoencoder with 68% fewer features',
      icon: TrendingUp,
    },
    {
      value: '0.06 ms',
      label: 'Inference Latency',
      detail: 'Slashed from 0.17 ms with 39.47 KB model size',
      icon: Zap,
    },
    {
      value: '99.85%',
      label: 'F1-Score / 100% Recall',
      detail: 'Evaluated across 845,090 test samples (Dense Autoencoder)',
      icon: Sparkles,
    },
  ];

  const researchBullets = [
    'Developed a lightweight TinyML intrusion detection pipeline on 2.2M+ network-flow records using EDA, preprocessing, feature engineering, Random Forest feature selection, and autoencoder-based anomaly detection.',
    'Designed Dense and Undercomplete Autoencoders using Python, TensorFlow/Keras, scikit-learn, NumPy, and Pandas for resource-constrained IoT environments.',
    'Reduced input features from 63 to 20 while achieving 99.78% accuracy with the Undercomplete Autoencoder and reducing model parameters by 35% (956 params to 624 params).',
    'Reduced serialized model size from 43.37 KB to 39.47 KB and inference latency from 0.17 ms to 0.06 ms/sample. Evaluated models across 845,090 test samples, with the Dense Autoencoder achieving 99.85% F1-score and 100% recall.',
  ];

  return (
    <section id="research" className="section section--soft-bg" aria-labelledby="research-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Research & Publications</p>
          <h2 id="research-title">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p>
            Applied machine learning research focused on lightweight neural architectures, edge TinyML, and IoT security.
          </p>
        </header>

        {/* Featured Accepted Publication */}
        <article className="glass-panel publication-card">
          <div className="publication-card__badge-row">
            <span className="badge badge--accepted">
              <CheckCircle2 size={15} aria-hidden="true" />
              {publication.status}
            </span>
            <span className="badge badge--venue">
              <BookOpen size={15} aria-hidden="true" />
              IEEE Conference
            </span>
            <span className="publication-card__date">{publication.date}</span>
          </div>

          <h3 className="publication-card__title">{publication.title}</h3>

          <p className="publication-card__venue">{publication.venue}</p>

          <p className="publication-card__authors">
            <strong>Authors:</strong> {publication.authors}
          </p>

          <p className="publication-card__abstract">{publication.abstract}</p>

          <div className="chip-list" aria-label="Research tags">
            {publication.tags.map((tag) => (
              <span key={tag} className="chip chip--outlined">
                {tag}
              </span>
            ))}
          </div>

          <div className="publication-card__footer">
            <span className="publication-card__note">
              Accepted for publication and oral presentation in IEEE ICIIS 2026 proceedings.
            </span>
          </div>
        </article>

        {/* Research Internship & Empirical Metrics */}
        <div className="research-experience-block">
          <article className="glass-panel research-intern-card">
            <div className="research-intern-card__header">
              <div className="research-intern-card__icon" aria-hidden="true">
                <Cpu size={26} />
              </div>
              <div className="research-intern-card__meta">
                <div className="research-intern-card__title-row">
                  <h3>Research Intern</h3>
                  <span className="chip chip--accent">Full-Time</span>
                </div>
                <p className="research-intern-card__org">
                  Atal Bihari Vajpayee Indian Institute of Information Technology & Management (ABV-IIITM) Gwalior
                </p>
                <p className="research-intern-card__period">May 2026 – Jul 2026</p>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="research-metrics-grid" aria-label="Key research outcomes">
              {researchMetrics.map((metric) => (
                <div key={metric.label} className="research-metric-card glass-panel">
                  <div className="research-metric-card__icon" aria-hidden="true">
                    <metric.icon size={18} />
                  </div>
                  <div className="research-metric-card__value">{metric.value}</div>
                  <div className="research-metric-card__label">{metric.label}</div>
                  <div className="research-metric-card__detail">{metric.detail}</div>
                </div>
              ))}
            </div>

            {/* Key Contributions */}
            <div className="research-contributions">
              <h4>Key Contributions & Methodology</h4>
              <ul className="research-bullets">
                {researchBullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
