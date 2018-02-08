"use strict";

/* main.js Event handling
 * Copyright Michael Wood 2017
 */

var currentPage = 0;
var currentMiniBookPage = 0;
var missClicks = 0;

/* Save some typing and alias this function */
function newSvgElement(type){
 return $(document.createElementNS("http://www.w3.org/2000/svg", type));
}

/* Add a function for toggling the depth of field blur effect */
(function($) {
  $.fn.setDepthBlur = function(on){
    if (on) {
      this.css("filter", "url(#depth-blur)");
    } else {
      this.css("filter", "none");
    }

    return this;
  }

  $.fn.animateAttr = function(prop, toValue){
    var time = setInterval(animationFrame, 4);

    var currentValue = Number(this.attr(prop));
    var element = this;

    function animationFrame(){
      element.attr("width", currentValue);
      currentValue++;
      if(currentValue == toValue){
        clearInterval(time);
      }
    }
    return this;
  }   
}(jQuery));


Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

/*
 * paginate: +/- number of pages 
 */
function changeMainPage(paginate){
  if (!config.pages[currentPage + paginate]){
    return;
  }

  goToPage(currentPage + paginate);
}

/* Loads in the next page of the book
 * page: page name or page number
 */
function goToPage(page){

  if (typeof(page) === 'string'){
    for (var pageI in config.pages){
      /* Search for the page name in the list of pages */
      if (config.pages[pageI].name === page){
        page = pageI;
        break;
      }
    }
  }

  if (!config.pages[page]){
    console.log("No such page:" + page);
    return;
  }

  var oldPage = $('#pg-'+currentPage+'-bg');

  fadeAudio(OUT);

  oldPage.removeClass('makeOpaque');
  oldPage.addClass('makeTransparent');

  currentPage = Number(page);
  window.location.hash = page;
  $("#page-number").text(page);

  /* Check if this page should show the pagination buttons */
  if (config.pages[page].hasOwnProperty("showPagination")){
    updateFwdNextBtns();
  } else {
    $(".paginate").hide();
  }

  var newPage = $('#pg-'+currentPage+'-bg');
  newPage.removeClass('makeTransparent');
  newPage.addClass('makeOpaque');

  /* This is happening for each of the animations? */
  newPage.one("animationend", function(e){
    updateClickTargets();

    if (config.pages[currentPage].hasOwnProperty("audio")){
      playAudio(config.pages[currentPage].audio);
    }
  }); 

  /* For the first and last pages we have the book closed so it's half the
   * width; adjust the drop shadow width accordingly
   */ 
  if (currentPage === 0 || currentPage === (config.pages.length -1)){
    $("#drop-shadow-rect").attr({x: 400, width: 748});
  } else {
    $("#drop-shadow-rect").attr({x: 0, width: 1530});
  }
}

function alignPageChrome(){
  var pageHeight = $("svg#page").height();

  $(".paginate").css("top", pageHeight/2);
  $("#under-main-page").css("top", pageHeight);
}

/* Check if we can actually go either fwd or next and update visibility of 
 * buttons accordingly
 */
function updateFwdNextBtns(){

  if (currentPage === (config.pages.length - 1)){
    $(".paginate#next").hide();
    $(".paginate#previous").show();
  } else if (currentPage === 0){
    $(".paginate#previous").hide();
    $(".paginate#next").show();
  } else {
    $(".paginate").show();
  }
}

