import { Code, Camera, Globe, Trophy } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Researcher',
      description: 'Author of an accepted IEEE ICIIS 2026 paper on TinyML autoencoder-based IoT intrusion detection.',
    },
    {
      icon: Camera,
      title: 'Creative Lead',
      description: 'Leads Chitrachaya at IIIT Kottayam; mentored recruits and directed coverage for 10+ major events.',
    },
    {
      icon: Globe,
      title: 'Beyond the Stack',
      description: 'Learning German (CEFR A2 level) alongside emerging edge AI and modern web architectures.',
    },
    {
      icon: Trophy,
      title: 'Academic & Oratory Honours',
      description: 'Top 4% nationally in JEE Main 2024 (96.46%ile), Gold Medalist in MP Tourism Quiz, and 1st place in debate.',
    },
  ];

  const coreSkills = ['Java', 'C/C++', 'Python', 'NumPy/Pandas', 'TensorFlow/Keras', 'TinyML', 'TypeScript', 'React', 'PostgreSQL', 'FastAPI', 'Django'];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Background & Profile</p>
          <h2 id="about-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p>A blend of empirical research, robust software engineering, and creative leadership.</p>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a Computer Science & Engineering student at IIIT Kottayam with hands-on AI/ML research and
              full-stack development experience. What started as curiosity has grown into a focused drive to build
              practical, resource-efficient intelligence for real-world software systems.
            </p>

            <p>
              My research background centers on applied machine learning and edge computing. During my research
              internship at ABV-IIITM Gwalior, I developed lightweight TinyML anomaly detection models for IoT
              devices, leading to an accepted paper at the IEEE ICIIS 2026 conference.
            </p>

            <p>
              Beyond technical engineering, I serve as the Lead of Chitrachaya, IIIT Kottayam&apos;s photography club,
              directing visual media across major institute events, and volunteer with Mind Quest to support student
              well-being.
            </p>

            <div className="chip-list" aria-label="Core technical skills">
              {coreSkills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article key={item.title} className="glass-panel highlight-card">
                <div className="highlight-card__header">
                  <div className="highlight-card__icon" aria-hidden="true">
                    <item.icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
