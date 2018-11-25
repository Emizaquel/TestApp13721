function snowScript(time, wind){

  var elems = document.getElementsByClassName("flake");

  // var delSize = 0;
  // var delxMove = 0;
  // var delyMove = 0;
  // var fTop = 0;

  for (var i = 0; i < elems.length; i++) {
      // delSize = Math.random();
      // delxMove = (Math.random()*wind) - (0.3*wind);
      // delyMove = Math.random()*10 - 3;
      // fTop = parseFloat(elems[i].style.top);
      // if(fTop < 0){
      //   fTop = fTop + 1;
      // }else if (fTop > 90) {
      //   fTop = 0;
      // }
      // elems[i].style.top = (fTop-delyMove) + "%";
      console.log(parseFloat(elems[i].style.top));
  }

  //setTimeout(snowScript(time), time);
}
