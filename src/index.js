$(document).ready(function() {
  $('.test-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,  });

    $(function() {
    $('div').mousetip('.tip');
    });

  $('#greenscreen').vintageTxt({
    text: [
      "When in the course of human events,", "it becomes necessary to learn", "to do cool stuff with JavaScript..."
    ],
    textSpeed: 150,
    linePause: 500,
    promptEnabled: false,
    onFinishedTyping: function() {
      $('#foo').delay(500).fadeOut(2000);
    }
  });

});
