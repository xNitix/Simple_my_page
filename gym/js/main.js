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
  let clicksRequired = 8; // Liczba kliknięć potrzebnych do odblokowania
  let clickCount = 0;

  const image = document.getElementById("myImage1");
  const counter = document.getElementById("clickCounter1");
  const overlay = document.getElementById("overlay");

  image.style.filter = "blur(100px)"; // Początkowe zamazanie
  overlay.style.cursor = "pointer";

  overlay.addEventListener("click", function() {
      clickCount++;

      if (clickCount >= clicksRequired) {
          image.style.filter = "none"; // Usuwa efekt zamazania po osiągnięciu wymaganej liczby kliknięć
          overlay.style.display = "none";
          counter.innerHTML = "";
      } else {
          const blurAmount = (clicksRequired - clickCount) * 10;
          image.style.filter = `blur(${blurAmount}px)`; // Zwiększa efekt zamazania
          counter.innerHTML = `Kliknij jeszcze ${clicksRequired - clickCount} razy, aby odblokować zdjęcie.`;
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let clicksRequired = 8; // Liczba kliknięć potrzebnych do odblokowania
  let clickCount = 0;

  const image = document.getElementById("myImage2");
  const counter = document.getElementById("clickCounter2");
  const overlay = document.getElementById("overlay2");

  image.style.filter = "blur(100px)"; // Początkowe zamazanie
  overlay.style.cursor = "pointer";

  overlay.addEventListener("click", function() {
      clickCount++;

      if (clickCount >= clicksRequired) {
          image.style.filter = "none"; // Usuwa efekt zamazania po osiągnięciu wymaganej liczby kliknięć
          overlay.style.display = "none";
          counter.innerHTML = "";
      } else {
          const blurAmount = (clicksRequired - clickCount) * 10;
          image.style.filter = `blur(${blurAmount}px)`; // Zwiększa efekt zamazania
          counter.innerHTML = `Kliknij jeszcze ${clicksRequired - clickCount} razy, aby odblokować zdjęcie.`;
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let clicksRequired = 8; // Liczba kliknięć potrzebnych do odblokowania
  let clickCount = 0;

  const image = document.getElementById("myImage3");
  const counter = document.getElementById("clickCounter3");
  const overlay = document.getElementById("overlay3");

  image.style.filter = "blur(100px)"; // Początkowe zamazanie
  overlay.style.cursor = "pointer";

 overlay.addEventListener("click", function() {
      clickCount++;

      if (clickCount >= clicksRequired) {
          image.style.filter = "none"; // Usuwa efekt zamazania po osiągnięciu wymaganej liczby kliknięć
          overlay.style.display = "none";
          counter.innerHTML = "";
      } else {
          const blurAmount = (clicksRequired - clickCount) * 10;
          image.style.filter = `blur(${blurAmount}px)`; // Zwiększa efekt zamazania
          counter.innerHTML = `Kliknij jeszcze ${clicksRequired - clickCount} razy, aby odblokować zdjęcie.`;
      }
  });
});

