function scatter(time, wind){
  var elems = document.getElementsByClassName("flake");
  for (var i = 0; i < elems.length; i++) {
    fSize = 1 + 4*Math.random();
    elems[i].style.height = fSize + "px";
    elems[i].style.width = fSize + "px";
    elems[i].style.left = Math.random()*98 + "%";
    elems[i].style.top = Math.random()*90 + "%";
    elems[i].style.opacity = Math.random();
  }
  snowScript(time, wind);
}

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

      delyMove = Math.random()*5 - 2;

      fSize = parseFloat(elems[i].style.width);
      delSize = Math.random() - 0.5;
      fSize = (fSize + delSize);

      if(fSize < 1){
        fSize = 1;
      }else if (fSize > 4) {
        fSize = 4;
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
      delxMove = (Math.random()*wind);
      fLeft = (fLeft+delxMove);
      if (fLeft > 98) {
        fLeft = Math.random()*98;
      }
      elems[i].style.left = (Math.ceil(fLeft*1000000000)/1000000000) + "%";
    }



    snowScript(time, wind);
  }, time);
}
