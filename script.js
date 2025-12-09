document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe About Section
  const about = document.querySelector('#about .about-modern');
  if (about) observer.observe(about);

  // Observe Resume Section
  const resume = document.querySelector('#resume .resume-modern');
  if (resume) observer.observe(resume);

  // Observe all project cards
  document.querySelectorAll('.project').forEach(card => observer.observe(card));
});
