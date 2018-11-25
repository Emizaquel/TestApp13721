function snowScript(time, wind){

  var elems = document.getElementsByClassName("flake");

  elems.forEach(function(elem){
  });
  for (var i = 0; i < elems.length; i++) {
      var delSize = Math.random();
      var delxMove = (Math.random()*wind) - (0.3*wind);
      var delyMove = Math.random()*1 - 0.3;
      elems[i].style.top = elem.style.top-delyMove;
  }

  //setTimeout(snowScript(time), time);
}
