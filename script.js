// Main JavaScript functionality for the website

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // 2. Sticky Header & Menu Close on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Auto-close mobile menu on scroll if active
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // 3. Smooth Form Submission Handle (UI only)
    const form = document.getElementById('repairForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Simulate processing
            btn.textContent = 'Processing...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Request Sent!';
                btn.style.backgroundColor = 'var(--success)';
                btn.style.color = 'white';
                
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style = ''; // Reset inline styles
                }, 3000);
            }, 1500);
        });
    }
});
