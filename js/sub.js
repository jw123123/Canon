$(function () {
  // 페이지별 메인메뉴, 활성화되는 서브메뉴 제어
  const body = $("body");
  const subH2 = $(".sub-hd-lnb h2");
  const lnbBtn = $(".cv-lnb-btn");
  const subBg = $(".sub-hd-bg");
  let lnb = $(".cv-lnb-list");
  let pageTitle = "Consumer,Business,Event,Service,Support,Company";
  // 문자들을 분기(,를 기준으로 분리하는 것)해서 배열로 만듦
  pageTitle = pageTitle.split(","); // ,로 자르는 배열 메서드 -> 여기까지 거치면 5개의 배열로 잘려짐
  // console.log(pageTitle);
  // let pageTitle = ["Company","Capability","Product","Sustainability","Career"];
  // [] = 배열
  // pageTitle [0] = "Company"; 위에 있는 배열들을 하나씩 따로 정의하는 것
  let bodyNum, mainNum, subNum;
  bodyNum = body.attr("class"); //속성 중 class값을 가져올 수 있게 attribute의 attr()을 쓴다.
  bodyNum = bodyNum.split(" ");
  // console.log(bodyNum[0]);
  mainNum = bodyNum[0].slice(3, 4); // 문자(한자씩) 자르는 문법(시작번호, 마지막번호(포함되지 않을 번호로 전까지만 보여줌))
  subNum = bodyNum[0].slice(5, 6);
  // console.log(mainNum, subNum);

  //해당 메뉴의 서브메뉴 찾는 것
  let subEl = lnb.eq(mainNum).children().eq(subNum); //eq() - index번호 찾는 문법 => nth-child같은 것
  // lnb.eq(mainNum) -> ol 찾은 것
  // let subEl = $(".cv-lnb-list:nth-of-type(1) > li:nth-child(1)");



  // 페이지 타이틀 입력
  let aaa = subH2.text(pageTitle[mainNum]); //문자 넣는 문법 text()
  // get 문법(요소에 접근해서 글자를 저장하는)(set 문법)

  // LNB 화면에 표시(해상도에 따라)
  if (body.hasClass("mo")) { // 모바일이라면
    lnb.eq(mainNum).css("display", "none");
  } else {
    lnb.eq(mainNum).css("display", "flex");
  }

  // 활성화되는 서브메뉴
  subEl.addClass("active");

  // 모바일 LNB Label 입력
  lnbBtn.text(subEl.text());

  // LNB 리스트 제어(해상도 리사이즈)
  $(window).resize(function () {
    if (body.hasClass("mo")) { // 모바일이라면
      lnb.eq(mainNum).css("display", "none");
    } else {
      lnb.eq(mainNum).css("display", "flex");
    }
  });


  // LNB 제어(mo에서 버튼 클릭하면 하위리스트 열리기)
  lnbBtn.click(function(){
    lnb.eq(mainNum).toggle();
  });


  // 서브배경이미지 설정
  // subBg.addClass("bg" + mainNum + "-" + subNum);
  subBg.addClass(`bg${mainNum}-${subNum}`); //"+"대신해서 ``안에 붙이고 싶은 문자와 변수를 쉽게 나열할 수 있음

});