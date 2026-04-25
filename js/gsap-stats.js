window.addEventListener("load", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ===== STATS SECTION =====
  const statsSection = document.querySelector(".mxd-stats-lines");
  const leftCol = document.querySelector(".stats-left-col");
  const rightCol = document.querySelector(".stats-right-col");

  if (statsSection && leftCol && rightCol) {
    gsap.set(leftCol, { x: -100, opacity: 0 });
    gsap.set(rightCol, { x: 100, opacity: 0 });

    const statsTL = gsap.timeline({
      scrollTrigger: {
        trigger: statsSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    statsTL
      .to(leftCol, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        rightCol,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.2,
      );
  }

  // ===== NICHE CARDS =====
  const nicheSection = document.querySelector(".mxd-niche-cards");

  if (nicheSection) {
    const cardLeft = nicheSection.querySelector(
      ":scope > .container-fluid > .row > .col-12.col-xl-4.mxd-niche-cards__column",
    );
    const cardsWrapper = nicheSection.querySelector(
      ":scope > .container-fluid > .row > .col-12.col-xl-8.mxd-niche-cards__column",
    );
    const cardTop = nicheSection.querySelector(".niche-card-top");
    const cardRight = nicheSection.querySelector(".niche-card-right");
    const cardBottom = nicheSection.querySelector(".niche-card-bottom");
    const nicheCards = [cardLeft, cardTop, cardRight, cardBottom].filter(Boolean);
    const animatedNicheCards = nicheSection.querySelectorAll(".animate-card-2");

    if (nicheCards.length === 4) {
      ScrollTrigger.getAll().forEach(function (trigger) {
        if (trigger.trigger && nicheSection.contains(trigger.trigger)) {
          trigger.kill();
        }
      });

      gsap.set(nicheSection, { overflow: "hidden" });
      gsap.set(animatedNicheCards, { autoAlpha: 1, x: 0, y: 0 });
      animatedNicheCards.forEach(function (card) {
        card.classList.remove("animate-card-2");
      });

      if (cardsWrapper) {
        gsap.set(cardsWrapper, { autoAlpha: 1, x: 0, y: 0 });
      }

      gsap.set(nicheCards, { autoAlpha: 0, x: 0, y: 0 });

      const cardDefaults = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: nicheSection,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(cardLeft, { x: -140, autoAlpha: 0 }, cardDefaults, "-=0.2")
        .fromTo(cardTop, { y: 140, autoAlpha: 0 }, cardDefaults, "-=0.2")
        .fromTo(cardRight, { x: 140, autoAlpha: 0 }, cardDefaults, "-=0.2")
        .fromTo(cardBottom, { y: 140, autoAlpha: 0 }, cardDefaults, "-=0.2");
    }
  }
});
