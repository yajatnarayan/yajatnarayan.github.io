const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");

const toggleNav = () => {
  if (!nav) return;
  nav.classList.toggle("nav--open");
  toggle?.setAttribute("aria-expanded", nav.classList.contains("nav--open"));
};

toggle?.addEventListener("click", toggleNav);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 900 && nav?.classList.contains("nav--open")) {
      toggleNav();
    }
  });
});

const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const active = document.querySelector(`.nav__link[href="#${id}"]`);
      if (entry.isIntersecting) {
        active?.classList.add("is-active");
      } else {
        active?.classList.remove("is-active");
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));
