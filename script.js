// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
    }, 1500);
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00D9FF'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00D9FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typing Effect
const typingTexts = [
    "Machine Learning Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Innovation Leader"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const typingSpeed = 100;

function typeText() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 50 : typingSpeed);
    }
}

// Start typing after loader
setTimeout(typeText, 2000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate Skill Bars
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    const level = item.getAttribute('data-level');
                    const progress = item.querySelector('.skill-progress');
                    progress.style.width = level + '%';
                }, index * 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-container');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Counter Animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Observe stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => statObserver.observe(stat));

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link (temporary solution - replace with backend integration)
        const mailtoLink = `mailto:aryadeepv21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? 'linear-gradient(135deg, #00D9FF 0%, #0066CC 100%)' : 'linear-gradient(135deg, #FF006E 0%, #CC0052 100%)',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: '10000',
        animation: 'slideIn 0.5s ease',
        maxWidth: '400px'
    });
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    const projectDetails = {
        curechat: {
            title: 'CureGenix AI - Intelligent Health Assistant',
            description: `
                <h3>Overview</h3>
                <p>CureGenix AI is a revolutionary healthcare platform that democratizes medical insights through artificial intelligence. Built with a vision to make preliminary health assessments accessible to everyone, this project combines cutting-edge machine learning with user-friendly design.</p>
                
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Symptom Analysis:</strong> Advanced ML algorithms analyze user-reported symptoms to predict potential diseases with 95% accuracy</li>
                    <li><strong>Medicine Recommendations:</strong> Provides personalized medication suggestions based on the predicted condition</li>
                    <li><strong>Dietary Guidance:</strong> Offers customized diet plans to support recovery and overall health</li>
                    <li><strong>Real-time Processing:</strong> Instant results with seamless user experience</li>
                    <li><strong>Multi-Model Approach:</strong> Utilizes SVM, Random Forest, and Gradient Boosting for robust predictions</li>
                </ul>
                
                <h3>Technical Implementation</h3>
                <p>The backend is powered by Flask and Python, leveraging scikit-learn for machine learning models. The frontend uses Bootstrap for responsive design, ensuring accessibility across all devices. The system processes over 130+ symptoms to identify 40+ common diseases.</p>
                
                <h3>Impact</h3>
                <p>CureChat AI has the potential to serve as a first-line health advisor, especially in areas with limited medical access. By providing quick, accurate health insights, it empowers users to make informed decisions about their health.</p>
                
                <div class="modal-tech-stack">
                    <span>Python</span>
                    <span>Flask</span>
                    <span>Scikit-learn</span>
                    <span>Pandas</span>
                    <span>Bootstrap</span>
                    <span>REST API</span>
                </div>
            `
        },
        infosnap: {
            title: 'InfoSnap - AI Document Summarizer Platform',
            description: `
                <h3>Overview</h3>
                <p>InfoSnap transforms how we interact with documents by leveraging state-of-the-art NLP models. In a world drowning in information, InfoSnap acts as your personal document assistant, extracting key insights from lengthy texts in seconds.</p>
                
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Multi-length Summaries:</strong> Generate short, medium, or detailed summaries based on your needs</li>
                    <li><strong>OCR Integration:</strong> Extract and summarize text from images using PyTesseract and PDFPlumber</li>
                    <li><strong>Multilingual Support:</strong> Process documents in 15+ languages with automatic translation</li>
                    <li><strong>BART-CNN Models:</strong> Utilizes advanced transformer architecture for context-aware summarization</li>
                    <li><strong>Secure Processing:</strong> End-to-end encryption with shareable links for collaborative work</li>
                </ul>
                
                <h3>Technical Architecture</h3>
                <p>Built on a microservices architecture, InfoSnap uses Hugging Face Transformers for NLP tasks. The Flask backend handles document processing while maintaining session state. Real-time document workflow automation ensures smooth user experience.</p>
                
                <h3>Use Cases</h3>
                <p>Perfect for researchers, students, and professionals who need to quickly digest large volumes of text. From academic papers to business reports, InfoSnap saves hours of reading time while ensuring no critical information is missed.</p>
                
                <div class="modal-tech-stack">
                    <span>Python</span>
                    <span>Transformers</span>
                    <span>Flask</span>
                    <span>OCR</span>
                    <span>BART</span>
                    <span>Bootstrap</span>
                </div>
            `
        },
        algospark: {
            title: 'AlgoSpark - Interactive Algorithm Learning Platform',
            description: `
                <h3>Overview</h3>
                <p>AlgoSpark revolutionizes how students and developers learn data structures and algorithms. By combining interactive visualizations with hands-on coding, it transforms abstract concepts into tangible, understandable experiences.</p>
                
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Real-time Visualizations:</strong> Watch sorting algorithms in action with step-by-step animations</li>
                    <li><strong>Interactive Controls:</strong> Pause, play, and step through algorithm execution</li>
                    <li><strong>Dark/Light Mode:</strong> Comfortable viewing experience for extended learning sessions</li>
                    <li><strong>Modular Architecture:</strong> Easy integration of new algorithms and data structures</li>
                    <li><strong>Performance Metrics:</strong> Compare time and space complexity across different algorithms</li>
                </ul>
                
                <h3>Educational Impact</h3>
                <p>AlgoSpark addresses the common challenge of understanding algorithm behavior. By visualizing each step, learners can grasp concepts like recursion, divide-and-conquer, and dynamic programming more intuitively.</p>
                
                <h3>Future Enhancements</h3>
                <p>Plans include adding graph algorithms, advanced data structures, and a collaborative coding environment where users can share and discuss their implementations.</p>
                
                <div class="modal-tech-stack">
                    <span>TypeScript</span>
                    <span>React.js</span>
                    <span>ShadCN UI</span>
                    <span>Framer Motion</span>
                    <span>Sonner</span>
                </div>
            `
        }
    };
    
    modalContent.innerHTML = projectDetails[projectId].description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Add CSS for modal tech stack
const modalStyles = document.createElement('style');
modalStyles.innerHTML = `
    .modal-tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
    }
    
    .modal-tech-stack span {
        background: rgba(0, 217, 255, 0.1);
        color: var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        border: 1px solid var(--primary-color);
    }
    
    #modalContent h3 {
        color: var(--primary-color);
        margin: 1.5rem 0 1rem;
        font-family: 'Space Grotesk', monospace;
    }
    
    #modalContent ul {
        list-style: none;
        padding-left: 0;
    }
    
    #modalContent li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        line-height: 1.7;
    }
    
    #modalContent li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .notification {
        animation: slideIn 0.5s ease;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(modalStyles);

