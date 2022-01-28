// Get the modal
var modal = document.getElementById("myModal");
// Get an HTMLCollection of photos
var photos = document.getElementsByClassName("photo");

//Loop through each photo element
Array.prototype.forEach.call(photos, function(element) {
  element.onclick = function(){
    var modalImg = document.getElementById("img01");
    var photoStyle = window.getComputedStyle(element, false);
    modal.style.display = "block";
    //set modal image src to the background image url of the photo clicked
    modalImg.src = photoStyle.backgroundImage.slice(4, -1).replace(/"/g, "").replace('thumb', 'full');
  }
});

// Close modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//Owl Carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: false,
    loop: true,
    margin: 10,
    responsive:{
      0:{
          items:1,
      },
      740:{
          items:2,
      },
      1100:{
          items:3,
      }
    }
  });
});

//Menu
(function() {

  let hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click',
        () => { this.toggle(); });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();

}());
