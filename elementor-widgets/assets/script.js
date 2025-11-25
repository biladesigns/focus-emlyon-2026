/* FOCUS Elementor Widgets JavaScript */

(function($) {
    'use strict';

    // Particle Network Animation
    function initParticleNetwork() {
        const canvas = document.getElementById('focus-particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // FOCUS colors
        const colors = [
            'hsl(330, 87%, 52%)', // magenta
            'hsl(217, 100%, 50%)', // blue
            'hsl(25, 100%, 60%)', // orange
            'hsl(270, 80%, 50%)', // purple
        ];

        let particles = [];
        const mouse = { x: 0, y: 0 };
        const particleCount = 80;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function Particle() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        Particle.prototype.update = function() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const force = (150 - distance) / 150;
                this.vx += (dx / distance) * force * 0.05;
                this.vy += (dy / distance) * force * 0.05;
            }

            this.vx *= 0.99;
            this.vy *= 0.99;
        };

        Particle.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        };

        function init() {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(function(particle) {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        const opacity = (1 - distance / 120) * 0.5;
                        ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const opacity = (1 - distance / 150) * 0.8;
                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', function() {
            resizeCanvas();
            init();
        });

        window.addEventListener('mousemove', function(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        init();
        animate();
    }

    // Initialize on document ready
    $(document).ready(function() {
        initParticleNetwork();
    });

    // Smooth scroll for anchor links
    $(document).on('click', 'a[href^="#"]', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    animateOnScroll.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe all cards and sections
        document.querySelectorAll('.focus-service-card, .focus-benefit-card, .focus-realisation-card').forEach(el => {
            animateOnScroll.observe(el);
        });
    }

    // Video modal functionality
    $(document).on('click', '.focus-realisation-card', function() {
        var videoUrl = $(this).data('video-url');
        if (videoUrl) {
            window.open(videoUrl, '_blank');
        }
    });

    // Form validation enhancement
    $('.focus-contact-form form').on('submit', function(e) {
        var isValid = true;
        $(this).find('[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Veuillez remplir tous les champs requis.');
        }
    });

    // Add loading state to buttons
    $('.focus-btn').on('click', function() {
        if ($(this).is('[type="submit"]')) {
            $(this).addClass('is-loading');
        }
    });

    // Glitch effect trigger
    $('.focus-glitch').each(function() {
        var $this = $(this);
        var text = $this.data('text') || $this.text();
        $this.attr('data-text', text);
    });

})(jQuery);
