document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    /* ----------------------------------------------------
       THEME TOGGLE
    ---------------------------------------------------- */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    /* ----------------------------------------------------
       STICKY NAVBAR & ACTIVE NAVIGATION LINK
    ---------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link on Scroll
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 120) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    /* ----------------------------------------------------
       MOBILE MENU TOGGLE
    ---------------------------------------------------- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });

    // Close mobile menu on resize to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });

    /* ----------------------------------------------------
       TYPEWRITER EFFECT
    ---------------------------------------------------- */
    const words = ["Scalable Web Applications.", ".NET Core Web APIs.", "Interactive Frontends.", "Clean & SOLID Code."];
    const typewriterElement = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // delete faster
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // type normal
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 400; // Pause before typing next word
        }

        setTimeout(type, typeSpeed);
    }
    
    if (typewriterElement) {
        type();
    }

    /* ----------------------------------------------------
       PROJECT DETAILS MODAL DATABASE & INTERACTIVITY
    ---------------------------------------------------- */
    const projectsData = {
        clms: {
            title: "Contract Labour Management System (CLMS)",
            category: "Web Application / Enterprise Platform",
            tech: ["ASP.NET MVC", "SQL Server", "jQuery", "Bootstrap", "ADO.NET"],
            summary: "A robust enterprise system developed for managing contract labor onboarding, requisitions, and vendor/contractor profiles, replacing archaic spreadsheets.",
            details: "This system automates the compliance, manpower requisition, and tracking processes of contract workers within high-traffic industrial facilities. Key focus areas were clean data collection, compliance alerts, and seamless contractor verification dashboards.",
            contributions: [
                "Designed and implemented relational database tables, indexes, and stored procedures in SQL Server to handle high-concurrency transactions.",
                "Engineered the onboarding flow with strict validation rules using jQuery and Bootstrap, lowering human input errors.",
                "Integrated multi-stage approval workflows to facilitate requisition clearance between administrators, managers, and contractors.",
                "Implemented Separation of Concerns and DRY principles, resulting in a 35% decrease in developer maintenance cycles."
            ],
            impact: "Automated manual labor logging, reducing onboarding processing duration by 50% and improving contract compliance tracking across operations."
        },
        hrms: {
            title: "Human Resource Management System (HRMS)",
            category: "Enterprise ERP Module",
            tech: ["ASP.NET MVC", "SQL Server", "jQuery", "Bootstrap", "Design Patterns"],
            summary: "A full-scale platform coordinating payroll calculation, attendance patterns, biometric sync, shift scheduling, and leave cycles for employees.",
            details: "Built to support complex HR procedures. The project required collaborating with business analysts and QA specialists to construct flexible rulesets that map to varied organizational structures and shifts.",
            contributions: [
                "Developed scalable shift scheduler module supporting rotational schedules, tolerance thresholds, and overtimes.",
                "Designed stored procedures optimized for high-traffic analytical dashboards, boosting query speeds on attendance records.",
                "Supported code review processes and enforced OOP principles (SOLID) to assure modular code design.",
                "Enhanced security layers, applying role-based access permissions to payroll configurations."
            ],
            impact: "Successfully eliminated attendance discrepancies and compressed the manual monthly payroll review timeframe from several days to just a few hours."
        },
        eagro: {
            title: "EAgroServices Platform",
            category: "Multi-Role Agricultural Portal",
            tech: [".NET Core Web API", "Angular", "MySQL", "JWT Security", "Git"],
            summary: "A comprehensive digital marketplace connecting farmers, transport providers, and collection center managers to streamline produce logistical operations.",
            details: "Engineered during my internship at Transflower Learning. The project focused on building responsive user roles, real-time status tracking, and secure APIs for a high volume of transactions.",
            contributions: [
                "Developed 20+ secure RESTful endpoints in ASP.NET Core using JWT validation for role-level controller access.",
                "Built interactive dashboards in Angular using reactive forms and RxJS, driving a 25% elevation in operational throughput.",
                "Optimized database schemas in MySQL, defining proper foreign key constraints and queries for delivery records.",
                "Operated within an Agile layout, completing 15+ user stories across 5 sprint cycles with zero production defects."
            ],
            impact: "Established a transparent, auditable flow of delivery records, lowering logistics disputes by 30% and onboarding hundreds of smallholder farmers."
        },
        shift: {
            title: "Shift-Based Email Notification System",
            category: "Windows Background Service",
            tech: [".NET Framework", "Windows Services", "SQL Server", "ADO.NET", "SMTP/APIs"],
            summary: "A critical automation utility that tracks real-time biometric logs and sends compliance notifications based on shifts.",
            details: "Designed as a robust background utility that functions 24/7 without user intervention. The service fetches schedule logs, matches them against shift policies, and shoots customized HTML alert emails to non-compliant staff.",
            contributions: [
                "Coded the multi-threaded Windows Service using C# .NET, setting up resilient error logging to the Windows Event Viewer.",
                "Utilized raw ADO.NET queries and connections to achieve highly efficient data extraction from SQL Server database logs.",
                "Developed modular email templates dynamically populated with punch data, shift names, and latency details.",
                "Connected background scheduler components to external schedule APIs to dynamically update shift timings."
            ],
            impact: "Automated a process previously requiring daily manual audits, reducing late arrivals by 15% within the first two months of deployment."
        },
        dairy: {
            title: "Dairy Management Application",
            category: "Full Stack Agricultural Product",
            tech: [".NET Core", "Angular", "Blazor", "PostgreSQL", "Figma"],
            summary: "A specialized dashboard for dairy farms and collection centers, calculating milk quality measurements and automated payouts.",
            details: "This application simplifies daily milk intake operations. It takes fat/SNF (Solid-Not-Fat) quality tests, computes dynamic rates per liter, generates payment ledgers, and maintains payout logs for cooperative members.",
            contributions: [
                "Parsed and implemented user interface layouts directly from Figma mockups, building clean responsive components in both Angular and Blazor.",
                "Created backend computation logic in .NET Core to process pricing parameters dynamically according to current government rate matrices.",
                "Constructed transactional database schemas in PostgreSQL, ensuring audit logs are kept for all payments.",
                "Secured backend connections, preparing robust integration endpoints for mobile dashboard synchronizations."
            ],
            impact: "Offered farmers instant, transparent insight into milk collection logs and payouts, reducing reconciliation friction and payment delay intervals."
        }
    };

    const projectCards = document.querySelectorAll('.project-card');
    const modalBackdrop = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        // Construct HTML content
        const techBadges = data.tech.map(t => `<span class="tag">${t}</span>`).join('');
        const bullets = data.contributions.map(bullet => `<li>${bullet}</li>`).join('');

        modalContent.innerHTML = `
            <div class="modal-project-header">
                <span class="modal-project-badge">${data.category}</span>
                <h3 class="modal-project-title">${data.title}</h3>
                <div class="modal-project-tech">
                    ${techBadges}
                </div>
            </div>
            
            <div class="modal-section">
                <h4><i data-lucide="info"></i> Project Overview</h4>
                <p><strong>${data.summary}</strong></p>
                <p style="margin-top: 10px;">${data.details}</p>
            </div>
            
            <div class="modal-section">
                <h4><i data-lucide="check-square"></i> Key Responsibilities & Contributions</h4>
                <ul class="modal-bullet-list">
                    ${bullets}
                </ul>
            </div>
            
            <div class="modal-section" style="border-left: 3px solid var(--accent-secondary); padding-left: 16px;">
                <h4><i data-lucide="trending-up" style="color: var(--accent-secondary)"></i> Impact & Results</h4>
                <p><strong>${data.impact}</strong></p>
            </div>
        `;

        // Re-run Lucide on modal content
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Show Modal
        modalBackdrop.classList.add('open');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeModal() {
        modalBackdrop.classList.remove('open');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock scroll
    }

    // Attach click events to "Read Details" links
    projectCards.forEach(card => {
        const btn = card.querySelector('.open-modal-btn');
        const projectId = card.getAttribute('data-project');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(projectId);
        });
    });

    // Close Modal triggers
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
            closeModal();
        }
    });

    /* ----------------------------------------------------
       PROJECT FILTER LOGIC
    ---------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gridCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            gridCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Animation trigger
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });

    /* ----------------------------------------------------
       SKILLS TABS INTERACTIVITY
    ---------------------------------------------------- */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            // Add active to current button
            btn.classList.add('active');

            const targetTab = btn.getAttribute('data-tab');

            // Hide all panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // Show target panel
            const activePanel = document.getElementById(`tab-${targetTab}`);
            if (activePanel) {
                activePanel.classList.add('active');
            }

            // Re-render Lucide icons if any in the panel
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    });

    /* ----------------------------------------------------
       SCROLL REVEAL (INTERSECTION OBSERVER)
    ---------------------------------------------------- */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Backup scroll reveal if JS Observer is slow
    setTimeout(() => {
        // Trigger hero reveal
        const heroSection = document.getElementById('home');
        if (heroSection) heroSection.classList.add('active');
    }, 100);

    /* ----------------------------------------------------
       CONTACT FORM SUBMISSION (MOCK)
    ---------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Set loading state
            submitBtn.disabled = true;
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span>Sending...</span><i data-lucide="loader" class="animate-spin"></i>`;
            if (window.lucide) window.lucide.createIcons();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Mock API network call latency
            setTimeout(() => {
                // Success trigger
                formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
                formStatus.className = 'form-status success';
                
                // Reset Form
                contactForm.reset();

                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                if (window.lucide) window.lucide.createIcons();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.className = 'form-status';
                }, 5000);

            }, 1500);
        });
    }
});
