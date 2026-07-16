import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <div class="ambient-glow glow-indigo"></div>

      <h2 class="section-title">Professional Journey</h2>

      <div class="timeline">
        <div *ngFor="let item of experiences; let idx = index" class="timeline-item" [class.left]="idx % 2 === 0" [class.right]="idx % 2 !== 0">
          <div class="timeline-dot"></div>
          
          <div class="timeline-card glass-card">
            <span class="work-duration">{{ item.duration }}</span>
            <h3 class="work-role">{{ item.role }}</h3>
            <h4 class="work-company">
              <i class="bi bi-building"></i> {{ item.company }} 
              <span class="work-location"><i class="bi bi-geo-alt"></i> {{ item.location }}</span>
            </h4>
            
            <ul class="work-highlights">
              <li *ngFor="let highlight of item.highlights">
                {{ highlight }}
              </li>
            </ul>

            <div class="work-tags">
              <span *ngFor="let tag of item.tags" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      position: relative;
    }

    .timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 0;
    }

    /* Vertical line in center */
    .timeline::after {
      content: '';
      position: absolute;
      width: 4px;
      background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--accent));
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      border-radius: 2px;
    }

    .timeline-item {
      padding: 10px 40px;
      position: relative;
      background-color: transparent;
      width: 50%;
    }

    .timeline-item.left {
      left: 0;
    }

    .timeline-item.right {
      left: 50%;
    }

    /* Timeline Dots */
    .timeline-dot {
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: var(--bg-primary);
      border: 4px solid var(--primary);
      border-radius: 50%;
      top: 30px;
      z-index: 1;
      box-shadow: 0 0 10px var(--primary);
      transition: all 0.3s ease;
    }

    .timeline-item.right .timeline-dot {
      left: -10px;
      border-color: var(--secondary);
      box-shadow: 0 0 10px var(--secondary);
    }

    .timeline-item:hover .timeline-dot {
      transform: scale(1.3);
      background-color: var(--text-main);
    }

    .timeline-card {
      padding: 30px;
      position: relative;
      border-radius: 16px;
    }

    .timeline-card:hover {
      box-shadow: var(--glow-shadow-indigo);
    }

    .timeline-item.right:hover .timeline-card {
      box-shadow: var(--glow-shadow-cyan);
      border-color: rgba(8, 145, 178, 0.25);
    }
 
    .work-duration {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent);
      background: rgba(8, 145, 178, 0.08);
      padding: 4px 12px;
      border-radius: 9999px;
      margin-bottom: 12px;
      letter-spacing: 0.05em;
    }
 
    .work-role {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 6px;
    }
 
    .work-company {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
 
    .work-location {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--text-dark);
      margin-left: 8px;
    }
 
    .work-highlights {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }
 
    .work-highlights li {
      position: relative;
      padding-left: 20px;
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }
 
    .work-highlights li::before {
      content: '✦';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-size: 0.8rem;
    }
 
    .timeline-item.right .work-highlights li::before {
      color: var(--secondary);
    }
 
    .work-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
 
    .tag {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      padding: 4px 10px;
      border-radius: 6px;
    }

    /* Mobile Timeline Layout */
    @media (max-width: 768px) {
      .timeline::after {
        left: 20px;
      }

      .timeline-item {
        width: 100%;
        padding-left: 45px;
        padding-right: 0;
      }

      .timeline-item.left, .timeline-item.right {
        left: 0;
      }

      .timeline-dot {
        left: 10px !important;
        right: auto !important;
      }
    }
  `]
})
export class ExperienceComponent {
  readonly experiences: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'Emsphere Technologies Pvt. Ltd.',
      location: 'Pune',
      duration: '11/2023 — PRESENT',
      highlights: [
        'Designed and implemented multiple scalable modules for enterprise HRMS and CLMS platforms, automating manual operations.',
        'Built and deployed an automated shift-based email notification service using Windows Services and ADO.NET to streamline compliance tracking.',
        'Enhanced real-time biometric punch sync background tasks, ensuring high availability and robust data integrity.',
        'Implemented layered clean architecture with SOLID principles and Separation of Concerns, improving maintenance speed and code reuse.',
        'Optimized complex SQL queries, database indexing, and stored procedures for faster module loading speeds.'
      ],
      tags: ['C#', 'ASP.NET MVC', 'SQL Server', 'ADO.NET', 'Windows Services', 'Agile', 'SOLID']
    },
    {
      role: 'Software Engineer Intern',
      company: 'Transflower Learning Pvt. Ltd.',
      location: 'Pune',
      duration: '11/2022 — 11/2023',
      highlights: [
        'Contributed to full-stack development of EAgroServices multi-role agricultural system for farmers, transporters, and collection hubs.',
        'Delivered 15+ user stories across 5 Agile sprints with zero production defects.',
        'Developed and integrated 20+ secure RESTful APIs using .NET Core Web API with JWT-based role-level security.',
        'Built modern, responsive admin dashboards in Angular, increasing user engagement and task completion rates by 25%.',
        'Collaborated in active sprint planning, developer code reviews, and daily standups following Scrum workflows.'
      ],
      tags: ['.NET Core Web API', 'Angular', 'MySQL', 'JWT Security', 'Git', 'Bootstrap', 'Agile']
    }
  ];
}
