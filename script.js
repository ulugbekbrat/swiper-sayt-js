const swiperContainer = document.querySelector('.mySwiper');

swiperContainer.addEventListener('click', function(event) {
  if (event.target.closest('.swiper-slide')) {
    const clickedSlide = event.target.closest('.swiper-slide');

    if (clickedSlide.classList.contains('slide-1')) {
      document.body.style.background = 'lightblue';
    } else if (clickedSlide.classList.contains('slide-2')) {
      document.body.style.background = 'lightgreen';
    } else if (clickedSlide.classList.contains('slide-3')) {
      document.body.style.background = 'lightcoral';
    } else if (clickedSlide.classList.contains('slide-4')) {
      document.body.style.background = 'lightgoldenrodyellow';
    }
  }
});
