import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="ambient-glow glow-cyan"></div>
      
      <h2 class="section-title">About Me</h2>

      <div class="grid-2">
        <div class="about-bio">
          <h3 class="bio-subtitle">Who I Am</h3>
          <p class="bio-text">
            I am a dedicated Software Engineer based in Pune, with over 2.5 years of professional 
            experience building robust, high-performance web applications using the Microsoft technology stack 
            and modern frontend frameworks.
          </p>
          <p class="bio-text">
            My engineering philosophy centers around writing clean, self-documenting code. I have a strong foundation in 
            <strong>OOP</strong>, <strong>Design Patterns</strong>, <strong>SOLID principles</strong>, and <strong>Separation of Concerns</strong>.
            I thrive in Agile sprint cycles and love collaborating with cross-functional teams to deliver reliable software solutions.
          </p>
          
          <div class="education-card glass-card">
            <div class="edu-icon-container">
              <i class="bi bi-mortarboard-fill"></i>
            </div>
            <div class="edu-details">
              <h4>Bachelor of Computer Science</h4>
              <p class="edu-school">Savitribai Phule Pune University</p>
              <span class="edu-year">2020 — 2023</span>
            </div>
          </div>
        </div>

        <div class="about-stats-grid">
          <div class="stat-card glass-card">
            <div class="stat-icon indigo"><i class="bi bi-rocket-takeoff"></i></div>
            <h4 class="stat-value">2.5+</h4>
            <p class="stat-label">Years of Experience</p>
          </div>
          
          <div class="stat-card glass-card">
            <div class="stat-icon purple"><i class="bi bi-braces"></i></div>
            <h4 class="stat-value">20+</h4>
            <p class="stat-label">RESTful APIs Built</p>
          </div>

          <div class="stat-card glass-card">
            <div class="stat-icon cyan"><i class="bi bi-shield-check"></i></div>
            <h4 class="stat-value">0</h4>
            <p class="stat-label">Production Defects Intern</p>
          </div>

          <div class="stat-card glass-card">
            <div class="stat-icon rose"><i class="bi bi-people-fill"></i></div>
            <h4 class="stat-value">2</h4>
            <p class="stat-label">Enterprise Sprints Delivered</p>
          </div>
        </div>
      </div>
      
      <div class="strengths-container">
        <h4 class="strengths-title">Core Principles I Follow</h4>
        <div class="strengths-grid">
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> SOLID Principles</div>
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> DRY (Don't Repeat Yourself)</div>
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> Clean Architecture</div>
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> Separation of Concerns</div>
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> High Availability Services</div>
          <div class="strength-tag"><i class="bi bi-check-circle-fill"></i> Performance Tuning</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      position: relative;
    }

    .about-bio {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .bio-subtitle {
      font-size: 1.5rem;
      color: var(--text-main);
      margin-bottom: 8px;
    }

    .bio-text {
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.7;
    }

    .bio-text strong {
      color: var(--primary);
    }

    /* Education Card */
    .education-card {
      display: flex;
      gap: 20px;
      padding: 24px;
      margin-top: 20px;
      align-items: center;
      background: var(--bg-secondary);
      border-color: var(--glass-border);
    }

    .education-card:hover {
      border-color: var(--glass-border-glow);
    }

    .edu-icon-container {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: rgba(79, 70, 229, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--primary);
    }

    .edu-details h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-main);
    }

    .edu-school {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin: 2px 0 6px 0;
    }

    .edu-year {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(8, 145, 178, 0.08);
      color: var(--accent);
      padding: 2px 8px;
      border-radius: 4px;
    }

    /* Stats Grid */
    .about-stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .stat-card {
      padding: 30px 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    .stat-icon.indigo { background: rgba(79, 70, 229, 0.08); color: var(--primary); }
    .stat-icon.purple { background: rgba(124, 58, 237, 0.08); color: var(--secondary); }
    .stat-icon.cyan { background: rgba(8, 145, 178, 0.08); color: var(--accent); }
    .stat-icon.rose { background: rgba(244, 63, 94, 0.08); color: #e11d48; }

    .stat-value {
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1;
      margin-bottom: 6px;
      font-family: var(--font-display);
    }

    .stat-label {
      color: var(--text-muted);
      font-size: 0.9rem;
      font-weight: 500;
    }

    /* Strengths section */
    .strengths-container {
      margin-top: 60px;
      background: var(--bg-secondary);
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      padding: 30px;
      z-index: 1;
      position: relative;
    }

    .strengths-title {
      font-size: 1.25rem;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 700;
      color: var(--text-main);
    }

    .strengths-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }

    .strength-tag {
      background: var(--bg-primary);
      border: 1px solid var(--glass-border);
      border-radius: 9999px;
      padding: 8px 18px;
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }

    .strength-tag i {
      color: var(--primary);
    }

    .strength-tag:hover {
      border-color: rgba(79, 70, 229, 0.25);
      color: var(--text-main);
      background: rgba(79, 70, 229, 0.04);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .strengths-grid {
        justify-content: flex-start;
      }
    }
  `]
})
export class AboutComponent {}
