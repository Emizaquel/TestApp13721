function snowScript(time, wind){
  setTimeout(function () {
    var delSize = 0;
    var delxMove = 0;
    var delyMove = 0;
    var fTop = 0;
    var fLeft = 0;
    var fSize = 0;
    var fOpp = 1;

    var elems = document.getElementsByClassName("flake");

    for (var i = 0; i < elems.length; i++) {
      delSize = Math.random() - 0.5;
      delxMove = (Math.random()*wind) + (0.7*wind);
      delyMove = Math.random()*10 - 3;

      fSize = parseFloat(elems[i].style.width);
      fSize = (fSize + delSize);

      if(fSize < 1){
        fSize = 1;
      }else if (fSize > 5) {
        fSize = 5;
      }

      elems[i].style.height = delSize + "px";
      elems[i].style.width = delSize + "px";


      fTop = parseFloat(elems[i].style.top);
      fTop = (fTop+delyMove);
      if(fTop < 0){
        fTop = fTop + 1;
      }else if (fTop > 90) {
        fTop = 0;
      }
      elems[i].style.top = Math.ceil(fTop) + "%";

      fLeft = parseFloat(elems[i].style.left);
      fLeft = (fTop+delxMove);
      if(fTop < 0){
        fLeft = fLeft + 1;
      }else if (fLeft > 98) {
        fLeft = Math.random()*98;
      }

      elems[i].style.left = (Math.ceil(fLeft*1000)/1000) + "%";
    }



    snowScript(time, wind);
  }, time);
}
