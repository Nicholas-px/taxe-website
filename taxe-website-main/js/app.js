tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          raleway: ['Raleway', 'sans-serif'],
        },
        colors: {
          mc: {
            blue: '#0ea5e9',
            green: '#0b0234',
            bluebg: '#b4cae0',
            lightgrey: '#e5e4e4',
            greybg: '#f5f5f5',   
          },
        },
      },
    }
  }

$(document).ready(function(){
    $('#mobile-menu-button').click(function(){
        $('#mobile-menu').toggleClass('hidden');
    });
});

// <!-- Initialize Carousels -->

    $(document).ready(function(){
        // Mobile Menu Toggle
        $('#mobile-menu-button').click(function(){
            $('#mobile-menu').toggleClass('hidden');
        });

        // Initialize Brands Carousel
        $('.brands-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            autoplaySpeed: 1500,
            responsive:{
                0: {
                    items: 1
                },
                640: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });

        // Custom Navigation
        $('.brands-prev').click(function() {
            $('.brands-carousel').trigger('prev.owl.carousel', [1500]);
        });
        $('.brands-next').click(function() {
            $('.brands-carousel').trigger('next.owl.carousel', [1500]);
        });
    });

// Counter Animation Function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // Update every 16ms (60fps)
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        start += increment;
        element.textContent = Math.floor(Math.min(start, target));

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// Initialize Counter Animation on Scroll
$(document).ready(function(){
    // ... existing ready function code ...

    // Counter Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter-value');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
});
