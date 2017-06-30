$(document).ready(function(){

  // On page load
  $(".checkbox input").each(function() {

    // Set checkboxes from cookie
    var cookie = $.cookie($(this).attr('id'));
    if (cookie && cookie == "true") {
        $(this).prop('checked', cookie);
    }

    // Calculate progress
    calculateProgress()
  });

  // When user checks checkbox
  $(".checkbox input").change(function() {

    // Update cookie from checkbox click
    var id = $(this).attr("id");
    var checked = $(this).prop('checked')
    $.cookie(id, checked, {
        path: '/',
        expires: 3600
    });

    // Calculate progress
    calculateProgress();

    // Send analytics event
    ga('send', 'event', id, checked ? 'checked' : 'un-checked');
  });

  // When user clicks link
  $("a").click(function(){
    var link = $(this).attr('href');

    // Send analytics event
    ga('send', 'event', id, 'clicked');
  })

  // Helper function for progress
  function calculateProgress(){
    var completed = 0;
    var total = $(".checkbox input").length;
    $(".checkbox input").each(function(){
      if($(this).prop('checked') === true){
        completed++;
      }
    });

    var percent = Math.floor((completed / total) * 100);
    $('.progress-number').html(percent);
    $('.progress-indicator__bar').css('width', percent + "%");
  }
});
