import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siddharthsharma2219@gmail.com',
      href: 'mailto:siddharthsharma2219@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kottayam, Kerala | Gwalior, MP, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sidd-sharma22',
      username: '@sidd-sharma22',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sidd-sharma22/',
      username: '@sidd-sharma22',
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: 'X (Twitter)',
      href: 'https://x.com/sidd_sharma19',
      username: '@sidd_sharma19',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/sidd_sharma19',
      username: '@sidd_sharma19',
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Get In Touch</p>
          <h2 id="contact-title">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p>I&apos;m open to research internships, software engineering roles, and technical collaborations.</p>
        </header>

        <div className="contact-grid">
          <article className="glass-panel contact-card">
            <h3>Direct Contact</h3>

            {contactInfo.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <item.icon size={20} />
                  </span>
                  <span>
                    <span className="contact-item__label">{item.label}</span>
                    <span className="contact-item__value">{item.value}</span>
                  </span>
                </a>
              ) : (
                <div key={item.label} className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <item.icon size={20} />
                  </span>
                  <span>
                    <span className="contact-item__label">{item.label}</span>
                    <span className="contact-item__value">{item.value}</span>
                  </span>
                </div>
              )
            )}
          </article>

          <article className="glass-panel contact-card">
            <h3>Social Profiles</h3>

            <div className="social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <span className="social-card__icon" aria-hidden="true">
                    <social.icon size={20} />
                  </span>
                  <span>
                    <span className="social-card__label">{social.label}</span>
                    <span className="social-card__value">{social.username}</span>
                  </span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
