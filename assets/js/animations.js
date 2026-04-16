/* d:/Projects/Web/Hotel_Managment_Business_site/tableflow-website/assets/js/animations.js */
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to trigger only once
        observer.unobserve(entry.target);
      }
      
  // FAQ Accordion Logic
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(acc => {
    acc.addEventListener('click', function() {
      // close others
      const currentParent = this.parentElement;
      if (!currentParent.classList.contains('open')) {
          document.querySelectorAll('.accordion').forEach(a => {
              a.classList.remove('open');
              a.querySelector('.accordion-content').style.maxHeight = null;
          });
      }
      
      currentParent.classList.toggle('open');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Animated Counters
  const animateNumbers = (entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalVal = parseFloat(target.getAttribute('data-target'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        const isDecimal = finalVal % 1 !== 0;
        const duration = 2000;
        const fps = 60;
        const totalFrames = Math.round(duration / (1000 / fps));
        
        let frame = 0;
        const countInt = setInterval(() => {
          frame++;
          let progress = frame / totalFrames;
          progress = 1 - Math.pow(1 - progress, 4); // ease out quartic
          let currentVal = progress * finalVal;
          
          if(isDecimal) {
            target.innerText = prefix + currentVal.toFixed(1) + suffix;
          } else {
            target.innerText = prefix + Math.round(currentVal) + suffix;
          }
          
          if (frame === totalFrames) {
            clearInterval(countInt);
            target.innerText = prefix + (isDecimal ? finalVal.toFixed(1) : finalVal) + suffix;
          }
        }, 1000 / fps);
        ob.unobserve(target);
      }
    });
  };

  const counterObserver = new IntersectionObserver(animateNumbers, observerOptions);
  document.querySelectorAll('.counter-anim').forEach(el => counterObserver.observe(el));
\n});
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));
  
  // FAQ Accordion Logic
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(acc => {
    acc.addEventListener('click', function() {
      // close others
      const currentParent = this.parentElement;
      if (!currentParent.classList.contains('open')) {
          document.querySelectorAll('.accordion').forEach(a => {
              a.classList.remove('open');
              a.querySelector('.accordion-content').style.maxHeight = null;
          });
      }
      
      currentParent.classList.toggle('open');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Animated Counters
  const animateNumbers = (entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalVal = parseFloat(target.getAttribute('data-target'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        const isDecimal = finalVal % 1 !== 0;
        const duration = 2000;
        const fps = 60;
        const totalFrames = Math.round(duration / (1000 / fps));
        
        let frame = 0;
        const countInt = setInterval(() => {
          frame++;
          let progress = frame / totalFrames;
          progress = 1 - Math.pow(1 - progress, 4); // ease out quartic
          let currentVal = progress * finalVal;
          
          if(isDecimal) {
            target.innerText = prefix + currentVal.toFixed(1) + suffix;
          } else {
            target.innerText = prefix + Math.round(currentVal) + suffix;
          }
          
          if (frame === totalFrames) {
            clearInterval(countInt);
            target.innerText = prefix + (isDecimal ? finalVal.toFixed(1) : finalVal) + suffix;
          }
        }, 1000 / fps);
        ob.unobserve(target);
      }
    });
  };

  const counterObserver = new IntersectionObserver(animateNumbers, observerOptions);
  document.querySelectorAll('.counter-anim').forEach(el => counterObserver.observe(el));
\n});
