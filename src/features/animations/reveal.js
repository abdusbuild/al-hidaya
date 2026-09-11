export function initRevealAnimations() {
  const targets = Array.from(document.querySelectorAll(".reveal"));

  if (!targets.length) return;

  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "150px 0px 150px 0px" }
  );

  targets.forEach((el) => observer.observe(el));

  // Fallback: catches elements the observer can miss during large/instant
  // scroll jumps (e.g. anchor links, fast scrollbar drags, or automated
  // scrolling) where an element never registers an intersection frame.
  let ticking = false;
  function sweepVisible() {
    ticking = false;
    targets.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(sweepVisible);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  sweepVisible();
}
