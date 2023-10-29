//########### zegar#######
 function clock()
 {
    var date = new Date();
    var hour = date.getHours();
    if(hour < 10)
    {
        hour = "0" + hour;
    }
    var min = date.getMinutes();
    if(min < 10)
    {
        min = "0" + min;
    }
    var sec = date.getSeconds();
    if(sec < 10)
    {
        sec = "0" + sec;
    }

    document.getElementById("zegar").innerHTML = hour + ":" + min + ":" + sec;

    setTimeout("clock()",1000);
 }
//########################

function button() {
    var x = document.getElementById("ukryj-pokaz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  jQuery(function($)
  {
    $.scrollTo(0);

    $('#link1').click(function() {$.scrollTo($('#his'),500);});
    $('#link2').click(function() {$.scrollTo($('#mit'),500);});
    $('#link3').click(function() {$.scrollTo($('#zob'),500);});
    $('#link4').click(function() {$.scrollTo($('#cie'),500);});
    $('.scrollup').click(function() {$.scrollTo($('body'),1000);});

  });

  $(window).scroll(function()
  {
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  }
  );

});
