const AUTO_ROTATE_MS = 6000;

export function initHeroSlider() {
  const hero = document.getElementById("hero");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll("[data-slide]"));
  const indicators = Array.from(hero.querySelectorAll("[data-indicator]"));

  if (slides.length <= 1) return;

  let activeIndex = 0;
  let timer = null;

  function goTo(index) {
    slides[activeIndex]?.classList.remove("opacity-100", "z-20");
    slides[activeIndex]?.classList.add("opacity-0", "z-10");

    indicators[activeIndex]?.classList.remove("w-8", "bg-white");
    indicators[activeIndex]?.classList.add("w-2", "bg-white/40");

    activeIndex = index;

    slides[activeIndex]?.classList.add("opacity-100", "z-20");
    slides[activeIndex]?.classList.remove("opacity-0", "z-10");

    indicators[activeIndex]?.classList.add("w-8", "bg-white");
    indicators[activeIndex]?.classList.remove("w-2", "bg-white/40");
  }

  function next() {
    goTo((activeIndex + 1) % slides.length);
  }

  function startAutoRotate() {
    stopAutoRotate();
    timer = window.setInterval(next, AUTO_ROTATE_MS);
  }

  function stopAutoRotate() {
    if (timer) window.clearInterval(timer);
  }

  indicators.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.indicator);
      goTo(index);
      startAutoRotate();
    });
  });

  hero.addEventListener("mouseenter", stopAutoRotate);
  hero.addEventListener("mouseleave", startAutoRotate);

  startAutoRotate();
}
