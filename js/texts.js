$(window).on('load', function(){
  var frameHeight = {
    height: $(this).height(),
    width: $(this).width()
  };

  window.parent.postMessage(frameHeight, "*");
});
