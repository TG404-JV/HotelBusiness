document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if(mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // ROI logic
    const roiSlider = document.getElementById('roi-slider');
    if(roiSlider) {
        const ordersVal = document.getElementById('orders-val');
        const timeSaved = document.getElementById('time-saved');
        const paperSaved = document.getElementById('paper-saved');
        const moneySaved = document.getElementById('money-saved');

        roiSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            ordersVal.innerText = val;
            
            // Calc logic: 100 tickets = 40 hours saved = $800 saved
            const hours = Math.round(val * 0.4);
            timeSaved.innerText = hours.toLocaleString() + ' hrs';
            
            const tickets = val * 30; // monthly
            paperSaved.innerText = tickets.toLocaleString();
            
            const money = hours * 20;
            moneySaved.innerText = '$' + money.toLocaleString();
        });
    }
});
