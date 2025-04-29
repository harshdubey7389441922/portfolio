window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        // If the section is within the viewable area (in this case, 100px from the viewport)
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible'); // Add the 'visible' class to trigger the animation
        }
    });
  });
  
  // Typewriter Effect
  const app = document.getElementById('typewriter-text');
  
  const typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
  });
  
  typewriter
      .typeString('Web developer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('software developer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('coder')
      .pauseFor(1000)
      .start();
  