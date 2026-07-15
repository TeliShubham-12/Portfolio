import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="ambient-glow glow-indigo"></div>

      <h2 class="section-title">Get In Touch</h2>

      <div class="grid-2">
        <!-- Contact Info Cards -->
        <div class="contact-info">
          <h3 class="info-title">Let's Connect</h3>
          <p class="info-text">
            I am always open to discussing new opportunities, full-stack projects, C#/.NET architecture, or frontend designs. 
            Feel free to reach out via the form, or use the quick buttons to copy my details.
          </p>

          <div class="info-cards">
            <!-- Email -->
            <div class="info-card glass-card" (click)="copyText('shubhamteli203@gmail.com', 'email')">
              <div class="info-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="info-details">
                <span class="info-label">Email Me</span>
                <span class="info-value">shubhamteli203&#64;gmail.com</span>
              </div>
              <button class="copy-btn" aria-label="Copy Email">
                <i class="bi" [class.bi-clipboard]="copiedType() !== 'email'" [class.bi-clipboard-check-fill]="copiedType() === 'email'"></i>
                <span class="tooltip" [class.show]="copiedType() === 'email'">Copied!</span>
              </button>
            </div>

            <!-- Phone -->
            <div class="info-card glass-card" (click)="copyText('7448022740', 'phone')">
              <div class="info-icon">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div class="info-details">
                <span class="info-label">Call / WhatsApp</span>
                <span class="info-value">+91 7448022740</span>
              </div>
              <button class="copy-btn" aria-label="Copy Phone">
                <i class="bi" [class.bi-clipboard]="copiedType() !== 'phone'" [class.bi-clipboard-check-fill]="copiedType() === 'phone'"></i>
                <span class="tooltip" [class.show]="copiedType() === 'phone'">Copied!</span>
              </button>
            </div>

            <!-- Location -->
            <div class="info-card glass-card">
              <div class="info-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-details">
                <span class="info-label">Location</span>
                <span class="info-value">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Card -->
        <div class="contact-form-container glass-card">
          @if (formSubmitted()) {
            <div class="success-alert">
              <div class="success-icon">
                <i class="bi bi-check2-circle"></i>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you, {{ contactForm.name }}. Shubham will get back to you shortly.</p>
              <button class="btn-primary" (click)="resetForm()">Send Another Message</button>
            </div>
          } @else {
            <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="contact-form" autocomplete="off">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="contactForm.name" 
                  required 
                  #nameInput="ngModel"
                  [class.invalid]="nameInput.invalid && nameInput.touched"
                  placeholder="John Doe"
                />
                @if (nameInput.invalid && nameInput.touched) {
                  <span class="error-msg">Name is required</span>
                }
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="contactForm.email" 
                  required 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                  #emailInput="ngModel"
                  [class.invalid]="emailInput.invalid && emailInput.touched"
                  placeholder="john@example.com"
                />
                @if (emailInput.invalid && emailInput.touched) {
                  <span class="error-msg">Please enter a valid email</span>
                }
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="contactForm.subject" 
                  required
                  #subjectInput="ngModel"
                  [class.invalid]="subjectInput.invalid && subjectInput.touched"
                  placeholder="Project Collaboration"
                />
                @if (subjectInput.invalid && subjectInput.touched) {
                  <span class="error-msg">Subject is required</span>
                }
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  [(ngModel)]="contactForm.message" 
                  required 
                  #messageInput="ngModel"
                  [class.invalid]="messageInput.invalid && messageInput.touched"
                  placeholder="Hi Shubham, I would love to talk about..."
                ></textarea>
                @if (messageInput.invalid && messageInput.touched) {
                  <span class="error-msg">Message is required</span>
                }
              </div>

              <button type="submit" class="btn-primary form-submit-btn" [disabled]="f.invalid">
                Send Message <i class="bi bi-send-fill"></i>
              </button>
            </form>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      position: relative;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .info-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
    }

    .info-text {
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .info-cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-card {
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      position: relative;
    }

    .info-card:hover {
      border-color: var(--glass-border-glow);
    }

    .info-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0;
    }

    .info-details {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .info-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-dark);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .info-value {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-main);
      word-break: break-all;
    }

    /* Copy Button Tooltip */
    .copy-btn {
      background: transparent;
      border: none;
      color: var(--text-dark);
      cursor: pointer;
      font-size: 1.1rem;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .info-card:hover .copy-btn {
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.03);
    }

    .copy-btn:hover {
      color: var(--text-main) !important;
      background: rgba(255, 255, 255, 0.08) !important;
    }

    .tooltip {
      position: absolute;
      bottom: 120%;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: var(--bg-tertiary);
      border: 1px solid var(--glass-border);
      color: var(--text-main);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      pointer-events: none;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .tooltip.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    /* Contact Form Styles */
    .contact-form-container {
      padding: 40px;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .form-group input, .form-group textarea {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--glass-border);
      border-radius: 8px;
      color: var(--text-main);
      padding: 12px 16px;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
      background: rgba(255, 255, 255, 0.04);
    }

    .form-group input.invalid, .form-group textarea.invalid {
      border-color: #ef4444;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
    }

    .error-msg {
      color: #f87171;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .form-submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 10px;
    }

    .form-submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    /* Success Alert */
    .success-alert {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px 0;
      gap: 16px;
    }

    .success-icon {
      font-size: 4rem;
      color: var(--accent);
      line-height: 1;
    }

    .success-alert h3 {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .success-alert p {
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 12px;
      max-width: 320px;
    }

    @media (max-width: 480px) {
      .contact-form-container {
        padding: 24px;
      }
    }
  `]
})
export class ContactComponent {
  readonly copiedType = signal<'email' | 'phone' | null>(null);
  readonly formSubmitted = signal(false);

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  copyText(text: string, type: 'email' | 'phone') {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedType.set(type);
      setTimeout(() => {
        this.copiedType.set(null);
      }, 2000);
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.formSubmitted.set(true);
    }
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.formSubmitted.set(false);
  }
}
