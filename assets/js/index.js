$(function() {
  'use strict';

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  $('.art-title').fitText(1, { minFontSize: '34px' });

  // Link to top of page without changing URL
  $('.back-to-top a').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  });

  // Cover image of the header
  $('img[alt="cover"]').each(function(i,postImage){
    var postImageURL = $(postImage).attr('src');
    $('.art-header').css({
      'background-image': 'url("' + postImageURL + '")',
    });
    $('.wrapper').addClass('white');
  }).remove();

  // Subtitles
  var $subtitle = $('#subtitle');
  if ( $subtitle.get(0) ) {
    var subtitleText = $subtitle.text();
    $('.art-subtitle').html(subtitleText);
    $subtitle.remove();
  }

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

});
