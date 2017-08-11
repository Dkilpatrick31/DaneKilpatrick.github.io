console.log("Hi, I see you've managed to find my portfolio! -Dane");

$( document ).ready(function() {

  $('a[href*=\\#]').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function() {
    $(document).scroll(function() {
      var x = $(this).scrollTop(),
        $nav = $(".navbar-fixed-top");
      if (x > 4300) {
        $nav.removeClass('scrolled');
      }
    });
  });

});
