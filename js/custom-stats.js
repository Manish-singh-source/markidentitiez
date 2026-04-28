// Statistics Counter Animation
window.addEventListener("load", function () {
  const counters = [
    { id: "stats-counter-1", target: 50, suffix: "+" },
    { id: "stats-counter-2", target: 30, suffix: "+" },
    { id: "stats-counter-3", target: 15, suffix: "+" },
    { id: "stats-counter-4", target: 85, suffix: "%" },
  ];

  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);
  let animationFrame = null;

  const animateCounters = (direction = "forward") => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    let frame = 0;
    const animate = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const value = direction === "forward" ? progress : 1 - progress;

      counters.forEach((counter) => {
        const element = document.getElementById(counter.id);
        if (element) {
          const count = Math.floor(value * counter.target);
          element.textContent = count + counter.suffix;
        }
      });

      if (frame < totalFrames) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        counters.forEach((counter) => {
          const element = document.getElementById(counter.id);
          if (element) {
            element.textContent =
              (direction === "forward" ? counter.target : 0) + counter.suffix;
          }
        });
      }
    };
    animate();
  };

  const statsSection = document.querySelector(".mxd-stats-lines");

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters("forward");
          } else {
            counters.forEach((counter) => {
              const element = document.getElementById(counter.id);
              if (element) {
                element.textContent = "0" + counter.suffix;
              }
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(statsSection);
  }

  // // Section - Project Start
  // const destinations = [
  //   {
  //     location: "Switzerland Alps",
  //     title: "SAINT\nANTÖNIEN",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Switzerland Alps",
  //     cardTitle: "SAINT\nANTÖNIEN",
  //     img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  //   },
  //   {
  //     location: "Japan Alps",
  //     title: "NAGANO\nPREFECTURE",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Japan Alps",
  //     cardTitle: "NAGANO\nPREFECTURE",
  //     img: "https://images.unsplash.com/photo-1548199569-6bfb28e4e9d5?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1548199569-6bfb28e4e9d5?w=600&q=80",
  //   },
  //   {
  //     location: "Sahara Desert — Morocco",
  //     title: "MARRAKECH\nMERZOUGA",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Sahara Desert — Morocco",
  //     cardTitle: "MARRAKECH\nMERZOUGA",
  //     img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
  //   },
  //   {
  //     location: "Sierra Nevada — United States",
  //     title: "YOSEMITE\nNATIONAL PARK",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Sierra Nevada — United States",
  //     cardTitle: "YOSEMITE\nNATIONAL PARK",
  //     img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&q=80",
  //   },
  //   {
  //     location: "Tarifa — Spain",
  //     title: "LOS LANCES\nBEACH",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Tarifa — Spain",
  //     cardTitle: "LOS LANCES\nBEACH",
  //     img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
  //   },
  //   {
  //     location: "Cappadocia — Turkey",
  //     title: "GÖREME\nVALLEY",
  //     desc: "Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero.",
  //     cardLocation: "Cappadocia — Turkey",
  //     cardTitle: "GÖREME\nVALLEY",
  //     img: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1600&q=85&auto=format",
  //     cardImg:
  //       "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=80",
  //   },
  // ];

  // const N = destinations.length;
  // let current = 0;
  // let animating = false;

  // const hero = document.getElementById("hero");
  // const bgSlides = document.getElementById("bg-slides");
  // const topBar = document.getElementById("top-bar");
  // const leftPanel = document.getElementById("left-panel");
  // const locName = document.getElementById("loc-name");
  // const slideTitle = document.getElementById("slide-title");
  // const slideDesc = document.getElementById("slide-desc");
  // const cardsTrack = document.getElementById("cards-track");
  // const progressFill = document.getElementById("progress-fill");
  // const slideCounter = document.getElementById("slide-counter");
  // const expander = document.getElementById("card-expander");

  // // ─── BUILD BACKGROUNDS ───
  // destinations.forEach((d, i) => {
  //   const div = document.createElement("div");
  //   div.className = "bg-slide" + (i === 0 ? " active" : "");
  //   div.style.backgroundImage = `url('${d.img}')`;
  //   bgSlides.appendChild(div);
  // });

  // // ─── BUILD CARDS (circular: show current+next 5) ───
  // // We render all cards in order; track offset handles the looping
  // function buildCards() {
  //   cardsTrack.innerHTML = "";
  //   destinations.forEach((d, i) => {
  //     const card = document.createElement("div");
  //     card.className = "dest-card" + (i === 0 ? " card-active" : "");
  //     card.dataset.idx = i;
  //     card.innerHTML = `
  //     <div class="card-img-wrap" style="background-image:url('${d.cardImg}')"></div>
  //     <div class="card-grad"></div>
  //     <div class="card-info">
  //       <div class="card-dash"></div>
  //       <div class="card-location">${d.cardLocation}</div>
  //       <div class="card-title">${d.cardTitle.replace("\n", "<br>")}</div>
  //     </div>
  //   `;
  //     card.addEventListener("click", () => {
  //       if (i !== current) goTo(i);
  //     });
  //     cardsTrack.appendChild(card);
  //   });
  // }

  // function getCardWidth() {
  //   const card = cardsTrack.children[0];
  //   if (!card) return 160;
  //   const style = getComputedStyle(card);
  //   return card.offsetWidth + parseInt(getComputedStyle(cardsTrack).gap || 16);
  // }

  // function updateCardsPosition(idx, animate = true) {
  //   if (!animate) cardsTrack.style.transition = "none";
  //   else
  //     cardsTrack.style.transition = "transform 0.75s cubic-bezier(0.4,0,0.2,1)";
  //   const cw = getCardWidth();
  //   cardsTrack.style.transform = `translateX(${-idx * cw}px)`;
  //   // Force reflow when no animation
  //   if (!animate) void cardsTrack.offsetWidth;
  // }

  // function updateActiveCard(idx) {
  //   document.querySelectorAll(".dest-card").forEach((c, i) => {
  //     c.classList.toggle("card-active", i === idx);
  //   });
  // }

  // function updateUI(idx, animate) {
  //   const d = destinations[idx];
  //   // top bar
  //   topBar.style.transform = "scaleX(1)";
  //   // progress bar
  //   progressFill.style.width = ((idx + 1) / N) * 100 + "%";
  //   // counter
  //   slideCounter.textContent = String(idx + 1).padStart(2, "0");

  //   if (animate) {
  //     leftPanel.classList.add("fade-out");
  //     setTimeout(() => {
  //       locName.textContent = d.location;
  //       slideTitle.innerHTML = d.title.replace("\n", "<br>");
  //       slideDesc.textContent = d.desc;
  //       leftPanel.classList.remove("fade-out");
  //     }, 320);
  //   } else {
  //     locName.textContent = d.location;
  //     slideTitle.innerHTML = d.title.replace("\n", "<br>");
  //     slideDesc.textContent = d.desc;
  //   }
  // }

  // function switchBackground(idx) {
  //   const slides = bgSlides.querySelectorAll(".bg-slide");
  //   slides.forEach((s, i) => s.classList.toggle("active", i === idx));
  // }

  // // ─── CARD → FULLSCREEN EXPAND ANIMATION ───
  // async function goTo(nextIdx) {
  //   if (animating) return;
  //   if (nextIdx < 0 || nextIdx >= N) return;
  //   if (nextIdx === current) return;
  //   animating = true;

  //   const targetCard = cardsTrack.children[nextIdx];
  //   const cardRect = targetCard.getBoundingClientRect();
  //   const heroRect = hero.getBoundingClientRect();

  //   const relL = cardRect.left - heroRect.left;
  //   const relT = cardRect.top - heroRect.top;
  //   const relW = cardRect.width;
  //   const relH = cardRect.height;
  //   const borderR = getComputedStyle(targetCard).borderRadius;

  //   // Setup expander at card's exact position
  //   expander.style.cssText = `
  //   position: absolute;
  //   left: ${relL}px;
  //   top: ${relT}px;
  //   width: ${relW}px;
  //   height: ${relH}px;
  //   border-radius: ${borderR};
  //   background-image: url('${destinations[nextIdx].img}');
  //   background-size: cover;
  //   background-position: center;
  //   opacity: 1;
  //   z-index: 8;
  //   pointer-events: none;
  //   transition: none;
  // `;
  //   void expander.offsetWidth; // force reflow

  //   // Animate expander to full screen
  //   expander.style.transition =
  //     "left 0.85s cubic-bezier(0.4,0,0.2,1), " +
  //     "top 0.85s cubic-bezier(0.4,0,0.2,1), " +
  //     "width 0.85s cubic-bezier(0.4,0,0.2,1), " +
  //     "height 0.85s cubic-bezier(0.4,0,0.2,1), " +
  //     "border-radius 0.85s cubic-bezier(0.4,0,0.2,1), " +
  //     "opacity 0.2s ease 0.75s";

  //   expander.style.left = "0px";
  //   expander.style.top = "0px";
  //   expander.style.width = heroRect.width + "px";
  //   expander.style.height = heroRect.height + "px";
  //   expander.style.borderRadius = "0px";

  //   // Dim left panel
  //   leftPanel.style.opacity = "0.08";

  //   // Halfway through → switch background + content
  //   await delay(480);
  //   switchBackground(nextIdx);
  //   current = nextIdx;
  //   updateCardsPosition(current, true);
  //   updateActiveCard(current);
  //   updateUI(current, false);
  //   leftPanel.style.opacity = "";

  //   // Wait for expand to finish then fade out expander
  //   await delay(400);
  //   expander.style.opacity = "0";

  //   await delay(220);
  //   // Reset expander
  //   expander.style.cssText =
  //     "position:absolute;z-index:8;pointer-events:none;opacity:0;";

  //   animating = false;
  // }

  // function delay(ms) {
  //   return new Promise((r) => setTimeout(r, ms));
  // }

  // // ─── ARROW BUTTONS ───
  // document.getElementById("btn-next").addEventListener("click", () => {
  //   if (current < N - 1) goTo(current + 1);
  // });
  // document.getElementById("btn-prev").addEventListener("click", () => {
  //   if (current > 0) goTo(current - 1);
  // });

  // // ─── MOUSE WHEEL ───
  // let wheelTimer = null;
  // hero.addEventListener(
  //   "wheel",
  //   (e) => {
  //     e.preventDefault();
  //     if (animating) return;
  //     if (wheelTimer) return;
  //     wheelTimer = setTimeout(() => {
  //       wheelTimer = null;
  //     }, 950);
  //     if (e.deltaY > 0) {
  //       if (current < N - 1) goTo(current + 1);
  //     } else {
  //       if (current > 0) goTo(current - 1);
  //     }
  //   },
  //   { passive: false },
  // );

  // // ─── TOUCH SWIPE ───
  // let touchStartX = null,
  //   touchStartY = null;
  // hero.addEventListener(
  //   "touchstart",
  //   (e) => {
  //     touchStartX = e.touches[0].clientX;
  //     touchStartY = e.touches[0].clientY;
  //   },
  //   { passive: true },
  // );

  // hero.addEventListener(
  //   "touchend",
  //   (e) => {
  //     if (touchStartX === null) return;
  //     const dx = touchStartX - e.changedTouches[0].clientX;
  //     const dy = touchStartY - e.changedTouches[0].clientY;
  //     if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {
  //       if (dx > 0) {
  //         if (current < N - 1) goTo(current + 1);
  //       } else {
  //         if (current > 0) goTo(current - 1);
  //       }
  //     }
  //     touchStartX = touchStartY = null;
  //   },
  //   { passive: true },
  // );

  // // ─── KEYBOARD ───
  // document.addEventListener("keydown", (e) => {
  //   if (e.key === "ArrowRight" || e.key === "ArrowDown") {
  //     if (current < N - 1) goTo(current + 1);
  //   }
  //   if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
  //     if (current > 0) goTo(current - 1);
  //   }
  // });

  // // ─── INIT ───
  // buildCards();
  // updateUI(0, false);
  // updateCardsPosition(0, false);
  // progressFill.style.width = (1 / N) * 100 + "%";
  // topBar.style.transform = "scaleX(1)";
  // topBar.style.transition = "none";

  // // Animate top bar on load
  // setTimeout(() => {
  //   topBar.style.transition = "transform 0.9s cubic-bezier(0.4,0,0.2,1)";
  // }, 100);

  // Section - Project End

  //  Section - Project Slider Start
  const galleryData = {
  Italy: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&w=900&q=80"
  ],
  Dubai: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
  ],
  London: [
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80"
  ],
  Berlin: [
    "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1534313314376-a72289b6181e?auto=format&fit=crop&w=900&q=80"
  ],
  Rome: [
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80"
  ],
  Lisbon: [
    "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80"
  ],
  India: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80"
  ],
  China: [
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=900&q=80"
  ],
  Japan: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80"
  ]
};

