document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".about-slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 6000);


  const educationSlides = document.querySelectorAll(".education-slide");
  if (educationSlides.length > 0) {
    let educationIndex = 0;

    educationSlides[0].classList.add("active");

    setInterval(() => {
      educationSlides[educationIndex].classList.remove("active");
      educationIndex = (educationIndex + 1) % educationSlides.length;
      educationSlides[educationIndex].classList.add("active");
    }, 6000);
  }
});



document.querySelectorAll('.accordion-toggle').forEach((btn) => {
  btn.addEventListener('click', ()=> {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', String(!isOpen))
    panel.hidden = isOpen;

    const icon = btn.querySelector('.accordion-icon');
    icon.textContent = isOpen ? '+' : '-';
  });
});