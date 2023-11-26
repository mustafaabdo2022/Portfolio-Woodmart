// Initialize Swiper 
 
const swiper = new Swiper('.swiper', {
    // Optional parameters
  
      loop: true,
  
      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerView: 3.5,
      centeredSlides: false,
  });


  var nav = document.querySelector('header'); // Identify target

  window.addEventListener('scroll', function(event) { // To listen for event
      event.preventDefault();
  
      if (window.scrollY <= 80) { // Just an example
          nav.style.backgroundColor = 'transparent'; // or default color
      } else {
          nav.style.backgroundColor = '#212121';
      }
  });



