$(function() {

  // Global vars
  var $artHeaderInner = $('.art-header-inner');
  var $artHeader = $('.art-header');
  var artHeaderHeight = $artHeader.height();
  var $artTitle = $('.art-title');
  var $artSubtitle = $('.art-subtitle');
  var $artTime = $('.art-time');
  var artTitleFontSize = parseInt($artTitle.css('font-size'));
  var $nav = $('.nav');
  var windowScroll;

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  $artTitle.fitText(1, { minFontSize: '34px' });

  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
    if($nav.css('position') == "relative") {
      return false;
    } else {
      return true;
    }
  }

  // If large viewport parallax the title
  if(isLargeViewport()) {
    $(window).scroll(slidingTitle);
  }

  // trigger a recalc if we're already scrolled
  slidingTitle();

  // Functional parallaxing calculations
  function slidingTitle() {
    var windowScroll = window.pageYOffset || $(window).scrollTop();

    fadeHeader(windowScroll);
    fadeArt(windowScroll);
    fadeNav(windowScroll);
  }

  function fadeArt(windowScroll){
   //Slowly parallax the background of .art-header
    var offset = 0 - windowScroll / 8;
    var maxOffset = 0 - (artHeaderHeight / 8 );
    if (maxOffset > offset){
      offset = maxOffset;
      console.log(offset, maxOffset);
    }

    $artHeader.css({
      'background-position' : 'center ' + offset + "px"
    });
  }

  function fadeHeader(windowScroll){
    //Slow scroll of .art-header-inner scroll and fade it out
    var opacity = 1-(windowScroll/550);
    var marginTop = 0 - (windowScroll/3)+"px";
    if (opacity < 0){
      opacity = 0;
      marginTop = 550;
    }

    $artHeaderInner.css({
      'margin-top' : marginTop,
      'opacity' : opacity
    });
  }

  function fadeNav(windowScroll){
    //Fade the .nav out
    var opacity = 1 - (windowScroll/400);
    if (opacity < 0){
      opacity = 0;
    }
    $nav.css({
      'opacity' : opacity
    });
  }

	// Link to top of page without changing URL
	$('.back-to-top a').click(function(e) {
		e.preventDefault();
		$(window).scrollTop(0);
	})

	// Cover image of the header
	var $postImage = $('img[alt="cover"]');
	if ( $postImage.length ) {
		var postImageURL = $postImage.attr('src');
		$('.art-header').css('background-image','url(' + postImageURL + ')');
		$('.art-header').css('background-size','100%');

		// Change color scheme to white
		$('#logo h1').css('color','white');
		$('.art-title').css('color','white');
		$('.art-subtitle').css('color','white');
		$('.art-time').css('color','white');
		$('.nav-primary li a').css('color','white');

		// Add Text Shadows
		$('.art-title').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
		$('.art-subtitle').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');
		$('.art-time').css('text-shadow','3px 3px 0 rgba(0,0,0,0.1), -1px -1px 0 rgba(0,0,0,0.1), 1px -1px 0 rgba(0,0,0,0.1), -1px 1px 0 rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)');

	}
	$postImage.remove();

	// Subtitles
	var $subtitle = $('span[id="subtitle"]');
	if ( $subtitle.length ) {
		var subtitleText = $('#subtitle').text();
		$('.art-subtitle').html(subtitleText);

	}
	$subtitle.remove();

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });


});