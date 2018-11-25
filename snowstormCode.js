function snowScript(time, wind){

  var elems = document.getElementsByClassName("flake");

  var delSize = Math.random();
  var delxMove = (Math.random()*wind) - (0.3*wind);
  var delyMove = Math.random()*1 - 0.3;
  var fTop = elems[0].style.top;

  for (var i = 0; i < elems.length; i++) {
      delSize = Math.random();
      delxMove = (Math.random()*wind) - (0.3*wind);
      delyMove = Math.random()*1 - 0.3;
      fTop = elems[i].style.top;
      if(fTop < 0){
        fTop = fTop + 1;
      }
      elems[i].style.top = (fTop-delyMove) + "%";
  }

  //setTimeout(snowScript(time), time);
}
