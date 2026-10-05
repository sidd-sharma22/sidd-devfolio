import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroSection = () => {
  const roles = [
    'AI/ML Engineer',
    'IEEE Paper',
    'Full-Stack Developer',
    'Leader',
  ];

  return (
    <section className="hero-section section" aria-labelledby="hero-title">
      <div className="hero-section__orb hero-section__orb--left" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--right" aria-hidden="true" />

      <div className="site-container">
        <div className="hero-section__grid">
          <div className="hero-section__content">
            <p className="section-kicker">Hello, and welcome</p>

            <h1 id="hero-title">
              I&apos;m <span className="text-gradient">Siddharth Sharma</span>
            </h1>

            <p className="hero-section__intro">
              B.Tech Computer Science student at IIIT Kottayam &amp; AI/ML Researcher.
            </p>

            <div className="hero-section__roles" aria-label="Roles">
              {roles.map((role) => (
                <span key={role} className="chip chip--outlined">
                  {role}
                </span>
              ))}
            </div>

            <p className="hero-section__summary">
              I build practical software at the intersection of applied machine learning, TinyML, and full-stack
              engineering — focusing on efficient architectures and dependable outcomes.
            </p>

            <div className="hero-section__actions">
              <a href="#research" className="button">
                Explore Research
              </a>
              <a href="#projects" className="button button--secondary">
                View Projects
              </a>
              <a href="/Sidd_Resume_AI.pdf" download="Sidd_Resume.pdf" className="button button--secondary">
                <FileText size={17} aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="hero-section__socials" aria-label="Social links">
              {[
                { icon: Github, href: 'https://github.com/sidd-sharma22', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sidd-sharma22', label: 'LinkedIn' },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: 'https://x.com/sidd_sharma19',
                  label: 'X',
                },
                { icon: Mail, href: 'mailto:siddharthsharma2219@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label={label}
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-section__visual">
            <div className="hero-section__image-shell">
              <img src="/profile-pic-1.png" alt="Siddharth Sharma" className="hero-section__image" />
            </div>
            <div className="hero-section__badge glass-panel">
              <span className="hero-section__badge-dot" aria-hidden="true" />
              Available for internships
            </div>
            <div className="hero-section__badge hero-section__badge--alt glass-panel">CGPA: 7.69/10</div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-section__scroll" aria-label="Scroll to About section">
        <ArrowDown size={22} aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
