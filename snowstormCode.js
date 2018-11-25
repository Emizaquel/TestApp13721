function snowScript(time, wind){

  var delSize = 0;
  var delxMove = 0;
  var delyMove = 0;
  var fTop = 0;
  var fLeft = 0;
  var fSize = 0;
  var fOpp = 1;
  while (true) {
    var elems = document.getElementsByClassName("flake");
    
    for (var i = 0; i < elems.length; i++) {
      delSize = Math.random();
      delxMove = (Math.random()*wind) - (0.3*wind);
      delyMove = Math.random()*10 - 3;

      fTop = parseFloat(elems[i].style.top);
      fTop = (fTop+delyMove);
      if(fTop < 0){
        fTop = fTop + 1;
      }else if (fTop > 90) {
        fTop = 0;
      }
      elems[i].style.top = fTop + "%";

      fLeft = parseFloat(elems[i].style.top);
      fLeft = (fTop+delxMove);
      if(fTop < 0){
        fLeft = fLeft + 1;
      }else if (fLeft > 98) {
        fLeft = Math.random()*98;
      }

      elems[i].style.top = fTop + "%";
  }
}
