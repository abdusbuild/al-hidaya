export function initMobileDrawer() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("mobileCloseBtn");
  const drawer = document.getElementById("mobileDrawer");
  const overlay = document.getElementById("mobileOverlay");
  const panel = document.getElementById("mobilePanel");

  if (!openBtn || !drawer || !panel) return;

  function openDrawer() {
    drawer.classList.remove("hidden");
    drawer.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
      panel.classList.remove("translate-x-full");
    });
    document.body.classList.add("overflow-hidden");
  }

  function closeDrawer() {
    panel.classList.add("translate-x-full");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");
    window.setTimeout(() => drawer.classList.add("hidden"), 300);
  }

  openBtn.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);

  drawer.querySelectorAll("[data-nav-mobile]").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}
