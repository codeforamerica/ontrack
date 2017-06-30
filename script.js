$(document).ready(function(){
  $(".checkbox input").each(function() {
    var cookie = $.cookie($(this).attr('name'));
    console.log('fire')
    if (cookie && cookie == "true") {
        $(this).prop('checked', cookie);
    }
  });

  $(".checkbox input").change(function() {
    $.cookie($(this).attr("name"), $(this).prop('checked'), {
        path: '/',
        expires: 365
    });
  });
});
