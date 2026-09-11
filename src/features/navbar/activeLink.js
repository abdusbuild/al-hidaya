export function initActiveLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll("[data-nav], [data-nav-mobile]").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
      if (link.hasAttribute("data-nav-mobile")) {
        link.classList.add("bg-[#0B6E4F]/5", "text-[#0B6E4F]");
      }
    }
  });
}
