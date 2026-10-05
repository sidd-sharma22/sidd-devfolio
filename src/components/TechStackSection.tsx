const TechStackSection = () => {
  const techCategories = [
    {
      title: 'Languages',
      items: ['C/C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'AI/ML',
      items: ['Machine Learning', 'Neural Network', 'TensorFlow/Keras', 'scikit-learn', 'TinyML'],
    },
    {
      title: 'Data Science',
      items: ['NumPy', 'Pandas', 'EDA', 'Data Preprocessing', 'Feature Engineering'],
    },
    {
      title: 'Web/Backend',
      items: ['Django', 'FastAPI', 'REST APIs', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Databases/Tools',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Linux', 'Postman', 'Vercel'],
    },
  ];

  return (
    <section className="section section--soft-bg">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Tech stack</p>
          <h2>
            My <span className="text-gradient">Stack</span>
          </h2>
          <p>Tools and frameworks I regularly use to ship projects.</p>
        </header>

        <div className="stack-grid">
          {techCategories.map((category) => (
            <article key={category.title} className="glass-panel stack-card">
              <h3>{category.title}</h3>
              <div className="chip-list">
                {category.items.map((item) => (
                  <span key={item} className="chip chip--outlined">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="glass-panel code-panel" aria-label="Developer snapshot">
          <pre>
            <code>{`const developer = {
  name: "Siddharth Sharma",
  cgpa: 7.69,
  title: "AI/ML Engineer",
  availableFor: "Internships"
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
