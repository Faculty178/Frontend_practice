const h1 = document.querySelector("h1");
const play = document.querySelector("button");
//camelCase로 쓰는 타입에 익숙해질 것 
let check = 0

function change(){
    if(check === 0){
        h1.innerText = "Good Afternoon";
        h1.style.color = "Orange";
        check = 1;
    }
    else{
        h1.innerText = "Good Morning";
        h1.style.color = "Deepskyblue";
        check = 0;
    }
   //if(h1.innerText === "내용"){}
   //으로 해도 괜찮지만 텍스트가 너무 길고 복잡해지므로 변수 하나를 생성해서 쓰는 쪽이 편함 
}

play.addEventListener("click", change);


