$('.description-content').first().show();

  // let headerHeight = $('.header').height();
//  $('.homescreen').innerHeight($('.homescreen').height() - );

// $( window ).resize(function() {
//   if( $(window).height() >= 500 &&  $(window).width() >= 500 && ){
//     $('.homescreen').innerHeight($('.homescreen').height() - headerHeight);
//   }
// });

$(document).ready(function () {
 
  $('.description-li').on('click', descriptionTabChange);
  $('.faq-item').on('click', faqShowMore);

  function descriptionTabChange(e) {
    e.preventDefault();
    $(this).siblings('.description-li').removeClass('description-li-active');
    $(this).addClass('description-li-active');

    $('.description-content').hide();
    $( $(this).find('a').attr('href') ).show();
    console.log($(this).find('a').attr('href'));
    
  }

  function faqShowMore() {
    $(this).find('.faq-hidden').slideToggle();
    $(this).toggleClass('faq-item-active');
    $(this).find('.faq-arrow').toggleClass('faq-img-active');
  }

  var vidos = $('.video iframe');
  (vidos).hide();


  // sliders
  $('.general-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.vertical-slider',
    prevArrow: $('#prev-arrow'),
    nextArrow: $('#next-arrow'),
    responsive: [
      { breakpoint: 769,
        settings: {
          arrows: true
        }
      }
    ]
  });

  $('.vertical-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.general-slider'
  });


  
});

var iframeIds = [];
jQuery('.video-wrapper iframe').each(function(k,v){
iframeIds.push(jQuery(v).attr('id'));
})
function onYouTubeIframeAPIReady() {
iframeIds.forEach(function(iframeId) {
  var player = new YT.Player(iframeId, {
    events: {
      onReady: onPlayerReady
    }
  });
});
}

var iframeObjects = [];
function onPlayerReady(event) {
var iframeObject = event.target;
var iframeElement = iframeObject.a;
var videoContainer = iframeElement.parentElement;
var play = videoContainer.querySelector(".start-video-btn");
// Push current iframe object to array
iframeObjects.push(iframeObject);
play.addEventListener("click", function() {
  // Pause all videos currently playing
  iframeObjects.forEach(function(scopediframeObject) {
    scopediframeObject.pauseVideo();
    var scopediframeElement = scopediframeObject.a;
    scopediframeElement.style.display = "none"
    jQuery(scopediframeElement).closest('.video-wrapper').find('.thumbnail_container').fadeIn();

    scopediframeElement.classList.remove('isPlaying');
  });
  setTimeout(function(){
    iframeObject.a.style.display = "block";
  }, 500)
  jQuery(iframeObject.a).closest('.video-wrapper').find('.thumbnail_container').fadeOut();
  iframeObject.playVideo();
  iframeElement.classList.add('isPlaying');
});
}

