$(function () {
  const body = "body";
  const etcItem = ".etc-item";
  const item = ".item";
  const text = ".text";
  const viewMore = ".view";
  const slider = $(".recommend-item");
  const bar = $(".progress");
  let speed = 3000;
  const newItemList = $('.new-list li');


  //etc 영역
  $(etcItem).mouseenter(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "2.5");
      $(this).siblings().css("flex-grow", "0.5");
      $(this).find(text).addClass("active");
      $(this).find(viewMore).stop().toggle();
    }

  });
  $(etcItem).mouseleave(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "1");
      $(this).siblings().css("flex-grow", "1");
      $(this).find(text).removeClass("active");
      $(this).find(viewMore).stop().toggle();
    }

  });


  //슬라이더 페이지네이션
  // 1. 이벤트를 먼저 등록합니다 (init을 잡기 위해)
  // 슬라이드가 변할 때마다 바 너비 업데이트
  slider.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
    // 슬라이더가 로딩될 때부터 이동할 때마다 실시간으로 바가 움직이게함
    //beforeChange => 슬라이드가 옆으로 출발하는 순간에 바가 같이 움직임

    let curr;

    // init(초기화) 시점에는 nextSlide가 없으므로 0으로 처리, 
    // 그 외에는 다음에 올 슬라이드 번호(nextSlide)를 사용합니다.
    if (typeof nextSlide !== 'undefined') {
      curr = nextSlide + 1;
    } else {
      curr = 1;
    }

    let total = slick.slideCount; //전체 개수 파악
    let width = (curr / total) * 100; // 수학적으로 "현재 몇번째인가"의 너비 계산

    bar.css('width', width + '%');
    // width 뒤에 % 기호를 붙여서 CSS 속성으로 쏴줌
  });


  // 2. 그 다음 슬라이더를 실행합니다.
  //슬라이더
  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,  // 마우스 올렸을 때 멈춤 해제
    pauseOnFocus: false,  // 클릭(포커스) 시 멈춤 해제
    pauseOnDotsHover: false,
    responsive: [ // 화면 크기가 변할 때(Responsive)
      {
        breakpoint: 767, // 특정 지점(Breakpoint)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1279, // 1279px화면 이하
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  // 신제품 스와이퍼
  // let swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   effect: "fade",
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //   },
  //  on: {
  //     init: function() {
  //       // 초기 로드 시 첫 번째 아이템에 active 추가
  //       newItemList.eq(0).addClass('active');
  //     },
  //     slideChange: function() {
  //       // 슬라이드가 바뀔 때마다 실행 (자동재생 연동)
  //       const activeIndex = this.realIndex;
        
  //       // 모든 li에서 active 제거하고 현재 인덱스만 추가
  //       newItemList.removeClass('active');
  //       newItemList.eq(activeIndex).addClass('active');
  //     }
  //   }
  // });



  // 마우스를 올렸을 때
  newItemList.on('mouseenter', function () {
    // $(this).index() 가 핵심입니다. 
    // 별도의 id나 data 없이도 "내가 몇 번째 li인가"를 알아냅니다.
    let idx = $(this).index();

    // 해당 번호의 슬라이드로 이동
    swiper.slideTo(idx);
    swiper.autoplay.stop();
  });
  newItemList.on('mouseleave', () => {
    // 마우스를 떼면 다시 자동 재생 시작
    swiper.autoplay.start();
  });
});