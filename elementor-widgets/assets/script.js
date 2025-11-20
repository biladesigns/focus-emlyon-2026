/* FOCUS Elementor Widgets JavaScript */

(function($) {
    'use strict';

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

    // Parallax effect for orbs
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        $('.focus-orb').each(function() {
            var speed = $(this).data('speed') || 0.5;
            $(this).css('transform', 'translateY(' + (scrolled * speed) + 'px)');
        });
    });

    // Video modal functionality
    $(document).on('click', '.focus-realisation-card', function() {
        var videoUrl = $(this).data('video-url');
        if (videoUrl) {
            // Open video in modal or new window
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
