document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector("button");
    if (!button) return;

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((other) => {
        other.classList.remove("active");
        const otherButton = other.querySelector("button");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      } else {
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
});