const tabsEl = document.getElementById("tabs");
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentTab = "Italy";
let images = galleryData[currentTab];
let active = 2;
let isSliding = false;
let autoSlideTimer;

function renderTabs() {
  tabsEl.innerHTML = "";

  Object.keys(galleryData).forEach(tabName => {
    const btn = document.createElement("button");
    btn.className = `tab ${tabName === currentTab ? "active" : ""}`;
    btn.textContent = tabName;

    btn.addEventListener("click", () => {
      currentTab = tabName;
      images = galleryData[currentTab];
      active = 2;

      renderTabs();
      renderCards(true);
      restartAutoSlide();
    });

    tabsEl.appendChild(btn);
  });

  const viewBtn = document.createElement("button");
  viewBtn.className = "tab view";
  viewBtn.textContent = "View More →";
  tabsEl.appendChild(viewBtn);
}

function getPosition(index) {
  const total = images.length;
  let diff = index - active;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

function renderCards(forceRebuild = false) {
  if (!carousel.children.length || forceRebuild) {
    carousel.innerHTML = "";

    images.forEach((img, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.index = index;

      card.innerHTML = `
        <img src="${img}" alt="${currentTab}">
        <div class="card-label">
          <span>${currentTab}</span>
          <h3>Travel Moment</h3>
        </div>
        ${index === 3 ? '<span class="video-icon">▶</span>' : ''}
      `;

      card.addEventListener("click", () => {
        if (isSliding) return;

        active = index;
        updateCardPositions();
        restartAutoSlide();
      });

      carousel.appendChild(card);
    });
  }

  updateCardPositions();
}

function updateCardPositions() {
  const allCards = [...carousel.children];

  allCards.forEach((card, index) => {
    card.className = "card";

    const diff = getPosition(index);

    if (diff === 0) card.classList.add("center");
    else if (diff === -1) card.classList.add("left-1");
    else if (diff === 1) card.classList.add("right-1");
    else if (diff === -2) card.classList.add("left-2");
    else if (diff === 2) card.classList.add("right-2");
    else card.classList.add("hidden");
  });
}

function nextSlide() {
  if (isSliding) return;

  isSliding = true;
  active = (active + 1) % images.length;
  updateCardPositions();

  setTimeout(() => {
    isSliding = false;
  }, 850);
}

function prevSlide() {
  if (isSliding) return;

  isSliding = true;
  active = (active - 1 + images.length) % images.length;
  updateCardPositions();

  setTimeout(() => {
    isSliding = false;
  }, 850);
}

function startAutoSlide() {
  stopAutoSlide();

  autoSlideTimer = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
  }
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  restartAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  restartAutoSlide();
});

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

document.querySelector(".controls").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".controls").addEventListener("mouseleave", startAutoSlide);

let startX = 0;

carousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});

carousel.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();

  restartAutoSlide();
});

renderTabs();
renderCards(true);
startAutoSlide();

  // Section - Project Slider Start
});
