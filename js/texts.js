$(document).ready(function(){
  var frameHeight = {
    height: $(this).height(),
    width: $(this).width()
  };
  parent.postMessage(frameHeight, "*");

  $("img").each(function(){
    $(this).parent().append("<a href=####>");
  });
});
