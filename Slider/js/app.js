const sliderList = document.getElementById('sliderList');
const list = document.querySelectorAll('#sliderList li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.replay');
const listCopy1 = list[0].cloneNode(true);
const listCopy2 = list[list.length-1].cloneNode(true);

let pos = 100;
let state = 1;

sliderList.append(listCopy1);
sliderList.prepend(listCopy2);

sliderList.style.transform = `translateX(-100%)`;

let moveNext= ()=> {
    if ( pos == 400 ) {
        sliderList.style.transition = '0s';
        sliderList.style.transform = `translateX(-100%)`;
        pos = 100;
        setTimeout(()=>{
            pos += 100;
            sliderList.style.transition = '1s';
            sliderList.style.transform = `translateX(-${pos}%)`; 
        }, 1)            
    }
    else {
        pos += 100;
        sliderList.style.transition = '1s';
        sliderList.style.transform = `translateX(-${pos}%)`;    
    }
    setTimeout(()=> { state = 1 }, 1000)
}
let movePrev= ()=> {
    if ( pos == 0 ) {
        sliderList.style.transition = '0s';
        sliderList.style.transform = `translateX(-${list.length*100}%)`;
        pos = 100;
        setTimeout(()=>{
            pos += 100;
            sliderList.style.transition = '1s';
            sliderList.style.transform = `translateX(-${pos}%)`; 
        }, 1)            
    }
    else {
        pos -= 100;
        sliderList.style.transition = '1s';
        sliderList.style.transform = `translateX(-${pos}%)`;    
    }  
    setTimeout(()=> { state = 1 }, 1000)  
}

let timer = setInterval(moveNext, 3000);

nextBtn.addEventListener('click', ()=>{
    if ( state == 1 ) {
        state = 0;
        clearInterval(timer)
        moveNext();
    }
})
prevBtn.addEventListener('click', ()=>{
    if ( state == 1 ) {
        state = 0;
        clearInterval(timer)
        movePrev();
    }
})
playBtn.addEventListener('click', ()=>{
    timer = setInterval(moveNext, 3000);
})