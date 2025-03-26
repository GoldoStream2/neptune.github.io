document.addEventListener("DOMContentLoaded", () => {
    // Fix card visibility issues by ensuring proper styling
    function enhanceCardVisibility() {
        // Target all card types that had visibility issues
        const allCards = document.querySelectorAll('.feature-card, .script-card, .testimonial-card, .pricing-card');
        
        allCards.forEach(card => {
            // Force display to be visible with !important
            card.style.setProperty('display', 'block', 'important');
            card.style.setProperty('visibility', 'visible', 'important');
            card.style.setProperty('opacity', '1', 'important');
            
            // Enhance background contrast and borders
            card.style.setProperty('background-color', 'rgba(42, 42, 42, 0.95)', 'important');
            card.style.setProperty('border', '1px solid rgba(0, 195, 255, 0.5)', 'important');
            card.style.setProperty('box-shadow', '0 4px 15px rgba(0, 0, 0, 0.8)', 'important');
            
            // Fix text visibility
            const textElements = card.querySelectorAll('h3, p, li');
            textElements.forEach(el => {
                el.style.setProperty('color', '#ffffff', 'important');
                el.style.setProperty('text-shadow', '0 1px 2px rgba(0, 0, 0, 0.7)', 'important');
                el.style.setProperty('visibility', 'visible', 'important');
                el.style.setProperty('opacity', '1', 'important');
            });
        });
        
        // Special handling for feature cards
        const featureIcons = document.querySelectorAll('.feature-icon');
        featureIcons.forEach(icon => {
            icon.style.setProperty('border', '2px solid var(--primary)', 'important');
            icon.style.setProperty('box-shadow', '0 0 15px rgba(0, 195, 255, 0.6)', 'important');
            icon.style.setProperty('visibility', 'visible', 'important');
            icon.style.setProperty('opacity', '1', 'important');
        });
        
        // Fix tags visibility
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.style.setProperty('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.5)', 'important');
            tag.style.setProperty('visibility', 'visible', 'important');
            tag.style.setProperty('opacity', '1', 'important');
            
            if (tag.classList.contains('premium')) {
                tag.style.setProperty('background-color', '#00c3ff', 'important');
                tag.style.setProperty('color', '#000', 'important');
            } else if (tag.classList.contains('free')) {
                tag.style.setProperty('background-color', '#00e676', 'important');
                tag.style.setProperty('color', '#000', 'important');
            }
        });
    }
    
    // Fix hero content centering and visibility
    function fixHeroContent() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            // Force proper positioning and centering
            heroContent.style.setProperty('position', 'absolute', 'important');
            heroContent.style.setProperty('left', '50%', 'important');
            heroContent.style.setProperty('top', '50%', 'important');
            heroContent.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
            heroContent.style.setProperty('width', '90%', 'important');
            heroContent.style.setProperty('max-width', '800px', 'important');
            heroContent.style.setProperty('text-align', 'center', 'important');
            
            // Improve background and visibility
            heroContent.style.setProperty('background-color', 'rgba(18, 18, 18, 0.7)', 'important');
            heroContent.style.setProperty('border-radius', '15px', 'important');
            heroContent.style.setProperty('backdrop-filter', 'blur(10px)', 'important');
            heroContent.style.setProperty('border', '1px solid rgba(0, 195, 255, 0.3)', 'important');
            heroContent.style.setProperty('padding', '3rem', 'important');
            heroContent.style.setProperty('z-index', '10', 'important');
            heroContent.style.setProperty('visibility', 'visible', 'important');
            heroContent.style.setProperty('opacity', '1', 'important');
            
            // Make sure CTA button and text are visible
            const ctaButton = heroContent.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.style.setProperty('opacity', '1', 'important');
                ctaButton.style.setProperty('visibility', 'visible', 'important');
                ctaButton.style.setProperty('display', 'inline-block', 'important');
                ctaButton.style.setProperty('background', 'linear-gradient(90deg, var(--primary), var(--secondary))', 'important');
                ctaButton.style.setProperty('color', 'white', 'important');
                ctaButton.style.setProperty('box-shadow', '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 195, 255, 0.7)', 'important');
            }
            
            const heroText = heroContent.querySelector('h1');
            if (heroText) {
                heroText.style.setProperty('visibility', 'visible', 'important');
                heroText.style.setProperty('opacity', '1', 'important');
                heroText.style.setProperty('text-align', 'center', 'important');
            }
            
            const heroParagraph = heroContent.querySelector('p');
            if (heroParagraph) {
                heroParagraph.style.setProperty('visibility', 'visible', 'important');
                heroParagraph.style.setProperty('opacity', '1', 'important');
                heroParagraph.style.setProperty('text-align', 'center', 'important');
            }
        }
    }
    
    // Force styles on sections
    function fixSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.setProperty('visibility', 'visible', 'important');
            section.style.setProperty('opacity', '1', 'important');
            
            // Fix section headers
            const sectionHeader = section.querySelector('.section-header');
            if (sectionHeader) {
                sectionHeader.style.setProperty('visibility', 'visible', 'important');
                sectionHeader.style.setProperty('opacity', '1', 'important');
                sectionHeader.style.setProperty('text-align', 'center', 'important');
            }
        });
    }
    
    // Call all fixes immediately to ensure visibility
    enhanceCardVisibility();
    fixHeroContent();
    fixSections();
    
    // Re-apply fixes after a short delay to catch dynamic content
    setTimeout(() => {
        enhanceCardVisibility();
        fixHeroContent();
        fixSections();
    }, 500);
    
    // Re-apply fixes if window is resized
    window.addEventListener('resize', () => {
        enhanceCardVisibility();
        fixHeroContent();
        fixSections();
    });
    
    // Re-apply fixes after all content is loaded
    window.addEventListener('load', () => {
        enhanceCardVisibility();
        fixHeroContent();
        fixSections();
    });
});