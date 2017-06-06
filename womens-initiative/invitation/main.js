$(function(){
  if (window.getComputedStyle(document.body).mixBlendMode == undefined) {
    $(".title").addClass("edge");
    $(".breathe").addClass("edge");
    $(".breathe2").addClass("edge");
  }
  $('.breathe').fadeIn(1000);
  $('.breathe').fadeOut(2000);
  var elem = document.getElementById("animate");
  var elem2 = document.getElementById("animate2"); 
  var pos = 700;
  var pos2 = 800;
  var partdone = false;
  var textdone = false;
  var id = setInterval(frame, 5);
  function frame() {
    if(!partdone){
      if (pos >= 810) {
        if(!textdone){
          $('.breathe2').fadeIn(750);
          $('.breathe2').fadeOut(1500);
        }
        partdone = true;
        textdone = true;
      } else if(pos < 600){
        pos = pos +1.5; 
        pos2 = pos2 +1.5;
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px';
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } else if(pos < 700){
        pos = pos +1; 
        pos2 = pos2 +1; 
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } else if(pos < 750){
        pos = pos +0.5; 
        pos2 = pos2 +0.5; 
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } else if(pos < 775){
        pos = pos + 0.25; 
        pos2 = pos2 + 0.25; 
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } else if(pos < 800){
        pos = pos + 0.1; 
        pos2 = pos2 + 0.1;
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } else {
        pos = pos + 0.05; 
        pos2 = pos2 + 0.05;
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      } 
  }
  }
  var id2 = setInterval(frame2, 5);
  function frame2() {
    if(partdone){
      if (pos <= 790) {
        partdone = false;
      }else{
        pos = pos - 0.025; 
        pos2 = pos2 - 0.025;
        elem.style.width = pos + 'px'; 
        elem.style.height = pos + 'px'; 
        elem2.style.width = pos2 + 'px'; 
        elem2.style.height = pos2 + 'px'; 
      }
    }
  }
});