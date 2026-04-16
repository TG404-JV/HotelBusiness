/* d:/Projects/Web/Hotel_Managment_Business_site/tableflow-website/assets/js/components.js */
document.addEventListener('DOMContentLoaded', () => {
  // Tabs Component Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.style.borderColor = 'transparent';
          b.style.color = 'var(--color-text-muted)';
        });
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');
        btn.style.borderColor = 'var(--color-accent)';
        btn.style.color = 'var(--color-accent)';

        // Show corresponding content
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });

    // Set initial state
    tabBtns[0].click();
  }

  // Accordion Logic (for FAQ)
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length > 0) {
    accordions.forEach(acc => {
      const header = acc.querySelector('.accordion-header');
      const content = acc.querySelector('.accordion-content');
      
      header.addEventListener('click', () => {
        const isOpen = acc.classList.contains('open');
        
        // Close all other accordions
        accordions.forEach(a => {
          a.classList.remove('open');
          a.querySelector('.accordion-content').style.maxHeight = null;
        });

        if (!isOpen) {
          acc.classList.add('open');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }
});
