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

  /* Carrossel automático + arrastar com dedo no mobile */
  const carousel = document.querySelector(".cards-window");
  const track = document.querySelector(".activity-track");

  if (carousel && track) {
    if (!track.dataset.cloned) {
      track.innerHTML += track.innerHTML;
      track.dataset.cloned = "true";
    }

    let paused = false;
    let pauseTimer = null;
    const speed = 0.45;

    function getLoopPoint() {
      return track.scrollWidth / 2;
    }

    function autoMove() {
      if (!paused) {
        carousel.scrollLeft += speed;

        if (carousel.scrollLeft >= getLoopPoint()) {
          carousel.scrollLeft -= getLoopPoint();
        }
      }

      requestAnimationFrame(autoMove);
    }

    function pauseTemporarily() {
      paused = true;
      clearTimeout(pauseTimer);

      pauseTimer = setTimeout(() => {
        paused = false;
      }, 1800);
    }

    carousel.addEventListener("pointerdown", () => {
      paused = true;
    });

    carousel.addEventListener("pointerup", pauseTemporarily);
    carousel.addEventListener("pointercancel", pauseTemporarily);
    carousel.addEventListener("touchend", pauseTemporarily);

    carousel.addEventListener("mouseenter", () => {
      paused = true;
    });

    carousel.addEventListener("mouseleave", () => {
      paused = false;
    });

    carousel.addEventListener(
      "scroll",
      () => {
        if (carousel.scrollLeft >= getLoopPoint()) {
          carousel.scrollLeft -= getLoopPoint();
        }
      },
      { passive: true }
    );

    autoMove();
  }
});
