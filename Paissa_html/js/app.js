//링크 작동시키기 

const links = document.getElementById('links');
const icons = links.querySelectorAll('ul li');

icons[0].addEventListener("click", (e)=>{
    e.preventDefault();
    window.open('https://www.facebook.com');
})

icons[1].addEventListener("click", (e)=>{
    e.preventDefault();
    window.open('https://www.twitter.com');
})

icons[2].addEventListener("click", (e)=>{
    e.preventDefault();
    window.open('https://www.youtube.com');
})

icons[3].addEventListener("click", (e)=>{
    e.preventDefault();
    window.open('https://www.google.com');
})


//이벤트 버튼 작동

const events = document.getElementById('event');
const event_list = events.querySelector('ul');
const pagi = document.getElementById('pagination');
const buttons = pagi.querySelectorAll('a');

const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];

const slider1 = document.querySelector('#event ul li:first-child');
const slider2 = document.querySelector('#event ul li:nth-child(2)');
const slider3 = document.querySelector('#event ul li:last-child');

console.log(slider1);
console.log(slider2);
console.log(slider3);

function event1(e){
    e.preventDefault();
    event_list.prepend(slider1);
    button1.style.backgroundColor = "rgb(255, 94, 0)";
    button2.style.backgroundColor = "white";
    button3.style.backgroundColor = "white";
}

function event2(e){
    e.preventDefault();
    event_list.prepend(slider2);
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "rgb(255, 94, 0)";
    button3.style.backgroundColor = "white";
}

function event3(e){
    e.preventDefault();
    event_list.prepend(slider3);
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";
    button3.style.backgroundColor = "rgb(255, 94, 0)";
}


button1.addEventListener("click", event1);
button2.addEventListener("click", event2);
button3.addEventListener("click", event3);



//스크롤이 일정 이상 내려가면 nav가 최상단에 고정되도록 설정 ??
const gnb = document.getElementById('gnb');
const STICKY = 'sticky';

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    if(scroll >= 250){
        gnb.classList.add(STICKY);
    }
    else if (scroll < 250){
        gnb.classList.remove(STICKY);
    }

})