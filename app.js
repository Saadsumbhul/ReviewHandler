let firstSlide = document.getElementById('firstSlide');
let secondSlide = document.getElementById('secondSlide');
let thirdSlide = document.getElementById('thirdSlide');
// h1 ki slide ke liye
let curveline1 = document.getElementById('curveline1');
let curveline2 = document.getElementById('curveline2');
let curveline3 = document.getElementById('curveline3');

// console.log(thirdSlide);
// function backward
function firstHandlera(){
    firstSlide.style.display='none'
    secondSlide.style.display='flex'

    curveline1.style.visibility='hidden'
    curveline2.style.visibility='visible'
}
function firstHandlerc(){
    secondSlide.style.display='none'
    thirdSlide.style.display='flex'

    curveline2.style.visibility='hidden'
    curveline3.style.visibility='visible'
}
function firstHandlere(){
    secondSlide.style.display='none'
    thirdSlide.style.display='none'
    firstSlide.style.display='flex'

    curveline3.style.visibility='hidden'
    curveline1.style.visibility='visible'
}
// function forward
function secondHandlerb(){
    firstSlide.style.display='none'
    secondSlide.style.display='flex'

    curveline1.style.visibility='hidden'
    curveline2.style.visibility='visible'
}
function secondHandlerd(){
    secondSlide.style.display='none'
    thirdSlide.style.display='flex'

    curveline2.style.visibility='hidden'
    curveline3.style.visibility='visible'
}
function secondHandlerf(){
    secondSlide.style.display='none'
    thirdSlide.style.display='none'
    firstSlide.style.display='flex'

    curveline3.style.visibility='hidden'
    curveline1.style.visibility='visible'
}
