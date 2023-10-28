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

  var cards = ["skates.png","skis.png","roller.png","skates.png","keyboard.png",
  "roller.png","skis.png","keyboard.png"];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(cards);

  for (var i = 0; i < 8; i++) {
    var card = document.getElementById('c' + i);
    card.addEventListener("click", function(event) {
      revealCard(event.target.id);
    });
  }

  var oneVisible = false;
  var visible_nr;
  var lock = false;
  var parisleft = 4;

  function revealCard(nr)
  {
    nr = nr.substr(1);
    var obraz = "url(jpg/" + cards[nr] + ")";

    var opacityValue = $('#c'+nr).css('opacity');

    if(opacityValue != 0 && lock == false)
    {
      lock = true;
      $("#c"+nr).css("background-image",obraz);
      $("#c"+nr).addClass('cardA');
      $("#c"+nr).removeClass('card');

      if(oneVisible == false)
      {
        oneVisible = true;
        visible_nr = nr;
        lock = false;
      }
      else
      {
        if(cards[visible_nr] == cards[nr] && visible_nr != nr)
        {
          setTimeout(function() {hide2cards(nr, visible_nr)},700);
        }
        else{
          setTimeout(function() {restore2cards(nr, visible_nr)},1000);
        }
        oneVisible = false;
      }
    }
    function hide2cards(nr1, nr2)
      {
        $('#c'+nr1).css('opacity','0');
        $('#c'+nr2).css('opacity','0');
        parisleft--;
        lock = false;

        if(parisleft == 0)
        {
          var ar = document.querySelector('.art');
          var wi = document.querySelector('.win');

          ar.style.display = 'none';
          wi.style.display = 'grid';
        }
      }

    function restore2cards(nr1, nr2)
      {
        $("#c"+nr1).css("background-image",'url(jpg/mark.png');
        $("#c"+nr1).addClass('card');
        $("#c"+nr1).removeClass('cardA');

        $("#c"+nr2).css("background-image",'url(jpg/mark.png');
        $("#c"+nr2).addClass('card');
        $("#c"+nr2).removeClass('cardA');

        lock = false;
      }
  }
});