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

document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;

    const icon = btn.querySelector(".accordion-icon");
    icon.textContent = isOpen ? "+" : "-";
  });
});

const projectGalleries = document.querySelectorAll("[data-gallery]");
projectGalleries.forEach((gallery) => {
  const hero = gallery.querySelector(".project-hero");
  const thumbs = gallery.querySelectorAll(".project-thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const nextSrc = thumb.getAttribute("data-full");
      const nextAlt = thumb.getAttribute("data-alt") || hero.alt;

      if (nextSrc) {
        hero.src = nextSrc;
        hero.alt = nextAlt;
      }

      thumbs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      thumb.classList.add("is-active");
      thumb.setAttribute("aria-selected", "true");
    });
  });

  hero.addEventListener("click", () => {
    const overlay = gallery.querySelector(".overlay");
    const overlayImage = gallery.querySelector(".overlay-image");

    overlayImage.src = hero.src;
    overlayImage.alt = hero.alt;

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  });

  const overlay = gallery.querySelector(".overlay");
  const closeBtn = gallery.querySelector(".overlay-close");
  const backdrop = gallery.querySelector(".overlay-backdrop");

  const closeOverlay = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeOverlay);
  backdrop.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });
});






const certificates = [
  {
    image: "./assets/certificates/cumlaude-certificate.png",
    alt: "Cumlaude certificate",
    title: "Cumlaude Distinction",
    text: "Graduated with GPA 3.94/4.00 from Multimedia Nusantara University.",
    issuer: "Issuer: UMN",
    date: "Issued: December 2024",
  },
  {
    image: "./assets/certificates/AI-LinkedIn.png",
    alt: "LinkedIn AI certificate",
    title: "Building AI Products: Prototyping Essentials Professional Certificate by LinkedIn Learning",
    text: "This Course consist of 5 components: AI Product Ideation: Principles and Practical Applications, Responsible AI Framework for Your Enterprise AI Product, AI Data Strategy: Data Procurement and Storage, AI Product Development: Technical Feasibility and Prototyping, AI Product Development: Secure by Design",
    issuer: "Issuer: LinkedIN",
    date: "Issued: February 2026",
  },
  {
    image: "./assets/certificates/certiport-database.png",
    alt: "Certiport certificate",
    title: "IT Specialist - Databases",
    text: "IT Specialist - Databases issued by Certiport - A Pearson VUE Business",
    issuer: "Issuer: Certiport - A Pearson VUE Business",
    date: "Issued: February 2024",
  },
  {
    image: "./assets/certificates/docker.png",
    alt: "Docker Foundations Professional Certificate",
    title: "Docker Foundations Professional Certificate",
    text: "Docker Foundations Professional Certificate issued by Docker & LinkedIn",
    issuer: "Issuer: Docker & LinkedIn",
    date: "Issued: Jan 2024",
  },
  {
    image: "./assets/certificates/TOEIC.png",
    alt: "TOEIC Certificate by ITC Indonesia",
    title: "TOEIC Certificate",
    text: "TOEIC Certificate by ITC Indonesia",
    issuer: "Issuer: UMN & ITC Indonesia",
    date: "Issued: Juny 2024",
  },
  {
    image: "./assets/certificates/WebProgrammingLabAssistant.png",
    alt: "Web Programming Assistant Lab",
    title: "Web Programming Assistant Lab",
    text: "Certificate as a lab assistant for the web programming class, assisting in teaching junior students.",
    issuer: "Issuer: UMN",
    date: "Issued: December 2024",
  },
  {
    image: "./assets/certificates/Algorithm&DataStructureLabAssistant.png",
    alt: "Algorithm AND Data Structure Lab Assistant Certificate",
    title: "Algorithm And Data Structure Lab Assistant Certificate",
    text: "Certificate as a lab assistant for the algorithm & data structure class, assisting in teaching junior students.",
    issuer: "Issuer: UMN",
    date: "Issued: August 2022",
  },
];


let currentIndex = 0;

const cert = document.getElementById("certificate");
const certImage = document.getElementById("cert-image");
const certTitle = document.getElementById("cert-title");
const certText = document.getElementById("cert-text");
const certIssuer = document.getElementById("cert-issuer");
const certDate = document.getElementById("cert-date");
const btnLeft = document.querySelector(".cert-left");
const btnRight = document.querySelector(".cert-right");


 const overlay = cert.querySelector(".overlay");
 const overlayImage = cert.querySelector(".overlay-image");
 const closeBtn = cert.querySelector(".overlay-close");
const backdrop = cert.querySelector(".overlay-backdrop");

  certImage.addEventListener("click", () => {
    overlayImage.src = certImage.src;
    overlayImage.alt = certImage.alt;

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  });

 

  const closeOverlay = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeOverlay);
  backdrop.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });

function renderCertificate(index) {
  console.log("INI RENDER CERTIFICATE")
  const cert = certificates[index];
  certImage.src = cert.image;
  certImage.alt = cert.alt;
  certTitle.textContent = cert.title;
  certText.textContent = cert.text;
  certDate.textContent = cert.date;
  certIssuer.textContent = cert.issuer;


}

btnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length
  renderCertificate(currentIndex);
})

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % certificates.length;
  renderCertificate(currentIndex);
});

renderCertificate(currentIndex);



