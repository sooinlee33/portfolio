/* ====================INDEX SCROLL========================== */

$(document).ready(function(){
    var elm = "main section.box";  
    $(elm).each(function(index){
      $(this).on("mousewheel DOMMouseScroll", function(e){
        var delta = 0; 
        if(event.wheelDelta){
          delta = event.wheelDelta / 120;
          if(window.opera){  
            delta = -delta;
          }
        }else if(e.detail){
          
          // console.log("detail값 발생 : " + e.detail);
          delta = -e.detail / 7;
        }
  
        var moveTo = $(window).scrollTop(); 
        var elmIndex = $(elm).eq(index);
        console.log(elmIndex);  
  
        if(delta < 0){
          try{ 
            if($(elmIndex).next() != undefined){  
              moveTo = $(elmIndex).next().offset().top;  
              
              $(elm).removeClass("active");
              $(elmIndex).next().addClass("active");
  
              var $cur_index = $(".box.active").index(); 
              console.log($cur_index);
            }
          }catch(e){  
            //console.log("예외처리"); 
          }
  
        }else{
          //console.log("마우스 휠 올림");
          try{  
            if($(elmIndex).prev() != undefined){  
              moveTo = $(elmIndex).prev().offset().top;  
  
              $(elm).removeClass("active");
              $(elmIndex).prev().addClass("active");
              
              var $cur_index = $(".box.active").index(); 
              console.log($cur_index);
            }
          }catch(e){
            console.log("예외처리");
          }
        }
        $("html, body").stop().animate({scrollTop : moveTo + "px"}, 200);
      
      });
    });
  
    var key_num = 0;
    $(document).on("keydown", function(evt){
      key_num = evt.keyCode;
  
      var $target = $(".box.active").index(); 
      console.log($target);
  
      if(key_num == 40 || key_num == 34){ 
        try{
          if($target == $(elm).length - 1){
          }else{
            $("html, body").stop().animate({scrollTop : $(elm).eq($target + 1).offset().top}, 200);
  
            $(elm).removeClass("active");
            $(elm).eq($target + 1).addClass("active");
    
          }
        }catch(evt){
  
        }
      }else if(key_num == 38 || key_num == 33){  
        try{
          if($target == 0){
          }else{
            $("html, body").stop().animate({scrollTop : $(elm).eq($target - 1).offset().top}, 200);
  
            $(elm).removeClass("active");
            $(elm).eq($target - 1).addClass("active");
    
          }
        }catch(evt){
  
        }
      }else if(key_num == 36){ 
        try{
          $("html, body").stop().animate({scrollTop:$(elm).first().offset().top}, 500);
          $(elm).removeClass("active");
          $(elm).first().addClass("active");
        }catch(evt){
  
        }
      }else if(key_num == 35){  
        try{
          $("html, body").stop().animate({scrollTop:$(elm).last().offset().top}, 500);
          $(elm).removeClass("active");
          $(elm).last().addClass("active");
        }catch(evt){
  
        }
      }
    });
  
    var $t_start;  
    var $t_end;  
    var $t_move; 
  
    function prev(evt){
      try{
        var $target = $(".box.active").index();
        if($target != 0){
          $("html, body").stop().animate({scrollTop:$(elm).eq($target - 1).offset().top}, 500, function(){
            $(elm).removeClass("active");
            $(elm).eq($target - 1).addClass("active");
          });
        }
      }catch(evt){
  
      }
    }
  
    function next(evt){
      try{
        var $target = $(".box.active").index();
        if($target != $(elm).length - 1){
          $("html, body").stop().animate({scrollTop:$(elm).eq($target + 1).offset().top}, 500, function(){
            $(elm).removeClass("active");
            $(elm).eq($target + 1).addClass("active");
          });
        }
      }catch(evt){
  
      }
    }
  
    function touchmove(evt){ 
      console.log(evt);  
      $t_move = $t_start - $t_end;
      console.log($t_move);
  
      if($t_move > 7){ 
        next(evt);
      }else if($t_move < -7){
        prev(evt);
      }
    }
  
    $(elm).on("touchstart", function(event){
      console.log("터치의 시작 : " + event.changedTouches[0].pageY);
      $t_start = event.changedTouches[0].pageY;
    });
  
    $(elm).on("touchend", function(event){
      console.log("터치의 종료 : " + event.changedTouches[0].pageY);
  
      $t_end = event.changedTouches[0].pageY;
      touchmove();
    });
    var $m_down;
    var $m_up;
    var $m_move;
  
    function mousemove(evt){
      $m_move = $m_down - $m_up;  
      if($m_move > 20){
        next(evt);
      }else if($m_move < -20){
        prev(evt);
      }
    }
  
    $(elm).on("mousedown", function(evt){
      console.log("마우스 다운");
      console.log(evt.pageY);
      $m_down = evt.pageY;
    });
  
    $(elm).on("mouseup", function(evt){
      console.log("마우스 업");
      console.log(evt.pageY);
      $m_up = evt.pageY;
  
      mousemove();
    });
  
    /* ==================== EXPLORE BUTTON ======================= */


    var $locate = $("main #content").offset().top;
    console.log($locate);

  
    $("main #home .wrap button").on("click", function(){
    $("html, body").stop().animate({scrollTop : $locate + "px"}, 500);
    });
    
  
  
  
});

/* ==================== TYPING ======================= */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["UX design", "UI design", "Web development", "Graphic design", "and Fashion!"];
const typingDelay = 70;
const erasingDelay = 70;
const newTextDelay = 1500; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

