export function initNavbarScroll() {
  const navbar = document.getElementById("siteNavbar");
  if (!navbar) return;

  const SCROLL_THRESHOLD = 60;

  function applyState() {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;

    navbar.classList.toggle("bg-white/95", scrolled);
    navbar.classList.toggle("backdrop-blur-md", scrolled);
    navbar.classList.toggle("shadow-[0_4px_20px_rgba(0,0,0,0.06)]", scrolled);
    navbar.classList.toggle("navbar-light", scrolled);
    navbar.classList.toggle("navbar-dark", !scrolled);
  }

  applyState();
  window.addEventListener("scroll", applyState, { passive: true });
}
