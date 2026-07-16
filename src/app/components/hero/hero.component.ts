import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <!-- Background Ambient Glow -->
      <div class="ambient-glow glow-indigo"></div>
      <div class="ambient-glow glow-purple"></div>

      <div class="hero-content animate-fade-in">
        <span class="greeting-badge">Available for Work</span>
        <h1 class="hero-title">
          Hi, I am <br />
          <span class="text-gradient-primary">Shubham Teli</span>
        </h1>
        <h2 class="hero-subtitle">Software Engineer</h2>
        <p class="hero-description">
          I build high-performance, secure, and scalable web applications. Specializing in the 
          Microsoft technology stack (<span class="highlight">ASP.NET Core</span>, <span class="highlight">C#</span>, <span class="highlight">SQL Server</span>) 
          and modern frontend frameworks like <span class="highlight">Angular</span>.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn-primary">
            View Projects <i class="bi bi-arrow-right"></i>
          </a>
          <a href="#contact" class="btn-secondary">
            Get In Touch <i class="bi bi-envelope"></i>
          </a>
        </div>

        <div class="social-links">
          <a href="https://linkedin.com/in/shubham-teli" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/TeliShubham-12" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="mailto:shubhamteli203@gmail.com" aria-label="Email">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual animate-float">
        <div class="blob-frame">
          <div class="blob-content">
            <div class="code-editor-preview">
              <div class="editor-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="tab-title">PortfolioService.cs</span>
              </div>
              <div class="editor-body">
                <pre><code><span class="keyword">using</span> System;
<span class="keyword">namespace</span> DeveloperPortfolio;

<span class="keyword">public class</span> <span class="class-name">Shubham</span> : <span class="interface-name">ISoftwareEngineer</span> 
&#123;
    <span class="keyword">public string</span> Role => <span class="string">"Full Stack Developer"</span>;
    <span class="keyword">public double</span> Experience => 2.5; <span class="comment">// years</span>

    <span class="keyword">public string</span>[] CoreTech => <span class="keyword">new</span>[] 
    &#123;
        <span class="string">".NET Core"</span>, <span class="string">"C#"</span>, <span class="string">"Angular"</span>, <span class="string">"SQL"</span>
    &#125;;
&#125;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
      padding-top: calc(var(--navbar-height) + 40px);
      padding-bottom: 60px;
      position: relative;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
      z-index: 1;
    }

    .greeting-badge {
      display: inline-block;
      background: rgba(79, 70, 229, 0.08);
      border: 1px solid rgba(79, 70, 229, 0.15);
      color: var(--primary);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 24px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .hero-subtitle {
      font-size: clamp(1.25rem, 3vw, 2rem);
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 24px;
      font-family: var(--font-sans);
    }

    .hero-description {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 40px;
      max-width: 540px;
    }

    .hero-description .highlight {
      color: var(--text-main);
      font-weight: 600;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      margin-bottom: 40px;
    }

    .social-links {
      display: flex;
      gap: 20px;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.02);
      border: 1px solid rgba(15, 23, 42, 0.08);
      font-size: 1.2rem;
      color: var(--text-muted);
    }

    .social-links a:hover {
      color: var(--text-main);
      background: rgba(79, 70, 229, 0.08);
      border-color: rgba(79, 70, 229, 0.2);
      transform: translateY(-3px);
    }

    /* Hero Visual Code Block Preview */
    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    .blob-frame {
      width: 100%;
      max-width: 480px;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(124, 58, 237, 0.12));
      border-radius: 24px;
      padding: 12px;
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
    }

    .code-editor-preview {
      width: 100%;
      background: #0b0f19;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
    }

    .editor-header {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #111827;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .editor-header .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .editor-header .dot.red { background-color: #ef4444; }
    .editor-header .dot.yellow { background-color: #f59e0b; }
    .editor-header .dot.green { background-color: #10b981; }

    .editor-header .tab-title {
      margin-left: 8px;
      color: var(--text-dark);
      font-size: 0.8rem;
      font-family: monospace;
    }

    .editor-body {
      padding: 24px;
      text-align: left;
    }

    .editor-body pre {
      margin: 0;
      overflow-x: auto;
    }

    .editor-body code {
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Code highlighting */
    .keyword { color: #f43f5e; }
    .class-name { color: #38bdf8; }
    .interface-name { color: #10b981; }
    .string { color: #fbbf24; }
    .comment { color: #64748b; font-style: italic; }

    @media (max-width: 992px) {
      .hero-section {
        flex-direction: column;
        text-align: center;
        gap: 40px;
        padding-top: calc(var(--navbar-height) + 20px);
      }
      .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .hero-description {
        margin-left: auto;
        margin-right: auto;
      }
      .hero-actions {
        justify-content: center;
      }
      .social-links {
        justify-content: center;
      }
      .hero-visual {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
      }
    }
  `]
})
export class HeroComponent {}
