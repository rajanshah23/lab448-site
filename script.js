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

    // 3. Form Submission via Formspree Endpoint
    const form = document.getElementById('repairForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Set Loading state
            btn.textContent = 'Sending Inquiry...';
            btn.disabled = true;
            
            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.textContent = 'Request Sent!';
                    btn.style.backgroundColor = 'var(--success)';
                    btn.style.color = 'white';
                    form.reset();
                } else {
                    btn.textContent = 'Error Sending';
                    btn.style.backgroundColor = 'var(--error)';
                    btn.style.color = 'white';
                }
            } catch (error) {
                btn.textContent = 'Network Error';
                btn.style.backgroundColor = 'var(--error)';
                btn.style.color = 'white';
            } finally {
                // Reset button after 3 seconds
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style = ''; // Reset inline styles
                }, 3000);
            }
        });
    }
});
