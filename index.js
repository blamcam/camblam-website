$(function(){
  $('.notes-container').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
  
  hljs.highlightAll();

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      if ($.attr(this, 'href') == "#top") {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
      }
      else {
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top - 50)
        }, 500);
      }
  });

  $(".wiggle").each(function(index) {
    var characters = $(this).text().split("");
    
    $this = $(this);
    $this.empty();
    $.each(characters, function (i, el) {
      $this.append("<span style='--n:" + (index + i) + "'>" + el + "</span");
    });
  });

});
