"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, Code2, Figma, Layers3, Menu, MousePointer2, Sparkles, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Vitalis Health",
    type: "Healthcare · Website design",
    description: "A calm, clear digital experience built to make healthcare feel more approachable.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    url: "https://vitalis-health-website.webflow.io/",
    tag: "LIVE WEBSITE"
  },
  {
    number: "02",
    name: "M&M Urban Couture",
    type: "Fashion · Website concept",
    description: "A considered fashion storefront concept with a sharper visual direction and product focus.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
    url: "https://merge-main-87892319.figma.site/",
    tag: "DESIGN CONCEPT"
  }
];

const services = [
  ["01", "Webflow design & development", "Responsive websites, built with care and a clear path to conversion."],
  ["02", "Website redesign", "A sharper visual identity, better structure and a smoother user journey."],
  ["03", "UI/UX & landing pages", "Purposeful interfaces and focused pages that make the next step obvious."],
  ["04", "No-code MVP development", "Lean digital products and early-stage experiences using no-code tools."]
];

const tools = ["Webflow", "Figma", "Bubble", "WordPress", "Shopify", "Framer"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#" aria-label="Zikaro home">Z<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>What I do</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL DESIGNER & DEVELOPER</p>
          <h1>WE MAKE<br /><span>THE WEB</span><br />FEEL BETTER<span className="period">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I design and build thoughtful digital experiences that help ambitious brands show up with clarity and confidence.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-glow" />
          <div className="visual-label label-top">DESIGN WITH INTENTION</div>
          <div className="visual-monogram">Z<span>.</span></div>
          <div className="visual-index">WEB / 2026</div>
          <div className="visual-side-note">STRATEGY<br />× DESIGN<br />× BUILD</div>
          <Asterisk className="visual-star" size={54} strokeWidth={1} />
        </div>
        <div className="hero-foot"><span>BASED IN NIGERIA · WORKING WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip shell" id="about">
        <p className="eyebrow">A LITTLE ABOUT THE WORK</p>
        <div className="intro-grid">
          <h2>Good design<br />should <em>do more.</em></h2>
          <div className="intro-text">
            <p>I’m the creative behind Zikaro. I bring design thinking and no-code development together to create websites that look considered, feel effortless and work hard for the people using them.</p>
            <p>From a fresh landing page to a full website redesign, the goal is always the same: make every interaction count.</p>
            <a className="text-link" href="#services">Explore capabilities <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected <em>work</em><span className="period">.</span></h2></div>
          <span className="section-count">01 — 02</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt="" />
                <span className="project-tag">{project.tag}</span>
                <span className="project-open"><ArrowUpRight size={21} /></span>
              </div>
              <div className="project-meta"><span>{project.number} / {project.type}</span><span>↗</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
        <p className="work-note">A selection of live work and clearly labelled design concepts. More projects can be added as the portfolio grows.</p>
      </section>

      <section className="services-section" id="services">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">HOW I CAN HELP</p><h2>What I <em>do</em><span className="period">.</span></h2></div>
            <p className="heading-note">Small details. Thoughtful decisions.<br />Digital work with a clear purpose.</p>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <div className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight className="service-arrow" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="toolkit-section shell">
        <div className="toolkit-left">
          <p className="eyebrow">THE TOOLKIT</p>
          <h2>The right tools<br />for the <em>right idea.</em></h2>
          <p className="toolkit-copy">A flexible toolkit for taking ideas from first sketch to a finished digital experience.</p>
        </div>
        <div className="tool-grid">
          {tools.map((tool, index) => (
            <div className="tool-item" key={tool}><span className="tool-icon">{index === 0 ? <Layers3 /> : index === 1 ? <Figma /> : index === 2 ? <Code2 /> : <Sparkles />}</span><span>{tool}</span><Check size={14} className="tool-check" /></div>
          ))}
        </div>
      </section>

      <section className="process-section shell">
        <div className="section-heading"><div><p className="eyebrow">NO GUESSWORK, JUST GOOD WORK</p><h2>A clear <em>process.</em></h2></div></div>
        <div className="process-grid">
          {[
            ["01", "Discover", "We get clear on your goals, audience and what success should look like."],
            ["02", "Plan", "We map the structure, content and direction before the build begins."],
            ["03", "Design", "We shape the visual experience around your brand and your users."],
            ["04", "Build", "I bring the design to life with responsive, thoughtful development."],
            ["05", "Launch", "We review, refine and get your new experience ready for the world."]
          ].map(([number, title, description]) => <div className="process-step" key={number}><span>{number}</span><MousePointer2 size={20} /><h3>{title}</h3><p>{description}</p></div>)}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-panel">
          <div className="contact-kicker"><span className="status-dot" /> OPEN TO SELECT PROJECTS</div>
          <h2>Have a good<br />one in <em>mind?</em></h2>
          <div className="contact-bottom">
            <p>Tell me what you’re building. Let’s make something clear, useful and memorable.</p>
            <a className="contact-button" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Let’s start a conversation <ArrowUpRight size={17} /></a>
          </div>
          <span className="contact-asterisk">✳</span>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="wordmark footer-mark" href="#">Z<span>.</span></a>
        <span>© 2026 ZIKARO. BUILT WITH INTENTION.</span>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
