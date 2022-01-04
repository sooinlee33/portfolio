//common.js


var $menuBtn = document.querySelector(".menuBtn");
var $closeBtn = document.querySelector(".closeBtn");
var $nav = document.querySelector("nav");

$menuBtn.addEventListener("click", function(){
  $menuBtn.classList.remove("active");
  $closeBtn.classList.add("active");
  $nav.classList.add("active");

});
$closeBtn.addEventListener("click", function(){
  $closeBtn.classList.remove("active");
  $menuBtn.classList.add("active");
  $nav.classList.remove("active");
});

