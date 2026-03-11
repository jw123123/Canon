$(function () {
  const body = "body";
  const etcItem = ".etc-item";
  const item = ".item";
  const text = ".text";
  const viewMore = ".view";

  //etc 영역
  $(etcItem).mouseenter(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "2.5");
      $(this).siblings().css("flex-grow", "0.5");
      $(this).find(text).css("opacity", "1");
      // $(text).siblings().css("opacity", "0");
      // $(item).find(">ul>li").addClass("text");
      // $(item).siblings().find(">ul>li").removeClass("text");
      // $(this).find(text).addClass("text");
    }
    $(this).find(viewMore).stop().toggle();
    
  });
  $(etcItem).mouseleave(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "1");
      $(this).siblings().css("flex-grow", "1");
      $(this).find(text).css("opacity", "0");
      // $(etcItem).find(">a>ul").removeClass("text");
      // $(this).find(text).stop().hide();
      
    }
    $(this).find(viewMore).stop().toggle();
    // $(this).find(viewMore).hide();

  });

});