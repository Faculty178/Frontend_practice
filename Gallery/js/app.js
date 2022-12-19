
const photo = document.getElementById('photo');
const photoList = document.getElementById('photoList');

const list = document.querySelectorAll('#photoList li a');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// function giveAttribute(e){
//     e.preventDefault();
//     let linkName = e.getAttribute('href');
//     console.log(linkName);
//     photo.src = `${linkName}`;
// }

// list.forEach((element)=>{
//     element.addEventListener('click', giveAttribute);
//     console.dir(element);
// })

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', (e)=>{
        e.preventDefault();
        let path = e.currentTarget.href;
        console.log(path);
        photo.src = `${path}`;

        //photo.src = `img/pic_${i+1}.jpg`; 해도 여긴 이름이 정직해서 괜찮긴 함 
    })
}

let position = 0;

prev.addEventListener('click', ()=>{
    position -= 100;
    if(position < -500){
        position = -500;
        return;
    }
    photoList.style.marginLeft = `${position}px`;
})

next.addEventListener('click', ()=>{
    position += 100;
    if(position > 0){
        position = 0;
        return;
    }
    photoList.style.marginLeft = `${position}px`;
})
