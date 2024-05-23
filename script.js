// Add event listeners to navigation links
document.querySelectorAll('.ul-nav li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'mooth' });
  });
});

// Add event listener to contact form submit button
document.querySelector('#contact form input[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('#contact form'));
  // Send form data to server or perform other actions
  console.log(formData);
});

// Add event listener to project section "See More" button
document.querySelector('.button-project button').addEventListener('click', () => {
  // Perform action when "See More" button is clicked
  console.log('See More button clicked');
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


