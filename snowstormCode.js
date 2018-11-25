function snowScript(time, wind){

  var elems = document.getElementsByClassName("flake");

  elems.forEach(function(elem){
      var delSize = Math.random();
      var delxMove = (Math.random()*wind) - (0.3*wind);
      var delyMove = Math.random()*1 - 0.3;
      elem.style.top = elem.style.top-delyMove;
  });

  //setTimeout(snowScript(time), time);
}
