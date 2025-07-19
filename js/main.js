
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/hide items based on filter
        menuItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  
  let countdownSeconds = 3600; // 1 hour

  function formatTime(s) {
    let h = String(Math.floor(s / 3600)).padStart(2, '0');
    let m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    let sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  }

  function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    countdownEl.textContent = formatTime(countdownSeconds);
    if (countdownSeconds > 0) {
      countdownSeconds--;
    } else {
      countdownEl.textContent = "Expired";
      clearInterval(timer);
    }
  }

  // Start the timer
  updateCountdown();
  let timer = setInterval(updateCountdown, 1000);


