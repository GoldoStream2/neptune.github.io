import { gsap } from 'gsap';
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger.js';
import * as THREE from 'three';
import { config } from './config.js';

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const header = document.querySelector('header');
const faqItems = document.querySelectorAll('.faq-item');
const copyButtons = document.querySelectorAll('.copy-btn');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const discordButtons = document.querySelectorAll('.discord-btn, .cta-button');
const executeButton = document.querySelector('.execute-btn');
const clearButton = document.querySelector('.clear-btn');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.style.padding = '1rem 5%';
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.classList.remove('scrolled');
        header.style.padding = '1.5rem 5%';
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
    }
});

// Scroll animations for sections
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTitle = section.querySelector('h2');
        const sectionContent = section.querySelector('p');
        const cards = section.querySelectorAll('.feature-card, .script-card, .pricing-card, .testimonial-card');
        
        if (sectionTitle && sectionContent) {
            gsap.from(sectionTitle, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
            
            gsap.from(sectionContent, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });
        }
        
        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4,
                ease: 'power3.out'
            });
        }
    });
};

// Execute script animation
if (executeButton) {
    executeButton.addEventListener('click', () => {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = '<i class="fas fa-check-circle"></i> Script exécuté avec succès!';
        document.body.appendChild(notification);
        
        gsap.fromTo(notification, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        
        gsap.to(notification, {
            y: -20, 
            opacity: 0, 
            delay: 2, 
            duration: 0.5, 
            ease: 'power2.in',
            onComplete: () => notification.remove()
        });
    });
}

// Clear code animation
if (clearButton) {
    clearButton.addEventListener('click', () => {
        const codeElement = document.querySelector('.lua-code');
        
        gsap.to(codeElement, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                codeElement.innerHTML = '-- Neptune Scripts Premium Executor\n-- Code effacé';
                gsap.to(codeElement, { opacity: 1, duration: 0.2 });
            }
        });
    });
}

// Copy script functionality
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const scriptCode = button.closest('.script-card').querySelector('.script-code').textContent;
        navigator.clipboard.writeText(scriptCode);
        
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copié!';
        button.style.backgroundColor = 'var(--success)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    });
});

// FAQ accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
            gsap.to(faqItem.querySelector('.faq-answer'), {
                maxHeight: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
            gsap.fromTo(answer, 
                { maxHeight: 0 }, 
                { maxHeight: answer.scrollHeight, duration: 0.5, ease: 'power2.out' }
            );
        }
    });
});

// Testimonials slider
let currentSlide = 0;

const showSlide = (index) => {
    gsap.to(testimonialCards, {
        x: -index * 100 + '%',
        duration: 0.5,
        ease: 'power2.inOut'
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
};

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(currentSlide);
    });
    
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Discord button click handlers
discordButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', () => {
            window.open(config.discordInviteLink, '_blank');
        });
    }
});

// Hero section 3D background effect with Three.js
const initThreeBackground = () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    heroSection.appendChild(renderer.domElement);
    
    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00c3ff,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.x += 0.002;
        particlesMesh.rotation.y += 0.001;
        
        particlesMesh.rotation.x += mouseY * 0.001;
        particlesMesh.rotation.y += mouseX * 0.001;
        
        renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Enhance card visibility
function initCardStyles() {
    // Add card highlight effects for better visibility
    const cards = document.querySelectorAll('.feature-card, .script-card, .testimonial-card, .pricing-card');
    
    cards.forEach(card => {
        // Add subtle glow effect
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
        
        // Enhance border visibility
        card.style.border = '1px solid rgba(0, 195, 255, 0.3)';
        
        // Make backgrounds more opaque
        card.style.backgroundColor = 'rgba(42, 42, 42, 0.85)';
        
        // Ensure text is visible
        const textElements = card.querySelectorAll('p, h3, li');
        textElements.forEach(el => {
            el.style.color = '#f5f5f5';
            el.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.5)';
        });
    });
    
    // Special handling for pricing features
    const pricingFeatures = document.querySelectorAll('.pricing-features li i');
    pricingFeatures.forEach(icon => {
        if (icon.parentElement.classList.contains('disabled')) {
            icon.style.color = 'var(--danger)';
            icon.style.textShadow = '0 0 5px rgba(255, 23, 68, 0.5)';
        } else {
            icon.style.color = 'var(--success)';
            icon.style.textShadow = '0 0 5px rgba(0, 230, 118, 0.5)';
        }
    });
    
    // Make premium tags more visible
    const premiumTags = document.querySelectorAll('.tag.premium');
    premiumTags.forEach(tag => {
        tag.style.backgroundColor = 'var(--primary)';
        tag.style.color = '#000';
        tag.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSections();
    initThreeBackground();
    initCardStyles();
    
    // Make sure hero content is properly centered and visible
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.set(heroContent, { 
            xPercent: -50, 
            yPercent: -50
        });
        
        // Ensure content visibility
        gsap.to(heroContent, {
            autoAlpha: 1,
            duration: 0.5
        });
    }
    
    // Ensure CTA button visibility with a delay
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        gsap.to(ctaButton, {
            autoAlpha: 1,
            duration: 0.5,
            delay: 0.2
        });
    }
    
    // Animate hero section elements
    gsap.from('.hero-content h1', { y: 50, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from('.hero-content p', { y: 30, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.cta-button', { y: 20, opacity: 0, duration: 1, delay: 0.7 });
    
    // Add floating animation to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        gsap.to(card, {
            y: '-=10',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.2
        });
    });
});

// Code syntax highlighting effect
const highlightSyntax = () => {
    const codeElement = document.querySelector('.lua-code');
    if (!codeElement) return;
    
    const code = codeElement.textContent;
    
    const highlightedCode = code
        .replace(/--(.+)/g, '<span class="comment">--$1</span>')
        .replace(/(local|function|end|if|then|else|for|do|while|repeat|until|return|break|in)/g, '<span class="keyword">$1</span>')
        .replace(/"(.+?)"/g, '<span class="string">"$1"</span>')
        .replace(/'(.+?)'/g, '<span class="string">\'$1\'</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        .replace(/\b(print|require|game|GetService|Players|LocalPlayer)\b/g, '<span class="function">$1</span>');
    
    codeElement.innerHTML = highlightedCode;
};

highlightSyntax();