function snowScript(time, wind){

  var elems = document.getElementsByClassName("flake");

  // var delSize = Math.random();
  // var delxMove = (Math.random()*wind) - (0.3*wind);
  // var delyMove = Math.random()*1 - 0.3;
  // var fTop = elems[0].style.top;

  for (var i = 0; i < elems.length; i++) {
      // delSize = Math.random();
      // delxMove = (Math.random()*wind) - (0.3*wind);
      // delyMove = Math.random()*10 - 3;
      // fTop = parsefloat(elems[i].style.top);
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
