document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".about-slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 6000);

  const educationActivities = [
    {
      image: "./assets/education-2.png",
      alt: "Student Representative activity",
      text: "Served as a Student Representative in the Virtual Mobility Programme on Environment, Social, and Governance (ESG), collaborating with representatives from various foreign countries.",
    },
    {
      image: "./assets/education-3.png",
      alt: "Committee member activity",
      text: "Served as a Committee Member for the Informatics Department Orientation Program at Universitas Multimedia Nusantara (UMN), contributing to the coordination and execution of student orientation activities.",
    },
    {
      image: "./assets/education-4.png",
      alt: "Comparative study activity",
      text: "Participated in a comparative study with the BINUS Informatics Department as part of an Informatics student organization, focusing on the exchange of knowledge, ideas, and best practices between student organizations and academic departments.",
    },
    {
      image: "./assets/education-5.jpeg",
      alt: "Teaching assistant activity",
      text: "Served as a Teaching and Lab Assistant, supporting junior students in Algorithm and Data Structures and Web Programming classes.",
    },
    {
      image: "./assets/education-6.jpg",
      alt: "Student creativity project activity",
      text: "Participated in a Student Creativity Project in collaboration with lecturers and fellow students to develop and deploy the Magfin (Maggot Finance) application, aimed at streamlining and improving the efficiency of community waste management transactions in Sepatan Timur District.",
    },
    {
      image: "./assets/education-7.jpg",
      alt: "Graduation activity",
      text: "Celebrating graduation alongside my classmates after navigating two years of online learning because of covid and completing our final semester on campus, a milestone marked by perseverance, growth, and shared achievement.",
    },
  ];

  const activityImage = document.getElementById("edu-activity-image");
  const activityText = document.getElementById("edu-activity-text");
  const activityPrev = document.querySelector(".edu-activity-prev");
  const activityNext = document.querySelector(".edu-activity-next");

  if (activityImage && activityText && activityPrev && activityNext) {
    let activityIndex = 0;
    const activityOverlay = document.getElementById("edu-activity-overlay");
    const activityOverlayImage = document.getElementById(
      "edu-activity-overlay-image"
    );
    const activityOverlayClose = activityOverlay?.querySelector(".overlay-close");
    const activityOverlayBackdrop =
      activityOverlay?.querySelector(".overlay-backdrop");

    const renderActivity = (nextIndex) => {
      const activity = educationActivities[nextIndex];
      activityImage.src = activity.image;
      activityImage.alt = activity.alt;
      activityText.textContent = activity.text;
    };

    activityPrev.addEventListener("click", () => {
      activityIndex =
        (activityIndex - 1 + educationActivities.length) %
        educationActivities.length;
      renderActivity(activityIndex);
    });

    activityNext.addEventListener("click", () => {
      activityIndex = (activityIndex + 1) % educationActivities.length;
      renderActivity(activityIndex);
    });

    if (activityOverlay && activityOverlayImage) {
      activityImage.addEventListener("click", () => {
        activityOverlayImage.src = activityImage.src;
        activityOverlayImage.alt = activityImage.alt;
        activityOverlay.hidden = false;
        document.body.style.overflow = "hidden";
      });

      const closeActivityOverlay = () => {
        activityOverlay.hidden = true;
        document.body.style.overflow = "";
      };

      activityOverlayClose?.addEventListener("click", closeActivityOverlay);
      activityOverlayBackdrop?.addEventListener("click", closeActivityOverlay);

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !activityOverlay.hidden) {
          closeActivityOverlay();
        }
      });
    }

    renderActivity(activityIndex);
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
const certAnimatedEls = [certImage, certTitle, certText, certIssuer, certDate];

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
  const cert = certificates[index];
  certImage.src = cert.image;
  certImage.alt = cert.alt;
  certTitle.textContent = cert.title;
  certText.textContent = cert.text;
  certDate.textContent = cert.date;
  certIssuer.textContent = cert.issuer;
}

renderCertificate(currentIndex);
certAnimatedEls.forEach((el) => el.classList.add("cert-active"));

btnLeft.addEventListener("click", () => {
  const nextIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  animateCertificateSwitch("prev", nextIndex);
  currentIndex = nextIndex;
})

btnRight.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % certificates.length;
  animateCertificateSwitch("next", nextIndex);
  currentIndex = nextIndex;
});




function animateCertificateSwitch(direction, nextindex) {
  const exitClass = direction === "next" ? "cert-exit-left" : "cert-exit-right";
  const enterClass = direction === "next" ? "cert-enter-right" : "cert-enter-left";

  certAnimatedEls.forEach((el) => {
    el.classList.remove("cert-active", "cert-enter-left", "cert-enter-right");
    el.classList.add(exitClass);
  });
  
  
  setTimeout(() => {
    renderCertificate(nextindex);

    certAnimatedEls.forEach((el) => {
      el.classList.remove("cert-exit-left", "cert-exit-right");
      el.classList.add(enterClass);
    });

    requestAnimationFrame(() => {
      certAnimatedEls.forEach((el) => {
        el.classList.remove("cert-enter-left", "cert-enter-right");
        el.classList.add("cert-active")
      });
    });
  }, 250);
}