/* Update the click targets for the newly loaded page */
function updateClickTargets(){
  /* Get rid of the old ones */
  var svg = $("svg#page");
  
  svg.children("a").remove();

  try {
    var clickTargets = config.pages[currentPage].clickTargets;
  } catch(e) {
    console.log(e);
    return;
  }

  var miniBooksToCache = '';

  for (var clickTargetI in clickTargets){
    /* Create the click target element */
    var target = newSvgElement("a");
    var clickTargetData = clickTargets[clickTargetI]

    target.attr('goto', clickTargets[clickTargetI].goesTo);

    /* Add the rectange for better contrast border of the next rectangle  */
    var rect = newSvgElement("rect");
    rect.attr("rx", 5);
    rect.attr(clickTargets[clickTargetI]);
    rect.addClass("click-target-outerborder");
    target.append(rect);

    /* Add the rectange which represents the clickable area */
    var rect = newSvgElement("rect");
    rect.attr("rx", 5);
    rect.attr(clickTargets[clickTargetI]);
    rect.addClass("click-target");
    target.append(rect);

    /* debug
    target.on("mouseover", function(){
      console.log($(this).attr("goto"));
    });
    */

    if (clickTargets[clickTargetI].goesTo.indexOf("minibooks://") > -1) {
      miniBooksToCache += ' ' + clickTargets[clickTargetI].goesTo.substr("minibooks://".length);
    }

    target.click(function(){
      $(this).attr("opacity", 0);
      var goesTo = $(this).attr("goto");

      /* switch on our types of links */
      if (goesTo.indexOf("http://") > -1){
        window.location.href = goesTo;
      } else if (goesTo.indexOf("texts://") > -1) {
        showTextsModal(goesTo);
      } else if (goesTo.indexOf("minibooks://") > -1) {
        showMiniBooksModal(goesTo);
      } else {
        goToPage(goesTo);
      }
    });
    svg.append(target);
  }

  warmCacheMiniBooks(miniBooksToCache);
}

function warmCacheMiniBooks(books){
  /* find the miniBook config */
  for (var i in config.miniBooks){
    if (books.indexOf(config.miniBooks[i].name) > -1){
      var miniBook = config.miniBooks[i];
      /* console.log("Caching "+miniBook.pages[0]); */
      try {
        $.get("./minibooks/"+miniBook.pages[0]);
      } catch (e) {}
    }
  }
}

/* Load the mini books modal for a specified "minibook" */
function showMiniBooksModal(uri){
  var miniBookName = uri.substr("minibooks://".length);
  var miniBook;
  var miniBookPageImage = $("#minibook-page-image");

  /* find the miniBook config */
  for (var i in config.miniBooks){
    if (config.miniBooks[i].name === miniBookName){
      miniBook = config.miniBooks[i];
      break;
    }
  }

  currentMiniBookPage = 0;
  miniBookPageImage.attr("src", "./minibooks/" + miniBook.pages[0]);
  miniBookPageImage.data("pages", miniBook.pages);

  /* wait for the browser to have fetched the first page before showing the
   * modal dialog
   */
  $("#pg-"+currentPage+"-bg").setDepthBlur(true);

  $("#minibooks-modal").fadeIn();
}

function hideMiniBooksModal(){
  $("#minibooks-modal").fadeOut(function(){
    $("#pg-"+currentPage+"-bg").setDepthBlur(false);
    $("#minibook-page-image").attr("src", ""); 
  });
}

function showTextsModal(uri){
  var textFile = uri.substr("texts://".length);
  var textModal = $("#texts-modal");

  $("#text-test-frame").prop("src", "./texts/"+textFile);
}

function changeMiniBookPage(paginate){
  var miniBookPageImage = $("#minibook-page-image");
  var pages = miniBookPageImage.data("pages");

  if (pages[currentMiniBookPage + paginate] === undefined){
    hideMiniBooksModal();
    return
  }

  currentMiniBookPage = currentMiniBookPage + paginate;

  miniBookPageImage.attr("src",
                         "./minibooks/" + pages[currentMiniBookPage]);

  /* lazy preload the next page into cache */
  if (pages[currentMiniBookPage + paginate] !== undefined){
    $("#next-minibook-page-image")
      .attr("src",  "./minibooks/" + pages[currentMiniBookPage + paginate]);
  }
}

/* Get the page from the hash in the url to enable debug and quick changing
 * between pages.
 */
function pageFromUrl(){
  if (window.location.hash){
    var newPage = window.location.hash.substr(1);
    if (newPage != currentPage){
      goToPage(newPage);
    }
  }
}

var IN = 1;
var OUT = 2;

var audioPlayer1 = $("#audio-player1").get(0);
var audioPlayer2 = $("#audio-player2").get(0);
var fadeTimer;

/* Synchronise these properties */
audioPlayer1.onplay = function(){
  audioPlayer2.play();
}

audioPlayer1.onpause = function(){
  audioPlayer2.pause();
}

audioPlayer1.onvolumechange = function(){
  audioPlayer2.volume = audioPlayer1.volume;
}

