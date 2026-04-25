// GSAP Stats Section Animation
window.addEventListener('load', function() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const statsSection = document.querySelector('.mxd-stats-lines');
  const leftCol = document.querySelector('.stats-left-col');
  const rightCol = document.querySelector('.stats-right-col');

  if (statsSection && leftCol && rightCol) {
    gsap.set(leftCol, { x: -100, opacity: 0 });
    gsap.set(rightCol, { x: 100, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: statsSection,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse'
      }
    });

    tl.to(leftCol, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0)
    .to(rightCol, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, 0.2);
  }
});
