for(var i=0; i<5; i++) 
  {
   var temp = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
   var temp = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
  }
  
  var song1 = new Audio();
  song1.src = "music/songa.mp3";
  
  var song2 = new Audio();
  song2.src = "music/songb.mp3";
  
  var song3 = new Audio();
  song3.src = "music/songc.mp3";

  var song4 = new Audio();
  song4.src = "music/songd.mp3";

  var song5 = new Audio();
  song5.src = "music/songe.mp3";
  
  function playsong()
  {
   var songId = this.innerHTML;
  
   switch (songId) {
    case "a":
     song1.play();
     break;
  
    case "b":
     song2.play();
     break;
  
    case "c":
     song3.play();
     break;
  
    case "d":
     song4.play();
     break;
  
    case "e":
     song5.play();
     break;
  
    default:
     console.log("wrong input");
     break;
   }
  }
  
  function pausesong()
  {
   var songId = this.innerHTML;
  
   switch (songId) {
    case "a":
     song1.pause();
     break;
  
    case "b":
     song2.pause();
     break;
  
    case "c":
     song3.pause();
     break;
  
    case "d":
     song4.pause();
     break;
  
    case "e":
     song5.pause();
     break;
  
    default:
     console.log("wrong input");
     break;
   }
  }