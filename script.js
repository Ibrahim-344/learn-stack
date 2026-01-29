console.log('Happy developing ✨')

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Button click handler
    const clickMeButton = document.getElementById('clickMe');
    if (clickMeButton) {
        clickMeButton.addEventListener('click', function() {
            alert('Hello! Thanks for clicking the button! 🎉');
            this.textContent = 'Clicked!';
            setTimeout(() => {
                this.textContent = 'Click Me!';
            }, 2000);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Add active class temporarily
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 1000);
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display success message
            alert(`Thank you, ${name}! Your message has been received.\n\nEmail: ${email}\nMessage: ${message}`);

            // Reset form
            this.reset();

            // Add visual feedback
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sent! ✓';
            submitButton.style.backgroundColor = '#28a745';

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
    }

    // Add hover effect to feature list items
    const featureItems = document.querySelectorAll('#features ul li');
    featureItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });

        // Add icons to features with animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add input validation feedback
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#dc3545';
            } else if (this.value.trim() !== '') {
                this.style.borderColor = '#28a745';
            }
        });

        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#28a745';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });

    console.log('All interactive features loaded successfully! 🚀');
});

