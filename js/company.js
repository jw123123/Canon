$(function () {
  const body = $('body')
  let swiper;

  if(!body.hasClass('mo')) {
  swiper = new Swiper(".worth-container", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: {
      releaseOnEdges: true, 
      sensitivity: 1,      
    },
    speed: 800,
    observer: true,
    observeParents: true,
  });
  }
});