import { ArrowDown, Github, Linkedin, Mail, X } from 'lucide-react';

const HeroSection = () => {
  const roles = ['AI/ML Engineer', 'Former Research Intern at ABV-IIITM Gwalior', 'Student Leader'];

  return (
    <section className="hero-section section" aria-labelledby="hero-title">
      <div className="hero-section__orb hero-section__orb--left" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--right" aria-hidden="true" />

      <div className="site-container">
        <div className="hero-section__grid">
          <div className="hero-section__content">
            <p className="section-kicker">Hello, and welcome.</p>

            <h1 id="hero-title">
              I&apos;m <span className="text-gradient">Siddharth Sharma</span>
            </h1>

            <p className="hero-section__intro">
              B.Tech Computer Science student at the Indian Institute of Information Technology (IIIT) Kottayam.
            </p>

            <div className="hero-section__roles" aria-label="Roles">
              {roles.map((role) => (
                <span key={role} className="chip chip--outlined">
                  {role}
                </span>
              ))}
            </div>

            <p className="hero-section__summary">
              I build practical software at the intersection of machine learning and web development, with a focus
              on clean experiences and reliable outcomes.
            </p>

            <div className="hero-section__actions">
              <a href="#projects" className="button">
                View Projects
              </a>
              <a href="/Sidd_Resume_AI.pdf" download="Sidd_Resume.pdf" className="button button--secondary">
                Download Resume
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-section__socials" aria-label="Social links">
              {[
                { icon: Github, href: 'https://github.com/sidd-sharma22', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sidd-sharma22', label: 'LinkedIn' },
                { icon: X, href: 'https://x.com/sidd_sharma19', label: 'X' },
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
                  <Icon size={20} aria-hidden="true" />
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
            <div className="hero-section__badge hero-section__badge--alt glass-panel">CGPA: 7.69</div>
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
