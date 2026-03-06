$(function () {
  // 1. 변수 선언
  // var(루트변수) let const
  const body = "body";
  let viewportH, viewportW;
  const gnb = "#canon-gnb";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-container";
  const depth2 = ".depth2 > li > a";
  const depth3 = ".depth3";
  const siteMapBtn = ".sitemap-btn";
  const closeBtn = ".btn-close";
  const siteMap = ".mo-gnb-sitemap";
  let speed = 300;
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2-wrap";
  const blankAnchor = "a[href='#']"
  const fsBtn = ".fs-btn"
  const fsList = ".fs-site-wrap"


  //  반응형 구현
  rwd();
  // 창의 크기가 조절되면
  $(window).resize(function () {
    rwd();
  });

  // 2. 실행될 스크립트 작성
  // GNB (타겟,이벤트,함수)
  // $(mainMenu).mouseenter(function () {
  //   $(this).find(subMenu).stop().slideDown();
  //   // 메서드 안에는 선택자만 들어가야함
  // });
  // $(mainMenu).mouseleave(function () {
  //   $(this).find(subMenu).stop().slideUp();
  //   // 메서드 안에는 선택자만 들어가야함
  // });


// 서브메뉴 오픈
  $(mainMenu).mouseenter(function () {
    $(this).find(subMenu).show();
    // $(this).addClass("sub-on");
  });
  $(mainMenu).mouseleave(function () {
    $(this).find(subMenu).hide();
    // $(this).removeClass("sub-on");
  });

  // $(depth2).hover(function () {
  //   $(depth3).removeClass("show");
  //   $(this).next().addClass("show");
  // });
  // $(mainMenu).hover(function () {
  //   $(depth3).removeClass("show");
  // });

  // 카테고리 hover시 컬러 변경
  $(mainMenu).mouseenter(function () {
    $(mainMenu).find(">a").removeClass("point");
    $(this).find(">a").addClass("point");
    // $(this).addClass("point");
  });

  $(mainMenu).mouseleave(function () {
    $(mainMenu).find(">a").removeClass("point");
    $(depth2).removeClass("hover_line");
  });

  // $(depth2).mouseenter(function () {
  //   $(depth2).removeClass("hover_line");
  //   $(this).addClass("hover_line");
  // });

  // 푸터 패밀리사이트 오픈
  $(fsBtn).click(function () {
    $(fsList).toggle();
  });


  // 3. 애니메이션

  // css수정 : 노드를 변경해서 노드 자체 style로 들어감
  // $(siteMapBtn).click(function () {
  //   $(siteMap).css("right", "0");
  // });
  // $(closeBtn).click(function () {
  //   $(siteMap).css("right", "-100%");
  // });

  // 애니메이트
  // $(siteMapBtn).click(function () {
  //   $(siteMap).animate({
  //     "right": "0",
  //     "opacity": "1"
  //     // ""문자로 묶지 않으면 변수로 알아들음
  //   }, 500);
  // });
  // $(closeBtn).click(function () {
  //   $(siteMap).animate({
  //     "right": "-100%",
  //     "opacity": "0"
  //   }, 500);
  // });

  // $(siteMapBtn).click(function () {
  //   $(body).addClass("fixed ");
  //   $(siteMap).addClass("on");
  // });
  // $(closeBtn).click(function () {
  //   $(body).removeClass("fixed");
  //   $(siteMap).removeClass("on");
  // });



  // 모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function (e) {
    if ($(body).hasClass("mo")) { //모바일 해상도에서만 실행
      e.preventDefault(); //<a>의 링크 기능 실행 막기
      // a의 고유 실행되는것(href)을 막는 문법
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
      $(this).next().stop().slideToggle(300);
    }
  });

  $(siteMapBtn).click(function () {
    if ($(body).hasClass("mo")) {
      $(body).addClass("fixed");
      $(siteMap).addClass("on");
    } else {
      $(body).addClass("fixed");
      $(siteMap).show();
    }
  });

  $(closeBtn).click(function () {
    if ($(body).hasClass("mo")) {
      $(body).removeClass("fixed");
      $(siteMap).removeClass("on");
    } else {
      $(body).removeClass("fixed");
      $(siteMap).hide();
    }
  });


  // 임시링크 실행 막기
  $(blankAnchor).click(function (e) {
    e.preventDefault();
  });



  // 사용자 함수
  function rwd() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    // console.log(viewportW, viewportH)
    // if(조건을 충족하면){실행}
    if (viewportW < 768) { //단위 안 쓰고 절대값 px로 읽음
      $(body).removeClass("tb pc").addClass("mo");
    } else if (viewportW >= 768 && viewportW < 1280) {
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(siteMap).attr("style", "");
    // "style 속성을 찾아서 없애버리는 문법"
    //attribute - 속성으로 a href=""의 a 속성이 href=""인 것
  }

});
// $(document).ready(function(){});