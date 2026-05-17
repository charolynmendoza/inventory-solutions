function handleAnimations() {
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  reveals.forEach((el) => observer.observe(el));

  // Animate bars on load
  document.querySelectorAll('.bar-fill').forEach((bar) => {
    const w = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = w;
      bar.style.transition = 'width 1.2s ease';
    }, 800);
  });
}

// Handle animations on page load
window.addEventListener('load', handleAnimations);
