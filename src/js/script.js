//sticky navBar
window.addEventListener("scroll", stickyNav);
window.addEventListener("resize", stickyNav);
window.addEventListener("load", stickyNav);

const cont = document.querySelector(".cont-nav");

function stickyNav() {
  if (window.innerWidth < 1024) {
    cont.classList.remove("sticky");
  } else {
    const header = document.querySelector(".nav-bar");
    const rect = header.getBoundingClientRect();
    const headerBottom = rect.bottom + rect.height;
    if (headerBottom <= window.scrollY) {
      cont.classList.add("sticky");
    } else {
      cont.classList.remove("sticky");
    }
  }
}
//sticky navBar

//search
const searchBtn = document.querySelector('.search-box');
const searchSection = document.querySelector('.search');
const searchLayer = document.querySelector('.search-layer')
searchBtn.addEventListener('click',()=>{
searchSection.classList.remove('scale-y-0');
})
searchLayer.addEventListener('click',()=>{
  searchSection.classList.add('scale-y-0');
})



//search

//mobile menu
const trigger = document.querySelector(".nav-trigger");
const navOverlay = document.querySelector(".mobile-overlay");
const close = document.querySelector(".mobile-menu .close");
const mobileMenu = document.querySelector(".mobile-menu");
trigger.addEventListener("click", () => {
openMenu();
});
navOverlay.addEventListener("click", () => {
  closeMenu();
});
close.addEventListener("click", () => {
closeMenu();
});

function closeMenu(){
  navOverlay.classList.toggle("delay-500");
  mobileMenu.classList.toggle("delay-500");
  navOverlay.classList.add("translate-x-full");
  mobileMenu.classList.add("translate-x-full");
}
function openMenu(){
  navOverlay.classList.toggle("delay-500");
  mobileMenu.classList.toggle("delay-500");
  navOverlay.classList.remove("translate-x-full");
  mobileMenu.classList.remove("translate-x-full");
}

//mobile menu

//slider


const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const sliderWrap=document.querySelector('.slider-wrapper');
const slide=document.querySelectorAll('.slider-wrapper .slide');
responsive = [
  { breakpoint: { width: 576, item: 2 } },
  { breakpoint: { width: 1024, item: 4 } },
  { breakpoint: { width: 1280, item: 5 } }
]
let index = 0;



next.addEventListener("click", () => {
  nextSlide();
});
prev.addEventListener("click", () => {
  prevSlide();

});
window.addEventListener("resize", ()=>{
sliderWrap.style.transform=`translateX(0%)`;
index=0;
reponseItems();
offSlide();

});
function reponseItems(){
for (let i = 0; i < responsive.length; i++) {
  if (window.innerWidth > responsive[i].breakpoint.width) {
      items = responsive[i].breakpoint.item;
  }
}
}


function nextSlide(){
reponseItems();
  if(index<(slide.length-items)){
  index++;
  let move =(100/items)*index;
sliderWrap.style.transform=`translateX(${move}%)`;


  }
}

function prevSlide(){
  reponseItems();
  if(index>=1){
  index--;
  let move =(100/items)*index;
sliderWrap.style.transform=`translateX(${move}%)`;
  }
}
function offSlide(){
  reponseItems();
  if(index<1){
    prev.style.opacity=0.2;
    prev.style.pointerEvents='none';
  }else{
    prev.style.opacity=1;
    prev.style.pointerEvents='all';
  }
  if(index==(slide.length-items)){
    next.style.opacity=0.2;
    next.style.pointerEvents='none';
  }else{
    next.style.opacity=1;
    next.style.pointerEvents='all';
  }
}
offSlide();



//arrival animation


window.addEventListener('scroll',()=>{
  const sections= document.querySelectorAll('.animation')
const scrollPosition = window.scrollY + window.innerHeight;
  sections.forEach(section=>{
    const sectionPosition = section.offsetTop + section.offsetHeight * 0.1;
   if(scrollPosition > sectionPosition){
section.classList.add('animate-run')
  }
  })
})





