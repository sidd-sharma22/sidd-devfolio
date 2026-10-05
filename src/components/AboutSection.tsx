import { Code, Camera, Globe, Trophy } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Engineer and Researcher',
      description: 'Focused on applied machine learning, with one accepted IEEE conference paper.',
    },
    {
      icon: Camera,
      title: 'Creative Lead',
      description: 'Leads Chitrachaya, the photography club at IIIT Kottayam.',
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Learning German while exploring emerging AI and web technologies.',
    },
    {
      icon: Trophy,
      title: 'Strong Communicator',
      description: 'Experience in competitive debating and public speaking.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">About me</p>
          <h2>
            About <span className="text-gradient">Me</span>
          </h2>
          <p>A blend of analytical thinking and creative work.</p>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a Computer Science student at IIIT Kottayam who enjoys building useful products for the web.
              What started as curiosity became a long-term interest in designing reliable, thoughtful software.
            </p>

            <p>
              Outside engineering work, I lead Chitrachaya, our photography club. I coordinate event coverage,
              mentor new members, and help shape visual storytelling on campus.
            </p>

            <p>
              I&apos;m currently focused on machine learning, neural networks, and IoT security, while continuing to
              strengthen my research fundamentals.
            </p>

            <div className="chip-list" aria-label="Core skills">
              {['C/C++', 'Java', 'Python', 'JavaScript', 'React', 'Node.js', 'AI/ML'].map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article key={item.title} className="glass-panel highlight-card">
                <div className="highlight-card__icon" aria-hidden="true">
                  <item.icon size={22} />
                </div>
                <h3>{item.title}</h3>
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
