import { Component, signal } from '@angular/core';

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  features: string[];
  icon: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <section id="projects" class="projects-section">
      <div class="ambient-glow glow-cyan"></div>

      <h2 class="section-title">Featured Projects</h2>

      <div class="projects-grid">
        @for (project of projects; track project.id) {
          <div class="project-card glass-card">
            <div class="project-header">
              <div class="project-icon">
                <i [class]="'bi bi-' + project.icon"></i>
              </div>
              <span class="project-category">{{ project.category }}</span>
            </div>
            
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.shortDesc }}</p>

            <div class="project-tech">
              @for (tech of project.techStack.slice(0, 3); track tech) {
                <span class="tech-pill">{{ tech }}</span>
              }
              @if (project.techStack.length > 3) {
                <span class="tech-pill excess">+{{ project.techStack.length - 3 }}</span>
              }
            </div>

            <button class="view-btn" (click)="openProject(project)">
              View Case Study <i class="bi bi-arrow-up-right"></i>
            </button>
          </div>
        }
      </div>

      <!-- Project Detail Modal -->
      @if (selectedProject(); as project) {
        <div class="modal-overlay" (click)="closeProject()">
          <div class="modal-content glass-card animate-fade-in" (click)="$event.stopPropagation()">
            <button class="close-btn" (click)="closeProject()" aria-label="Close modal">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="modal-body">
              <div class="modal-icon-container">
                <i [class]="'bi bi-' + project.icon"></i>
              </div>
              
              <span class="modal-category">{{ project.category }}</span>
              <h3 class="modal-title">{{ project.title }}</h3>
              
              <div class="modal-tech-stack">
                @for (tech of project.techStack; track tech) {
                  <span class="tech-pill">{{ tech }}</span>
                }
              </div>

              <div class="modal-divider"></div>

              <div class="modal-description-section">
                <h4>Overview</h4>
                <p>{{ project.description }}</p>
              </div>

              <div class="modal-features-section">
                <h4>Key Implementations</h4>
                <ul>
                  @for (feat of project.features; track feat) {
                    <li>
                      <i class="bi bi-patch-check-fill text-accent"></i>
                      <span>{{ feat }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    .projects-section {
      position: relative;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 30px;
    }

    .project-card {
      padding: 30px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .project-icon {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: rgba(79, 70, 229, 0.08);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    .project-category {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent);
      background: rgba(8, 145, 178, 0.08);
      padding: 4px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .project-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 24px;
      flex-grow: 1;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tech-pill {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .tech-pill.excess {
      color: var(--secondary);
      border-color: rgba(124, 58, 237, 0.2);
      background: rgba(124, 58, 237, 0.05);
    }

    .view-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: none;
      color: var(--text-main);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 4px 0;
      align-self: flex-start;
      transition: all 0.3s ease;
    }

    .view-btn i {
      transition: transform 0.3s ease;
    }

    .view-btn:hover {
      color: var(--primary);
    }

    .view-btn:hover i {
      transform: translate(3px, -3px);
    }

    /* Modal Styling */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(10px);
      z-index: 1100;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .modal-content {
      width: 100%;
      max-width: 650px;
      max-height: 85vh;
      overflow-y: auto;
      background: var(--bg-primary);
      border-color: var(--glass-border);
      position: relative;
      padding: 40px;
      box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      color: var(--text-muted);
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .close-btn:hover {
      color: var(--text-main);
      background: rgba(15, 23, 42, 0.05);
    }

    .modal-icon-container {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: rgba(79, 70, 229, 0.08);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin-bottom: 24px;
    }

    .modal-category {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: block;
      margin-bottom: 8px;
    }

    .modal-title {
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 16px;
    }

    .modal-tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .modal-divider {
      height: 1px;
      background: var(--glass-border);
      width: 100%;
      margin: 24px 0;
    }

    .modal-description-section h4, .modal-features-section h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .modal-description-section p {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .modal-features-section ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .modal-features-section li {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .modal-features-section li i {
      color: var(--accent);
      font-size: 1.1rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
  `]
})
export class ProjectsComponent {
  readonly selectedProject = signal<Project | null>(null);

  readonly projects: Project[] = [
    {
      id: 'clms',
      title: 'Contract Labour Management System (CLMS)',
      shortDesc: 'A full operations platform to manage contract labor processes, onboarding, and profiles.',
      description: 'CLMS is an enterprise-level platform developed to automate the lifecycle of contract labor operations. It replaces labor-intensive, error-prone manual spreadsheets with structured onboarding pipelines, real-time requisition workflows, and centralized contractor compliance profiles.',
      techStack: ['ASP.NET MVC', 'SQL Server', 'jQuery', 'Bootstrap', 'ADO.NET'],
      features: [
        'Designed and implemented onboarding modules for new contract employees to capture profile and regulatory records.',
        'Created a dynamic manpower requisition system to streamline daily labor planning requests.',
        'Redesigned front-end interface using jQuery & Bootstrap to provide responsive, accessible user interfaces.',
        'Engineered secure, high-traffic data access queries using .NET Framework and optimized SQL Server tables.'
      ],
      icon: 'people-fill',
      category: 'Enterprise Product'
    },
    {
      id: 'hrms',
      title: 'Human Resource Management System (HRMS)',
      shortDesc: 'An all-in-one platform for employee scheduling, punch tracking, leaves, and payroll.',
      description: 'A comprehensive web application that automates HR operations for organizations. It handles high-volume attendance data tracking, complex shift rotation schemes, leave balance logs, and payroll calculations to improve operational efficiency.',
      techStack: ['ASP.NET MVC', 'SQL Server', 'jQuery', 'Bootstrap', 'Windows Services'],
      features: [
        'Built flexible, rules-driven shift scheduling and leave tracking modules tailored for varying organizational layers.',
        'Optimized database queries and procedures to speed up real-time attendance status reports.',
        'Partnered closely with QA teams and product managers to execute user stories and deliver highly-stable releases.',
        'Developed automated calculations for leaves, allowances, and attendance punch sync operations.'
      ],
      icon: 'calendar-week',
      category: 'Enterprise Product'
    },
    {
      id: 'agro',
      title: 'EAgroServices',
      shortDesc: 'Multi-role agricultural system for farmers, managers, and logistics transporters.',
      description: 'EAgroServices is a full-stack digital commerce platform aimed at modernizing farm-to-collector supply chains. It features role-specific dashboards, secure transactions, and collection point logs to assist in transport scheduling, deliveries, and yield logging.',
      techStack: ['.NET Core Web API', 'Angular', 'MySQL', 'JWT Auth', 'Git'],
      features: [
        'Implemented secure, role-level authorization (Manager, Farmer, Transporter) using JWT tokens and ASP.NET Core Identity.',
        'Designed and built interactive dashboards using Angular to display real-time analytics, revenue tallies, and supply volumes.',
        'Delivered 20+ robust REST APIs with swagger documentation and test validation.',
        'Helped increase overall platform user engagement and delivery tracking speeds by 25%.'
      ],
      icon: 'tree-fill',
      category: 'Full Stack App'
    },
    {
      id: 'shift',
      title: 'Shift-Based Email Notification System',
      shortDesc: 'Automated Windows Service syncing real-time biometrics and alerting compliance.',
      description: 'A background automation engine built as a Windows Service that integrates directly with biometric physical systems. It continuously processes punches against employee schedules to send instant, rules-based warning emails for compliance breaches.',
      techStack: ['.NET Framework', 'Windows Service', 'SQL Server', 'ADO.NET', 'SMTP API'],
      features: [
        'Engineered a robust, non-blocking Windows service using ADO.NET and optimized multi-threaded timers.',
        'Programmed sophisticated tolerance window calculations to identify late arrivals or missing checkout punches.',
        'Integrated email dispatch configurations with SMTP endpoints, supporting customized dynamic HTML templates.',
        'Ensured highly available processing that synchronizes biometric logs with central servers instantly.'
      ],
      icon: 'envelope-check',
      category: 'Automation & Services'
    },
    {
      id: 'dairy',
      title: 'Dairy Management Application',
      shortDesc: 'Modern Blazor and Angular app facilitating milk logging, fat/SNF math, and payouts.',
      description: 'Dairy Management Application is a modern app tailored to farmers and collection centers. It allows logging daily milk entries, calculating automated payouts based on fat/SNF (Solid-Not-Fat) fat-to-price metrics, and generating financial logs.',
      techStack: ['.NET Core', 'Angular', 'Blazor', 'PostgreSQL', 'Figma'],
      features: [
        'Designed high-fidelity web views using Figma, mapping complex calculations into simple interfaces.',
        'Implemented cross-platform components using both Blazor and Angular to support hybrid device operations.',
        'Integrated calculations based on milk density, SNF ratios, and dynamic milk rate charts.',
        'Optimized PostgreSQL database tables to store transactions, supplier records, and payout history.'
      ],
      icon: 'calculator',
      category: 'Cross Platform App'
    }
  ];

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = ''; // Restore scrolling
  }
}
