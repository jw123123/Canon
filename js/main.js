$(function () {
  const body = "body";
  const etcItem = ".etc-item";
  const text = ".text";
  const viewMore = ".view";

  //etc 영역
  $(etcItem).mouseenter(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "2.5");
      $(this).siblings().css("flex-grow", "0.5");
      // $(etcItem).find(">a>ul").removeClass("text");
      // $(this).find(">a>ul").addClass("text");
      $(this).find(text).stop().show();
    }
    $(this).find(viewMore).stop().toggle();
    
  });
  $(etcItem).mouseleave(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "1");
      $(this).siblings().css("flex-grow", "1");
      // $(etcItem).find(">a>ul").removeClass("text");
      $(this).find(text).stop().hide();
      
    }
    $(this).find(viewMore).stop().toggle();
    // $(this).find(viewMore).hide();

  });

});