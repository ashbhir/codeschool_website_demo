jQuery(document).ready(function($) {
  $('.link-like').on('click',function(e){
    e.preventDefault();
    $(this).text('Liked')
           .addClass('link-liked');
  });
  $('.link-add').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('form').toggleClass('form-added');
  });
  $('.name').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.overlay').addClass('overlay-added');
  });

});