function fadeAudio(direction){
  clearInterval(fadeTimer);

  var amount = 0.0;
  var target = 0.0;

  if (direction === IN){
    amount = 0.01;
    target = 0.10;
  } else {
    amount = -0.02;
  }

  fadeTimer = setInterval(function(){
    /* Javascript!! */
    if (audioPlayer1.volume.toPrecision(2) != target){
      audioPlayer1.volume = (audioPlayer1.volume + amount).clamp(0,1);
    } else {
      clearInterval(fadeTimer);
      if (direction === OUT){
        pauseAudio();
      }
    }
  }, 100);
}

function playAudio(src){

	/* If there is something already playing then wait for that to pause */
  if (!audioPlayer1.paused){
    var enque = setInterval(function(){
      /* console.log("waiting for playing to pause"); */
      if (audioPlayer1.paused){
        clearInterval(enque);
        _playNow();
      }
      
    }, 300);
  } else {
    _playNow();
  }

  function _playNow(){

    audioPlayer1.volume = 0;
    audioPlayer2.volume = 0;

    audioPlayer1.src = src;
    audioPlayer2.src = src;

    audioPlayer1.load();
    audioPlayer2.load();

    /* Wait for the duration value to exist
     * we don't mind about this happening async as it's ambient sound
     * */
    audioPlayer1.ondurationchange = function(){
      /* Start the second player half way through to give loop continuity */
      audioPlayer2.currentTime = audioPlayer1.duration / 2;
    }

    audioPlayer1.play();

    fadeAudio(IN);

    /* Lets not play indefinitely.. 4 minutes? */
    setTimeout(function(){
      fadeAudio(OUT);
    }, 4*60*1000);

  }
}

function pauseAudio(){
  audioPlayer1.pause();
}

$(document).ready(function(){
  
  /* Connect up click handlers */

  $("#previous").click(function(e){
    e.preventDefault();
    changeMainPage(-1);
  });

  $("#next").click(function(e){
    e.preventDefault();
    changeMainPage(+1);
  });

  $("#minibook-pg-next, #minibook-page").click(function(e){
    e.preventDefault();
    changeMiniBookPage(+1);
  });

  $("#minibook-pg-previous").click(function(e){
    e.preventDefault();
    changeMiniBookPage(-1);
  });


  /* Couple of shortcut keys. Mostly for development */
  $(window).keyup(function(e){
    switch(e.key){
    case "m":
      updateFwdNextBtns();
      break;
    case "n":
      changeMainPage(+1);
      break;
    case "p":
      changeMainPage(-1);
      break;
    }

  })

  /* Calculate the size that the text modal dialog will need to be by testing
   * it in an off screen area first
   * (we don't use JQuery here as we just want the e.originalEvent)
   */
  window.addEventListener("message", function(e){
    var textModal = $("#texts-modal")
    var textModalIframe = textModal.find("iframe");
   
    /* If the upcoming modal already is the same as the test then we've already
     * completed the test and this message came from the actual document and
     * not the test version */
    if (textModalIframe.prop("src") === $("#text-test-frame").prop("src")){
      return;
    } else {
      textModalIframe.prop("src", $("#text-test-frame").prop("src"));
    }

    /* +/- to account for iframe scrolling note this is clamped by the
     * max height.
     */

    textModalIframe.css("height", e.data.height + 10);
    textModalIframe.css("width", e.data.width - 15);

    textModal.modal('show');
  });

  /* Remove the iframe content on modal close to avoid sending messages */
  $("#texts-modal").on("hidden.bs.modal", function(){
    $(this).find("iframe").attr("src", "");
  });

  /* if click outside of the minibook content area then close modal */
  $("#minibooks-modal").click(function(e){
		if (e.target === $(this).get(0)){
      hideMiniBooksModal();
    }
  });

  $("#minibook-close").click(function(e){
    e.preventDefault();
    hideMiniBooksModal();
  });


  /* If there are lots of miss-clicks then show the hints again */
  $("#page").click(function(e){
    missClicks++;

    if (missClicks > 1)
      updateClickTargets();
    setTimeout(function(){
      missClicks = 0;
    }, 2000);
  });

  $(window).resize(function(){
    /* Re align the page chrome on window resize */
    alignPageChrome();
  });

  $(window).on("hashchange", function(){ 
    pageFromUrl();
  });

  if (window.orientation != undefined && window.orientation == 0){
    alert("Best viewed in landscape");

  }

  alignPageChrome();
  updateFwdNextBtns();
  pageFromUrl();
  updateClickTargets();



}); /* end document ready function */
