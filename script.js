document.addEventListener("DOMContentLoaded", () => {
  /* FAQ abre e fecha */
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector("button");
    if (!button) return;

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((other) => {
        other.classList.remove("active");

        const otherButton = other.querySelector("button");
        if (otherButton) {
          otherButton.setAttribute("aria-expanded", "false");
        }
      });

      if (!isActive) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      } else {
        button.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* Carrossel automático + arrastar no mobile */
  const carousel = document.querySelector(".cards-window");
  const track = document.querySelector(".activity-track");

  if (!carousel || !track) return;

  const getCards = () => Array.from(track.querySelectorAll(".activity-card"));

  let autoTimer = null;
  let resumeTimer = null;

  function getClosestCardIndex() {
    const cards = getCards();
    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(carouselCenter - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function goToCard(index) {
    const cards = getCards();
    if (!cards.length) return;

    const card = cards[index];

    const left =
      card.offsetLeft - carousel.clientWidth / 2 + card.offsetWidth / 2;

    carousel.scrollTo({
      left,
      behavior: "smooth",
    });
  }

  function nextCard() {
    const cards = getCards();
    if (!cards.length) return;

    const currentIndex = getClosestCardIndex();
    const nextIndex = currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;

    goToCard(nextIndex);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(nextCard, 2400);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resumeAuto() {
    clearTimeout(resumeTimer);

    resumeTimer = setTimeout(() => {
      startAuto();
    }, 2200);
  }

  carousel.addEventListener("touchstart", stopAuto, { passive: true });
  carousel.addEventListener("touchend", resumeAuto, { passive: true });

  carousel.addEventListener("pointerdown", stopAuto);
  carousel.addEventListener("pointerup", resumeAuto);
  carousel.addEventListener("pointercancel", resumeAuto);

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);

  startAuto();
});
