import React, { useEffect, useRef, useState } from 'react';
import DocumentModal from './DocumentModal';
import NetworkField from './NetworkField';
import { portfolioData } from '../data/portfolioData';

const themeOptions = [
  { id: 'signal', name: 'SOC Signal', detail: 'Dashboard sombre' },
  { id: 'editorial', name: 'Éditorial', detail: 'Clair & aéré' },
  { id: 'terminal', name: 'Terminal', detail: 'Console technique' },
];

const navigation = [
  { label: 'Profil', href: '#profil' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Laboratoire', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
];

const demoCommands = ['help', 'whoami', 'projects', 'contact'];

function SectionHeading({ index, eyebrow, title, detail, id }) {
  return (
    <div className="section-heading reveal" id={id}>
      <div>
        <p className="section-index">{index} / {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  );
}

function TerminalDemo() {
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState([
    { kind: 'system', value: 'Session de démonstration initialisée. Aucun accès au shell.' },
    { kind: 'system', value: "Tapez 'help' pour afficher les commandes disponibles." },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const outputRef = useRef(null);
  const { personal, projects, skills } = portfolioData;

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [entries]);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    const next = [...entries, { kind: 'command', value: `gille@portfolio:~$ ${rawCommand}` }];
    setHistory((previous) => [...previous, rawCommand]);
    setHistoryIndex(history.length + 1);

    if (command === 'clear') {
      setEntries([]);
      setInput('');
      return;
    }

    const results = {
      help: 'Commandes disponibles : help · whoami · skills · projects · contact · clear',
      whoami: `${personal.fullName}\nÉtudiant inscrit en troisième année de Licence de Sécurité Informatique · IFRI / UAC · Bénin`,
      skills: skills.cybersecurity.slice(0, 4).map((skill) => `- ${skill.name}`).join('\n'),
      projects: projects.slice(0, 4).map((project) => `- ${project.title}`).join('\n'),
      contact: `${personal.email}\n${personal.phone}\n${personal.location}`,
      sudo: 'Accès refusé. Cette console est une simulation de présentation.',
      'sudo su': 'Accès refusé. Cette console est une simulation de présentation.',
    };
    next.push({
      kind: results[command] ? 'result' : 'error',
      value: results[command] || `Commande inconnue : ${command}. Tapez help pour voir les commandes disponibles.`,
    });
    setEntries(next);
    setInput('');
  };

  const submit = (event) => {
    event.preventDefault();
    runCommand(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const previousIndex = Math.max(0, historyIndex - 1);
      setHistoryIndex(previousIndex);
      setInput(history[previousIndex] || '');
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = Math.min(history.length, historyIndex + 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex] || '');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const matches = ['help', 'whoami', 'skills', 'projects', 'contact', 'clear'].filter((command) => command.startsWith(input.toLowerCase()));
      if (matches.length === 1) setInput(matches[0]);
    }
  };

  return (
    <section className="section terminal-section" id="terminal">
      <div className="site-width">
        <SectionHeading
          index="00"
          eyebrow="TERMINAL / MODE DÉMO"
          title={<>Explore le portfolio<br />en ligne de commande.</>}
          detail="Une console de présentation interactive. Les commandes sont prédéfinies : aucun shell système ni exécution de code."
        />

        <div className="terminal-window reveal">
          <div className="terminal-topbar">
            <span>gille@portfolio — console de présentation</span>
            <span className="terminal-state"><i /> SIMULATION</span>
          </div>
          <div className="terminal-output" ref={outputRef} role="log" aria-live="polite">
            {entries.map((entry, index) => (
              <p className={`terminal-line terminal-${entry.kind}`} key={`${entry.kind}-${index}`}>{entry.value}</p>
            ))}
          </div>
          <div className="terminal-tools" aria-label="Commandes rapides">
            {demoCommands.map((command) => (
              <button type="button" key={command} onClick={() => runCommand(command)}>{command}</button>
            ))}
          </div>
          <form className="terminal-form" onSubmit={submit}>
            <label htmlFor="demo-command">gille@portfolio:~$</label>
            <input
              id="demo-command"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="help"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit">Exécuter <span aria-hidden="true">↵</span></button>
          </form>
          <p className="terminal-disclaimer">Commandes autorisées uniquement · aucune connexion à un vrai terminal.</p>
        </div>
      </div>
    </section>
  );
}

function ThemeSelector({ theme, onChange }) {
  return (
    <section className="theme-section" aria-labelledby="theme-title">
      <div className="site-width theme-layout">
        <div>
          <p className="section-index">CHOISIR UNE AMBIANCE</p>
          <h2 id="theme-title">Trois aperçus, le même parcours.</h2>
        </div>
        <div className="theme-options" role="group" aria-label="Aperçu du thème">
          {themeOptions.map((option) => (
            <button
              className={`theme-option theme-swatch-${option.id}${theme === option.id ? ' is-selected' : ''}`}
              type="button"
              key={option.id}
              onClick={() => onChange(option.id)}
              aria-pressed={theme === option.id}
            >
              <span className="swatch" aria-hidden="true" />
              <span className="theme-label"><strong>{option.name}</strong><small>{option.detail}</small></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  const { personal } = portfolioData;
  const facts = [
    { label: 'FOCUS', value: 'Détection & analyse' },
    { label: 'ENVIRONNEMENT', value: 'Linux · Réseaux · GNS3' },
    { label: 'LANGUES', value: 'Français · Anglais intermédiaire' },
    { label: 'OPPORTUNITÉS', value: 'Stage · projet · emploi' },
  ];

  return (
    <section className="section" id="profil">
      <div className="site-width">
        <SectionHeading
          index="01"
          eyebrow="PROFIL"
          title={<>Une base solide.<br />L’envie d’aller plus loin.</>}
          detail="Curieux des mécanismes qui protègent les systèmes — et de ceux qui les mettent à l’épreuve."
        />
        <div className="profile-layout">
          <article className="profile-quote reveal">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>Étudiant en sécurité informatique à l’IFRI (UAC), certifié SecNumacadémie, je construis une première expérience pratique en cryptographie, analyse réseau, VPN et services DNS. Je souhaite développer mon expertise terrain au contact d’une équipe sécurité.</p>
            <strong>{personal.fullName}</strong>
          </article>
          <div className="profile-facts">
            {facts.map((fact, index) => (
              <article className="fact-row reveal" key={fact.label} style={{ '--reveal-delay': `${index * 70}ms` }}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
                <small>0{index + 1}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const { skills } = portfolioData;
  const categories = [
    { title: 'Sécurité & cryptographie', description: 'Protéger les données, vérifier leur origine et comprendre les bases de la confiance numérique.', list: skills.cybersecurity.slice(0, 5).map((skill) => skill.name), mark: '01' },
    { title: 'Réseaux & protocoles', description: 'Observer les échanges, comprendre les flux et configurer des services réseau.', list: skills.networks.map((skill) => skill.name), mark: '02' },
    { title: 'Systèmes & outils', description: 'Premiers repères en administration système, ligne de commande et environnements virtualisés.', list: skills.devops.slice(0, 4).map((skill) => skill.name), mark: '03' },
  ];

  return (
    <section className="section section-quiet" id="expertise">
      <div className="site-width">
        <SectionHeading
          index="02"
          eyebrow="COMPÉTENCES"
          title={<>Des fondamentaux<br />à mettre en pratique.</>}
          detail="Des outils et concepts rencontrés en cours et en travaux pratiques."
        />
        <div className="expertise-grid">
          {categories.map((category) => (
            <article className="expertise-card reveal" key={category.title}>
              <div className="card-number">{category.mark}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="skill-tags">
                {category.list.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabSection({ onOpenDoc }) {
  const { documents, projects } = portfolioData;
  const labs = documents.filter((document) => document.id.startsWith('tp-'));
  const featuredProject = projects.find((project) => project.id === 'mediproof');

  return (
    <section className="section" id="projets">
      <div className="site-width">
        <SectionHeading
          index="03"
          eyebrow="LABORATOIRE"
          title={<>Apprendre en<br />manipulant.</>}
          detail="TRAVAUX PRATIQUES ACADÉMIQUES"
        />
        <div className="lab-list">
          {labs.map((lab, index) => (
            <article className="lab-row reveal" key={lab.id} style={{ '--reveal-delay': `${index * 70}ms` }}>
              <span className="lab-number">0{index + 1}</span>
              <div className="lab-copy">
                <div className="lab-label"><span>{lab.badge}</span><span>{lab.type.toUpperCase()}</span></div>
                <h3>{lab.title.replace('Rapport Technique — ', '').replace("Rapport d'Analyse des Risques — ", '')}</h3>
                <p>{lab.description}</p>
                <small>{lab.subtitle}</small>
              </div>
              <button type="button" className="text-link" onClick={() => onOpenDoc(lab)} aria-label={`Consulter ${lab.title}`}>
                Consulter <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
        {featuredProject && (
          <article className="featured-project reveal">
            <div>
              <p className="section-index">PROJET SÉLECTIONNÉ · {featuredProject.context}</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.summary}</p>
            </div>
            <a className="text-link" href={featuredProject.presentationFile} download>Télécharger la présentation <span aria-hidden="true">↗</span></a>
          </article>
        )}
      </div>
    </section>
  );
}

function JourneySection() {
  const { timeline, certifications } = portfolioData;
  const journey = timeline.filter((item) => item.type === 'education' || item.type === 'experience');

  return (
    <section className="section section-quiet" id="parcours">
      <div className="site-width">
        <SectionHeading
          index="04"
          eyebrow="PARCOURS"
          title={<>Apprendre,<br />consolider.</>}
          detail="Formation à l’IFRI, complétée par des apprentissages guidés en cybersécurité."
        />
        <div className="journey-grid">
          <div className="journey-column reveal">
            <p className="section-index">FORMATION ACADÉMIQUE</p>
            {journey.filter((item) => item.type === 'education').map((item) => (
              <article className="journey-item" key={`${item.period}-${item.title}`}>
                <span>{item.organization.split('—')[0].trim()}</span>
                <h3>{item.title}</h3>
                <p>{item.period} · {item.organization}</p>
              </article>
            ))}
          </div>
          <div className="journey-column reveal">
            <p className="section-index">EXPÉRIENCE & CERTIFICATIONS</p>
            {journey.filter((item) => item.type === 'experience').map((item) => (
              <article className="journey-item" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
              </article>
            ))}
            <div className="cert-list">
              <p className="section-index">CERTIFICATIONS & FORMATIONS</p>
              {certifications.map((certification) => (
                <article className="cert-row" key={certification.id}>
                  <div><strong>{certification.title}</strong><span>{certification.issuer}</span></div>
                  <small>{certification.grade}</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { personal } = portfolioData;
  const contacts = [
    { label: 'EMAIL', value: personal.email, href: `mailto:${personal.email}` },
    { label: 'GITHUB', value: `github.com/${personal.githubUsername}`, href: personal.github },
    { label: 'TÉLÉPHONE · BÉNIN', value: personal.phone, href: `tel:${personal.phoneRaw}` },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="site-width">
        <SectionHeading
          index="05"
          eyebrow="CONTACT"
          title={<>Ouvert aux opportunités,<br />prêt à contribuer.</>}
          detail="Disponible pour un stage, un projet ou un emploi en sécurité informatique et développement."
        />
        <div className="contact-grid reveal">
          {contacts.map((contact) => (
            <a className="contact-item" key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
              <small aria-hidden="true">↗</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ReferencePortfolio() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'signal');
  const [activeDocument, setActiveDocument] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;
  const cvUrl = './CV_GANSE_Kpehoue_Gille-Christ.pdf';
  const themeRoot = useRef(null);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealNodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = `${personal.fullName} — Portfolio cybersécurité`;
  }, [personal.fullName]);

  return (
    <div className="reference-site" data-theme={theme} ref={themeRoot}>
      <NetworkField />
      <a className="skip-link" href="#contenu">Aller au contenu</a>

      <header className="site-header">
        <div className="site-width header-layout">
          <a className="brand" href="#accueil" aria-label="Retour à l’accueil">
            <img src={personal.photos.primary} alt="" />
            <span><strong>GC.</strong><small>CYBERSECURITY PORTFOLIO</small></span>
          </a>
          <button className="mobile-menu-toggle" type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-controls="main-navigation">
            {mobileMenuOpen ? 'Fermer' : 'Menu'}
          </button>
          <nav className={mobileMenuOpen ? 'main-navigation is-open' : 'main-navigation'} id="main-navigation" aria-label="Navigation principale">
            {navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>)}
          </nav>
          <a className="header-contact" href="#contact">Me contacter <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="site-width hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow"><i /> SÉCURITÉ INFORMATIQUE <span>/</span> BÉNIN</p>
              <h1>Lire le signal.<br /><em>Protéger le système.</em></h1>
              <p className="hero-intro">Je suis <strong>{personal.fullName}</strong>, étudiant en troisième année de licence de sécurité informatique à l’IFRI / UAC et aspirant <em>SOC analyst.</em></p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projets">Explorer mes travaux <span aria-hidden="true">↓</span></a>
                <a className="button" href={cvUrl} download>Télécharger mon CV <span aria-hidden="true">↗</span></a>
                <a className="button" href="#terminal">Essayer le terminal <span aria-hidden="true">⌘</span></a>
              </div>
              <div className="hero-meta">
                <span><i /> Ouvert aux stages, projets et emplois</span>
                <span>{personal.location}</span>
              </div>
              <div className="hero-section-marker"><strong>01</strong><span /> INTRODUCTION</div>
            </div>
            <figure className="hero-image reveal">
              <img src={personal.photos.primary} alt={`Portrait de ${personal.fullName}`} fetchPriority="high" />
              <figcaption><span>IFRI / UAC</span><span>ABOMEY-CALAVI, BÉNIN</span></figcaption>
            </figure>
          </div>
        </section>

        <TerminalDemo />
        <ThemeSelector theme={theme} onChange={setTheme} />
        <ProfileSection />
        <ExpertiseSection />
        <LabSection onOpenDoc={setActiveDocument} />
        <JourneySection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="site-width footer-layout">
          <span>{personal.fullName} · L3 Sécurité Informatique</span>
          <span>© {new Date().getFullYear()} {personal.fullName}. Tous droits réservés.</span>
        </div>
      </footer>

      <DocumentModal doc={activeDocument} onClose={() => setActiveDocument(null)} />
    </div>
  );
}