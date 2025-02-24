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
offSlide();

  }
}

function prevSlide(){
  reponseItems();
  if(index>=1){
  index--;
  let move =(100/items)*index;
  prev.style.pointerEvents=''
sliderWrap.style.transform=`translateX(${move}%)`;
offSlide();
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


//owl carousel

const storePrev = document.querySelector('#store-angels .prev');
const storeNext = document.querySelector('#store-angels .next');
const owlCarousel = document.querySelector('.owl-carousel-inner');
const owlSlide = document.querySelector('.owl-carousel .slides');
const SlideWidth = owlSlide.getBoundingClientRect().width;
const slideMargin =parseFloat(window.getComputedStyle(owlSlide).marginRight);
const slideTrueWidth = SlideWidth+slideMargin;

storePrev.addEventListener('click',prevFunction)
storeNext.addEventListener('click',nextFunction)

index=0;
const slides = document.querySelectorAll('.slides');

function nextFunction(){
  if(index<slides.length-4){
  index++;
  owlCarousel.style.transform=`translateX(${slideTrueWidth*index}px)`;
fadeSlide();
  }
}
function prevFunction(){
  if(index>0){
    index--;
  owlCarousel.style.transform=`translateX(${slideTrueWidth*index}px)`;
  console.log(index)
  fadeSlide();
  }
}

function fadeSlide(){

  for(i=0;i<slides.length;i++){
    slides[i].classList.remove('active');

    for(j=index+1;j<=index+3;j++){
  slides[j].classList.add('active');
    }
  }
}
fadeSlide();



//counter
const countNumber = document.querySelectorAll('.counter-number span');

delay=40;
index=0;
countNumber.forEach((countNumb)=>{
const numbData=parseInt(countNumb.getAttribute('data-numb'));
  console.log(numbData)


  let currentNum = parseInt(countNumb.innerText);
const finalNumb=currentNum;
let hasreset =false;
const startInterval = () => {
  const counterInterval = setInterval(() => {
 
    countNumb.innerText = currentNum;
    


    if(currentNum<9){
      currentNum += 1;
      updateNumber();
    }else{
      currentNum=0;
      updateNumber();
    }
  

  if(currentNum == finalNumb) {
    clearInterval(counterInterval);
  }

   }, 100);

}

function updateNumber(){
  const exitingSpan = countNumb.cloneNode(true);
  exitingSpan.classList.add('exit');
  countNumb.parentNode.appendChild(exitingSpan);

  setTimeout(() => {
    exitingSpan.remove();
  }, 100);
  countNumb.classList.remove('enter');
  countNumb.classList.remove('enter-active')
  const newSpan = countNumb.cloneNode(true);
  newSpan.innerText = currentNum;
  newSpan.classList.add('enter');
  
  countNumb.parentNode.replaceChild(newSpan, countNumb);
    // countNumb.parentNode.appendChild(newSpan);

  


  requestAnimationFrame(() => {
    setTimeout(()=>{
      newSpan.classList.add('enter-active');
      exitingSpan.classList.add('exit-active');
    },0)
  });

  countNumb=newSpan;


  }
setTimeout(startInterval,(delay))
});


//dropdown
const servicBtn=document.querySelector('.servic-btn');
const servicDropDown = document.querySelector('.contact .dropDown');
let servicExpanded=false;
servicBtn.addEventListener('click',()=>{  

  if(servicExpanded){
    servicDropDown.classList.add('scale-y-0');
    servicBtn.classList.remove('rounded-b-none');
    servicBtn.querySelector('svg').classList.remove('-rotate-90');
    servicExpanded=false;
  }else{
  servicDropDown.classList.remove('scale-y-0');
  servicBtn.classList.add('rounded-b-none');
  servicBtn.querySelector('svg').classList.add('-rotate-90');
  servicExpanded=true;
  }

})

const dropDownOptions = document.querySelectorAll('.dropDown .option');


dropDownOptions.forEach(option=>{
option.addEventListener('click',()=>{

  servicDropDown.classList.add('scale-y-0');
  servicBtn.classList.remove('rounded-b-none');
  servicExpanded=false;
  servicBtn.querySelector('span').innerHTML = option.innerHTML;


})
})

//validation

const username =document.querySelector('.contact-inputs #name');
const number=document.querySelector('.contact-inputs #number');
const email=document.querySelector('.contact-inputs #email');
const loginForm=document.querySelector('.contact-inputs form');

loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  checkInputs();
})

function checkInputs(){

  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
    const emailValue = email.value.trim();
  

    if (usernameValue === "") {
        setEror(username, 'این فیلد نمیتواند خالی باشد')
    } else {
        setSuccess(username);
    }


    if (emailValue === '') {
        setEror(email, 'این فیلد نمیتواند خالی باشد');
    } else if (!isEmail(emailValue)) {
        setEror(email, 'ایمیل واردشده صحیح نیست');
    } else {
        setSuccess(email);
    }


    if (numberValue === '') {
      setEror(number, 'این فیلد نمیتواند خالی باشد');
    } else if (!isNumber(numberValue)) {
        setEror(number, 'شماره واردشده صحیح نیست');
    } else {
        setSuccess(number);
    }
    }


function setEror(input, massage) {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  span.innerHTML = massage;
  span.classList.remove('hidden');

  
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  span.classList.add('hidden');
}

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberPattern =/^(\+98|0098|98|0)?9\d{9}$/;
function isEmail(email) {
    return emailPattern.test(email);
}

function isNumber(number){
    return numberPattern.test(number);
}