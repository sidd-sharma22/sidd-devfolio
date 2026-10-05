import { useState } from 'react';
import { FileCode, Copy, Check } from 'lucide-react';

const TechStackSection = () => {
  const [copied, setCopied] = useState(false);

  const rawCode = `const engineer = {
  name: "Siddharth Sharma",
  institution: "IIIT Kottayam (2024–2028)",
  focus: "AI/ML Research & Full-Stack Systems",
  publication: "TinyML Anomaly Detection (Accepted, IEEE ICIIS 2026)",
  cgpa: 7.69,
  availableFor: ["Internships", "Research Collaborations"]
};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = rawCode;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techCategories = [
    {
      title: 'Languages',
      items: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'AI/ML & Edge',
      items: ['Machine Learning', 'Neural Networks', 'TensorFlow', 'Keras', 'scikit-learn', 'TinyML', 'Anomaly Detection'],
    },
    {
      title: 'Data Science',
      items: ['NumPy', 'Pandas', 'EDA', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: 'Web & Backend',
      items: ['FastAPI', 'Django', 'REST APIs', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Databases & Tools',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Linux', 'Postman', 'Vercel'],
    },
  ];

  return (
    <section className="section section--soft-bg" aria-labelledby="stack-title">
      <div className="site-container">
        <header className="section-header">
          <p className="section-kicker">Technical Arsenal</p>
          <h2 id="stack-title">
            My <span className="text-gradient">Stack</span>
          </h2>
          <p>Languages, machine learning toolkits, and infrastructure frameworks I regularly build with.</p>
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

        <div className="code-editor" aria-label="Developer snapshot">
          <div className="code-editor__header">
            <div className="code-editor__dots" aria-hidden="true">
              <span className="code-editor__dot code-editor__dot--red" />
              <span className="code-editor__dot code-editor__dot--yellow" />
              <span className="code-editor__dot code-editor__dot--green" />
            </div>
            <div className="code-editor__title">
              <FileCode size={14} className="code-editor__file-icon" />
              <span>engineer.ts</span>
            </div>
            <button
              type="button"
              className="code-editor__copy-btn"
              onClick={handleCopy}
              aria-label="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="code-editor__body">
            <div className="code-editor__lines" aria-hidden="true">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
            <pre className="code-editor__pre">
              <code>
                <div><span className="token-keyword">const</span> <span className="token-variable">engineer</span> = <span className="token-punctuation">&#123;</span></div>
                <div>  <span className="token-property">name</span>: <span className="token-string">&quot;Siddharth Sharma&quot;</span>,</div>
                <div>  <span className="token-property">institution</span>: <span className="token-string">&quot;IIIT Kottayam (2024–2028)&quot;</span>,</div>
                <div>  <span className="token-property">focus</span>: <span className="token-string">&quot;AI/ML Research &amp; Full-Stack Systems&quot;</span>,</div>
                <div>  <span className="token-property">publication</span>: <span className="token-string">&quot;TinyML Anomaly Detection (Accepted, IEEE ICIIS 2026)&quot;</span>,</div>
                <div>  <span className="token-property">cgpa</span>: <span className="token-number">7.69</span>,</div>
                <div>  <span className="token-property">availableFor</span>: <span className="token-punctuation">[</span><span className="token-string">&quot;Internships&quot;</span>, <span className="token-string">&quot;Research Collaborations&quot;</span><span className="token-punctuation">]</span></div>
                <div><span className="token-punctuation">&#125;;</span></div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
