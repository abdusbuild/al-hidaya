export function initAccordion(container) {
  if (!container) return;

  const items = container.querySelectorAll("[data-faq-item]");

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      items.forEach((other) => {
        if (other === item) return;
        other.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
        const otherPanel = other.querySelector(".accordion-panel");
        if (otherPanel) otherPanel.style.maxHeight = "0px";
      });

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? "0px" : `${panel.scrollHeight}px`;
    });
  });
}
