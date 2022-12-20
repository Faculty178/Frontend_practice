const snb = document.getElementsByClassName('snb');
const li = document.querySelectorAll('#gnbList > li');
console.log(li);

li.forEach((li, i)=>{
    li.addEventListener('mouseenter', (e)=>{
        e.currentTarget.style.overflow = 'visible';
        e.currentTarget.children[1].style.opacity = "1";
    })

    li.addEventListener('mouseleave', (e)=>{
        e.currentTarget.children[1].style.opacity = "0";
        setTimeout((e)=> {
            e.currentTarget.style.overflow = 'hidden';
        }, 500)
    })
})

// li.forEach((li, i)=>{
//     functions here
// })