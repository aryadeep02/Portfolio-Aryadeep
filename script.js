// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
    }, 1000);
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
            speed: 6,
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
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Typing Effect
const subtitleText = "Computer Science Student | AI/ML Enthusiast | Full-Stack Developer";
const typingElement = document.querySelector('.typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < subtitleText.length) {
        typingElement.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing after loader
setTimeout(typeText, 1500);

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

// Simple AOS Implementation
const aosElements = document.querySelectorAll('[data-aos]');
const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            // Handle animation delays
            const delay = entry.target.getAttribute('data-aos-delay');
            if (delay) {
                entry.target.style.transitionDelay = delay + 'ms';
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

aosElements.forEach(el => aosObserver.observe(el));

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Move floating icons slightly based on mouse position
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    floatingIcons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (x - 0.5) * speed * 20;
        const yMove = (y - 0.5) * speed * 20;
        icon.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Counter Animation for Stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }, 30);
}

// Observe stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => statObserver.observe(stat));

// Add glitch effect on hover for name
const glitchElement = document.querySelector('.glitch');
glitchElement.addEventListener('mouseenter', () => {
    glitchElement.style.animation = 'glitch 0.5s infinite';
});

glitchElement.addEventListener('mouseleave', () => {
    glitchElement.style.animation = 'glitch 2s infinite';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations to elements
    const animateElements = document.querySelectorAll('.tag, .stat-card, .skill-category, .project-card');
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

// Console Easter Egg
console.log('%c Welcome to Aryadeep\'s Portfolio! ', 'background: linear-gradient(135deg, #00D9FF 0%, #FF006E 100%); color: white; font-size: 20px; padding: 10px;');
console.log('%c Looking for the source code? Check out my GitHub! ', 'color: #00D9FF; font-size: 14px;');