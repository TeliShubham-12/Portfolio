import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // percentage
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="ambient-glow glow-purple"></div>

      <h2 class="section-title">Technical Expertise</h2>
      
      <div class="skills-grid">
        <div *ngFor="let category of skillCategories" class="category-card glass-card">
          <div class="category-header">
            <div class="category-icon">
              <i [class]="'bi bi-' + category.icon"></i>
            </div>
            <h3>{{ category.title }}</h3>
          </div>
          
          <div class="skills-list">
            <div *ngFor="let skill of category.skills" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">
                  <i [class]="'bi ' + skill.icon + ' skill-bullet'"></i>
                  {{ skill.name }}
                </span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar" [style.width]="skill.level + '%'"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      position: relative;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 30px;
    }

    .category-card {
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .category-card:hover {
      box-shadow: var(--glow-shadow-indigo);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 16px;
    }

    .category-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }

    .category-header h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .skill-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .skill-bullet {
      font-size: 0.85rem;
      color: var(--accent);
    }

    .skill-percentage {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .progress-bar-container {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 9999px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      border-radius: 9999px;
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      icon: 'code-square',
      skills: [
        { name: 'C#', level: 90, icon: 'bi-gem' },
        { name: 'ASP.NET Core Web API', level: 88, icon: 'bi-braces' },
        { name: 'ASP.NET MVC', level: 85, icon: 'bi-window-stack' },
        { name: '.NET Core / Framework', level: 88, icon: 'bi-box' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'layout-wtf',
      skills: [
        { name: 'Angular', level: 82, icon: 'bi-shield-check' },
        { name: 'jQuery', level: 85, icon: 'bi-plugin' },
        { name: 'JavaScript (ES6)', level: 85, icon: 'bi-filetype-js' },
        { name: 'HTML5 & CSS3', level: 90, icon: 'bi-filetype-css' },
        { name: 'Bootstrap', level: 88, icon: 'bi-bootstrap' }
      ]
    },
    {
      title: 'Databases & Access',
      icon: 'database',
      skills: [
        { name: 'SQL Server', level: 86, icon: 'bi-database' },
        { name: 'MySQL', level: 80, icon: 'bi-database-fill' },
        { name: 'PostgreSQL', level: 78, icon: 'bi-database-add' },
        { name: 'ADO.NET', level: 85, icon: 'bi-link' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: 'tools',
      skills: [
        { name: 'Git & GitHub / GitLab', level: 88, icon: 'bi-git' },
        { name: 'TFS (Team Foundation Server)', level: 80, icon: 'bi-hdd-network' },
        { name: 'Postman', level: 90, icon: 'bi-send-check' },
        { name: 'Windows Services', level: 85, icon: 'bi-cpu' },
        { name: 'SonarQube & Visual Studio', level: 82, icon: 'bi-journal-check' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: 'lightbulb',
      skills: [
        { name: 'OOP (Object Oriented Programming)', level: 92, icon: 'bi-diagram-3' },
        { name: 'SOLID Principles', level: 88, icon: 'bi-puzzle' },
        { name: 'Clean Code & DRY', level: 90, icon: 'bi-pencil-square' },
        { name: 'Agile Development (Scrum)', level: 85, icon: 'bi-calendar-event' }
      ]
    }
  ];
}
