import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <a href="#home" class="nav-logo" (click)="closeMobileMenu()">
          <i class="bi bi-terminal-fill logo-icon"></i>Shubham<span class="logo-accent"> Teli</span>
        </a>

        <!-- Desktop Menu -->
        <ul class="nav-links">
          <li *ngFor="let item of navItems">
            <a 
              [href]="'#' + item.id" 
              [class.active]="activeSection() === item.id"
              class="nav-link"
            >
              <i [class]="'bi bi-' + item.icon"></i>
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Toggle Button -->
        <button 
          class="mobile-toggle" 
          [class.open]="isMobileMenuOpen()" 
          (click)="toggleMobileMenu()"
          aria-label="Toggle Navigation"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" [class.open]="isMobileMenuOpen()">
        <ul class="mobile-nav-links">
          <li *ngFor="let item of navItems">
            <a 
              [href]="'#' + item.id" 
              [class.active]="activeSection() === item.id"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              <i [class]="'bi bi-' + item.icon"></i>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: var(--navbar-height);
      z-index: 1000;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      border-bottom: 1px solid transparent;
    }

    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      height: 70px;
      border-bottom: 1px solid rgba(15, 23, 42, 0.06);
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
    }

    .nav-container {
      width: 100%;
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 6px;
      letter-spacing: -0.03em;
    }

    .logo-accent {
      color: var(--primary);
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .logo-icon {
      color: var(--primary);
      font-size: 1.4rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-muted);
      padding: 8px 12px;
      border-radius: 8px;
    }

    .nav-link:hover {
      color: var(--text-main);
      background: rgba(15, 23, 42, 0.04);
    }

    .nav-link.active {
      color: var(--text-main);
      background: rgba(79, 70, 229, 0.08);
      border: 1px solid rgba(79, 70, 229, 0.15);
    }

    .nav-link.active i {
      color: var(--primary);
    }

    /* Mobile Toggle Button */
    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 1001;
    }

    .mobile-toggle .bar {
      width: 100%;
      height: 2px;
      background-color: var(--text-main);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mobile-toggle.open .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .mobile-toggle.open .bar:nth-child(2) {
      opacity: 0;
      transform: translateX(-20px);
    }

    .mobile-toggle.open .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 300px;
      height: 100vh;
      background: var(--bg-secondary);
      border-left: 1px solid var(--glass-border);
      box-shadow: -10px 0 30px rgba(15, 23, 42, 0.05);
      z-index: 999;
      display: flex;
      align-items: center;
      padding: 80px 40px;
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mobile-menu.open {
      right: 0;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 24px;
      list-style: none;
      width: 100%;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-muted);
      padding: 12px 16px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .mobile-nav-link:hover, .mobile-nav-link.active {
      color: var(--text-main);
      background: rgba(79, 70, 229, 0.08);
      border-left: 4px solid var(--primary);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .mobile-toggle {
        display: flex;
      }
    }
  `]
})
export class NavbarComponent {
  readonly navItems = [
    { id: 'home', label: 'Home', icon: 'house-door' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'wrench' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'projects', label: 'Projects', icon: 'code-slash' },
    { id: 'contact', label: 'Contact', icon: 'envelope' }
  ];

  readonly activeSection = signal('home');
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 1. Manage Scrolled State
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 20);

    // 2. Track Active Section
    const offset = 120;
    const sections = this.navItems.map(item => item.id);
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          this.activeSection.set(section);
        }
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
