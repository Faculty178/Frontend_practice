const sliderList = document.getElementById('sliderList');
let list = document.querySelectorAll('#sliderList li');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');

let fadeNext = () => {
    list = document.querySelectorAll('#sliderList li');
    //인덱스 번호 재정의 
    list[1].classList.add('on');
    list[1].style.opacity = '0';
    setTimeout(()=>{
        list[1].style.transition = '1s';
        list[1].style.opacity = '1';
    }, 1);
    setTimeout(()=>{
        list[0].classList.remove('on');
        sliderList.append(list[0]);

        list.forEach(li=>{
            li.style.transition = 'none';
        })

    }, 500);
}

fadeNext();

let fadePrev = () => {
    list = document.querySelectorAll('#sliderList li');
    list[list.length-1].classList.add('on');
    list[list.length-1].style.opacity = 0;
    setTimeout(()=>{
        list[list.length-1].style.transition = '0.5s';
        list[list.length-1].style.opacity = 1;
    }, 1);
    setTimeout(()=> {
        list[0].classList.remove('on');
        sliderList.prepend(list[list.length-1]);

        list.forEach(li=>{
            li.style.transition = 'none';
        })
    }, 500)
}




nextBtn.addEventListener('click', fadeNext);
prevBtn.addEventListener('click', fadePrev);
playBtn.addEventListener('click',()=>{
    let autoPlay = setInterval(fadeNext, 3000);
    autoPlay();
});
