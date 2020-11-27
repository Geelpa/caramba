function play() {
    var audio = document.getElementById("audio");
    audio.play();
    var audio = document.getElementById("time");
    audio.play();
    
  
  }

  window.addEventListener("keydown", checkKeyPress, false);

  function checkKeyPress(key) {
      if (key.keyCode == 82) {
          setTimeout(()=>{window. location = 'sec-page.html' },1750);
          var audio = document.getElementById("audio");
          audio.play();
          var audio = document.getElementById("time");
          audio.play();
          
      }
  }
  
  