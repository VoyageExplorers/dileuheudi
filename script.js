document.addEventListener("DOMContentLoaded", function () {
  const destinations = document.querySelectorAll(".destination");
  const container = document.querySelector(".destinations-container");

  destinations.forEach((destination) => {
    destination.addEventListener("mouseover", function () {
      const bgImage = destination.getAttribute("data-bg");
      container.style.backgroundImage = `url('${bgImage}')`;
    });
  });
});

window.addEventListener("scroll", function () {
  const footer = document.querySelector("footer");
  const socialLinks = document.querySelector(".social-links");
  const socialLinksFixed = document.querySelector(".social-links-fixed");

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top <= windowHeight) {
    socialLinks.style.opacity = "0";
    socialLinksFixed.style.display = "flex";
  } else {
    socialLinks.style.opacity = "1";
    socialLinksFixed.style.display = "none";
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(phone)) {
      alert("Số điện thoại phải có 10 chữ số.");
      event.preventDefault();
    }

    if (!emailPattern.test(email)) {
      alert("Email phải theo định dạng abc@gmail.com");
      event.preventDefault();
    }
  });
