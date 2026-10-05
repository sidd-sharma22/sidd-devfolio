import { Code2, Camera, Users, Award, BookOpen, Sparkles } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      role: 'Full Stack Developer Intern',
      organization: 'Decodelabs',
      period: 'Remote | May 2026 – Jun 2026',
      description:
        'Built StudyHub, a full-stack productivity application featuring study-session tracking and performance analytics. Developed high-throughput REST APIs using FastAPI/Python, integrated PostgreSQL end-to-end, and engineered the responsive frontend using HTML5/CSS3.',
      highlights: ['FastAPI', 'Python', 'PostgreSQL', 'HTML5/CSS3', 'REST APIs'],
    },
    {
      icon: Camera,
      role: 'Lead',
      organization: 'Chitrachaya | Photography Club, IIIT Kottayam',
      period: '2024 – Present',
      description:
        'Lead creative direction for the official photography club. Led 15+ active members across 10+ major institute events, mentored 8 junior recruits, and curated visual storytelling for campus publications.',
      highlights: ['Team Leadership', 'Mentorship', 'Creative Direction', 'Event Media'],
    },
    {
      icon: Users,
      role: 'Community Volunteer',
      organization: 'Mind Quest | IIIT Kottayam',
      period: '2026 – Present',
      description:
        'Support IIIT Kottayam’s student mental health and wellness initiative through peer workshops, mindfulness sessions, and awareness drives fostering an inclusive campus community.',
      highlights: ['Peer Support', 'Community Well-Being', 'Workshop Facilitation'],
    },
  ];

  const certifications = [
    {
      title: 'Google Cloud Gen AI Academy',
      issuer: 'Google Cloud',
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
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="section section--soft-bg" aria-labelledby="experience-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Experience & Leadership</p>
          <h2 id="experience-title">
            Industry & <span className="text-gradient">Leadership</span>
          </h2>
          <p>Practical engineering roles, student leadership, and community impact.</p>
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
            Certifications & <span className="text-gradient">Specializations</span>
          </h3>
          <p>Continuous learning and credentialing in generative AI, cloud, and robotics.</p>
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
