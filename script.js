let introtext=document.querySelector(".intro-text")
// Intro text animation ------------------
window.addEventListener("load",()=>{
  let typed = new Typed('.intro-text', {
  strings:["Welcome to Ranjith's Creative Hub!"],
  typeSpeed:70,
  backSpeed:20,
  loop:false
});
})

// work section animation effect 
const scrollers = document.querySelectorAll(".work-container");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation();
}

function addAnimation(){
  scrollers.forEach((scroller)=>{
    scroller.setAttribute("data-animated", true);
  });
}