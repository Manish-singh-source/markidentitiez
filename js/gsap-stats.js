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

  // ===== BENEFIT SECTION =====
  const benefitSection = document.querySelector(".benefit-section");

  if (benefitSection) {
    const benefitTitle = benefitSection.querySelector("h2");
    const benefitSubtitle = benefitSection.querySelector(".subtitle");
    const centerBox = benefitSection.querySelector(".center-box");
    const benefitCards = [1, 2, 3, 4, 5, 6]
      .map(function (number) {
        return benefitSection.querySelector(".card-" + number);
      })
      .filter(Boolean);
    const benefitIntro = [benefitTitle, benefitSubtitle].filter(Boolean);

    if (benefitTitle && centerBox && benefitCards.length) {
      gsap.set([benefitIntro, centerBox, benefitCards], {
        autoAlpha: 0,
      });
      gsap.set(benefitTitle, { y: 46 });
      if (benefitSubtitle) {
        gsap.set(benefitSubtitle, { y: 24 });
      }
      gsap.set(centerBox, { y: 34, scale: 0.82, rotate: -4 });
      gsap.set(benefitCards, {
        y: 32,
        scale: 0.96,
      });

      benefitCards.forEach(function (card) {
        const isLeftCard = card.classList.contains("left");
        gsap.set(card, { x: isLeftCard ? -76 : 76 });
      });

      const benefitTL = gsap.timeline({
        defaults: {
          ease: "power3.out",
          overwrite: "auto",
        },
        scrollTrigger: {
          trigger: benefitSection,
          start: "top 68%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      benefitTL
        .to(benefitTitle, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
        });

      if (benefitSubtitle) {
        benefitTL.to(
          benefitSubtitle,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.42",
        );
      }

      benefitTL
        .to(centerBox, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.82,
          ease: "back.out(1.45)",
        })
        .to(
          benefitCards,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.72,
            stagger: {
              each: 0.18,
            },
          },
          "+=0.12",
        );
    }
  }
});
