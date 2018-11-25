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
      delxMove = ((Math.random()*wind) + (0.7*wind))*0.00001;
      delyMove = Math.random()*5 - 2;

      fSize = parseFloat(elems[i].style.width);
      fSize = (fSize + delSize);

      if(fSize < 0.1){
        fSize = 1;
      }else if (fSize > 7) {
        fSize = 5;
      }
      fSize = Math.ceil(fSize*1000)/1000;
      elems[i].style.height = fSize + "px";
      elems[i].style.width = fSize + "px";


      fTop = parseFloat(elems[i].style.top);
      fTop = (fTop+delyMove);
      if(fTop < 0){
        fTop = fTop + 1;
      }else if (fTop > 90) {
        fTop = 0;
      }
      elems[i].style.top = Math.ceil(fTop*100)/100 + "%";

      fLeft = parseFloat(elems[i].style.left);
      fLeft = (fTop+delxMove);
      if (fLeft > 98) {
        fLeft = Math.random()*98;
      }

      elems[i].style.left = (Math.ceil(fLeft*10000000)/10000000) + "%";
    }



    snowScript(time, wind);
  }, time);
}
