const video = document.querySelector('video');
const play_btn = document.querySelector('.play')
const video_poster = document.querySelector('.poster_wrapper')
const header_nav = document.querySelector('.header_nav')

const whatSize = () => {
  let width = window.innerWidth
  let slideAmount = 4
  if(width < 750 && width > 550) {
    slideAmount = 3
  }
  else if (width < 550) {
    slideAmount = 2
  }
  return slideAmount
}

const videoPlay = () => {
  video.play()
  video_poster.classList.add('hide')
}

const fixMenu = () => {
  if(window.scrollY > 148) {
    header_nav.classList.add('fixed')
  }
  else {
    header_nav.classList.remove('fixed')
  }
}

const swiper = new Swiper(".swiper", {
  slidesPerView: whatSize(),
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

play_btn.addEventListener('click', videoPlay)
document.addEventListener('scroll', fixMenu)


