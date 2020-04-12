var scroll = new SmoothScroll('a[href*="#"]', {
  offset:95,
  speed:900
});
$(document).ready(function () {

    $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
      });
    $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
    });

    $('.site-main .skill-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

  });

  window.sr = new ScrollReveal();
  sr.reveal('.about-image', {
    delay: 750,
    duration: 1000,
    distance: '600px',
    origin: 'left'
  });
  sr.reveal('.about-title', {
    delay: 1000,
    duration: 3000,
    distance: '600px',
    origin: 'right'
  });
  sr.reveal('.dcv', {
    delay: 2500,
    duration: 4000,
    origin: 'right'
  });

  sr.reveal('.skill-title', {
    delay: 3500,
    duration: 3000,
    distance: '600px',
    origin: 'left'
  });
  sr.reveal('.carousel', {
    delay: 4700,
    duration: 4000,
    distance: '600px',
    origin: 'right'
  });
