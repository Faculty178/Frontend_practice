const snb = document.getElementsByClassName('snb');
const gnb = document.getElementById('gnb');
const header = document.getElementById('header');
const h2 = document.querySelector('#videoWrap h2');

function rollDown(){
    header.classList.add('on');
}

function rollBack(){
    header.classList.remove('on');
}

gnb.addEventListener('mouseenter', rollDown);
header.addEventListener('mouseleave', rollBack);
//어디에 해야 이쁘려나... 

function showText(){
    h2.style.opacity = 1;
}

setTimeout(showText, 1500);
