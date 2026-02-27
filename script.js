
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
          breakpoints: {
    768: {
      enabled: false,
    }
  }
        
      });

const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');
const bottomItems = document.querySelectorAll('.swiper');

function hideBottomGrid(show) {
  bottomItems.forEach(item => {
    item.style.height = show ? 'auto' : '200px'; 
    item.style.overflow = show ? 'visible' : 'hidden';
  });


  showBtn.style.display = show ? 'none' : 'flex';
  hideBtn.style.display = show ? 'flex' : 'none';

 
  if (typeof swiper !== 'undefined') {
    swiper.update(); 
  }
}


showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));