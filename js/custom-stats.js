// Statistics Counter Animation
window.addEventListener('load', function() {
  const counters = [
    { id: 'stats-counter-1', target: 50, suffix: '+' },
    { id: 'stats-counter-2', target: 30, suffix: '+' },
    { id: 'stats-counter-3', target: 15, suffix: '+' },
    { id: 'stats-counter-4', target: 85, suffix: '%' }
  ];

  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);

  const easeOutQuad = t => t * (2 - t);
  let animationFrame = null;

  const animateCounters = (direction = 'forward') => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    let frame = 0;
    const animate = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const value = direction === 'forward' ? progress : 1 - progress;

      counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
          const count = Math.floor(value * counter.target);
          element.textContent = count + counter.suffix;
        }
      });

      if (frame < totalFrames) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        counters.forEach(counter => {
          const element = document.getElementById(counter.id);
          if (element) {
            element.textContent = (direction === 'forward' ? counter.target : 0) + counter.suffix;
          }
        });
      }
    };
    animate();
  };

  const statsSection = document.querySelector('.mxd-stats-lines');

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters('forward');
        } else {
          counters.forEach(counter => {
            const element = document.getElementById(counter.id);
            if (element) {
              element.textContent = '0' + counter.suffix;
            }
          });
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }
});