// Parallax Effect for Hero
// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg-animation');
    const heroContent = document.querySelector('.hero-content');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
    
    if (heroContent && scrolled < 600) {
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroContent.style.opacity = 1 - scrolled / 800;
    }
});

// Mouse Move Effects
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Move floating tech icons
    const floatingTechs = document.querySelectorAll('.floating-tech');
    floatingTechs.forEach((tech, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (x - 0.5) * speed * 30;
        const yMove = (y - 0.5) * speed * 30;
        tech.style.transform = `translate(${xMove}px, ${yMove}px) rotate(${xMove * 0.5}deg)`;
    });
    
    // Gradient sphere movement
    const spheres = document.querySelectorAll('.gradient-sphere');
    spheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.3;
        const xMove = (x - 0.5) * speed * 50;
        const yMove = (y - 0.5) * speed * 50;
        sphere.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Dynamic Project Image Loading
function loadProjectImages() {
    const projectImages = document.querySelectorAll('.project-img-placeholder img');
    
    projectImages.forEach(img => {
        // Add loading animation
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Add error handling
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder-icon';
            placeholder.innerHTML = '<i class="fas fa-image"></i>';
            this.parentElement.appendChild(placeholder);
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadProjectImages();
    
    // Add entrance animations to elements
    const animateElements = document.querySelectorAll('.hero-badge, .stat, .highlight-card, .skill-category, .project-card, .cert-card');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Enhanced Scroll Animations
const createScrollAnimation = (elements, animationClass) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    elements.forEach(el => observer.observe(el));
};

// Apply scroll animations
createScrollAnimation(document.querySelectorAll('.project-card'), 'animate-in');
createScrollAnimation(document.querySelectorAll('.cert-card'), 'animate-in');
createScrollAnimation(document.querySelectorAll('.highlight-card'), 'animate-in');

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close modal
    if (e.key === 'Escape') {
        closeProjectModal();
    }
    
    // Toggle theme with Ctrl/Cmd + K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Performance Optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Update active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}, 50);

window.addEventListener('scroll', debouncedScroll);



// Add hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .cert-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Add custom cursor styles
const cursorStyles = document.createElement('style');
cursorStyles.innerHTML = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
    }
    
    .custom-cursor.hover {
        width: 40px;
        height: 40px;
        background: rgba(0, 217, 255, 0.3);
    }
    
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
    }
    
    .image-placeholder-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: rgba(255, 255, 255, 0.2);
    }
    
    .animate-in {
        animation: animateIn 0.6s ease forwards;
    }
    
    @keyframes animateIn {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(cursorStyles);

// Console Easter Egg
const consoleStyles = [
    'background: linear-gradient(135deg, #00D9FF 0%, #FF006E 100%)',
    'color: white',
    'font-size: 20px',
    'padding: 10px 20px',
    'border-radius: 10px',
    'font-weight: bold'
].join(';');

console.log('%c🚀 Welcome to Aryadeep\'s Portfolio!', consoleStyles);
console.log('%cBuilt with passion and lots of ☕', 'color: #00D9FF; font-size: 14px;');
console.log('%c📧 Get in touch: aryadeepv21@gmail.com', 'color: #FF006E; font-size: 14px;');
console.log('%c🔗 Check out my GitHub: https://github.com/aryadeep02', 'color: #8338EC; font-size: 14px;');

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}

// Page Visibility API - Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause particle animation
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.move.enable = false;
        }
    } else {
        // Resume particle animation
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.move.enable = true;
        }
    }
});

// Smooth Page Transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
});

// Initialize everything when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    // Remove no-js class if present
    document.documentElement.classList.remove('no-js');
    
    // Log successful load
    console.log('Portfolio loaded successfully! 🎉');
});
