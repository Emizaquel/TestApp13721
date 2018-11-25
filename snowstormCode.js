function snowScript(time, wind){
  var delSize = Math.random();
  var delxMove = (Math.random()*wind) - (0.3*wind);
  var delyMove = Math.random()*1 - 0.3;

  var textBoxes = document.querySelectorAll('[id^=flake]');
  var textToWrite;
  for(var i in textBoxes){
     console.log(i);
  }

  //setTimeout(snowScript(time), time);
}
