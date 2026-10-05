import { Camera, Users, Award, BookOpen } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Camera,
      role: 'Lead',
      organization: 'Chitrachaya | Photography Club',
      period: '2024 - Present',
      description:
        'Lead creative direction for the official photography club, coordinate event coverage, mentor junior members, and curate content for campus publications.',
      highlights: ['Team management', 'Leadership', 'Creative direction'],
    },
    {
      icon: Users,
      role: 'Community Volunteer',
      organization: 'Mind Quest IIIT Kottayam',
      period: '2026 - Present',
      description:
        'Support IIIT Kottayam’s mental health initiative through workshops, mindfulness sessions, and awareness activities that help foster a safer campus environment.',
      highlights: ['Mental health', 'Community support', 'Well-being sessions'],
    },
  ];

  const certifications = [
    {
      title: 'Google Gen-AI Academy',
      issuer: 'Google',
      icon: Award,
    },
    {
      title: 'Advances in Robotics',
      issuer: 'IIIT Kottayam',
      icon: BookOpen,
    },
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud',
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="section section--soft-bg">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Experience</p>
          <h2>
            Leadership & <span className="text-gradient">Involvement</span>
          </h2>
          <p>Ways I&apos;ve grown by contributing to teams and communities.</p>
        </header>

        <div className="experience-grid">
          {experiences.map((exp) => (
            <article key={exp.role + exp.organization} className="glass-panel experience-card">
              <div className="experience-card__header">
                <div className="experience-card__icon" aria-hidden="true">
                  <exp.icon size={24} />
                </div>
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-card__org">{exp.organization}</p>
                  <p className="experience-card__period">{exp.period}</p>
                </div>
              </div>

              <p>{exp.description}</p>

              <div className="chip-list">
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="chip chip--outlined">
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="section-header section-header--tight">
          <h3>
            Certifications & <span className="text-gradient">Courses</span>
          </h3>
          <p>Continuous learning through focused programs.</p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="glass-panel cert-card">
              <div className="cert-card__icon" aria-hidden="true">
                <cert.icon size={20} />
              </div>
              <div>
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
