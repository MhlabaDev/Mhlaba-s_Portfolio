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

  // Observe Hire Me Section (fix: moved inside DOMContentLoaded)
  const hire = document.querySelector('#hire .hire-modern');
  if (hire) observer.observe(hire);
});
document.querySelectorAll('.project-carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('img');
    let current = 0;
    slides[current].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 3000); // change slide every 3 seconds
});

