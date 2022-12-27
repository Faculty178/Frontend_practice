let liLength = $("#sliderList li").length; //4
let num = 0;
let pos1 = -100 * (liLength - 2);
let pos2 = -100 * (liLength - 1);
let state = 1;

function nextInit(){
    for(let i = 2; i< liLength+1; i++){
        $("#sliderList").append($('.slider'+i));
    }
    $("#sliderList").css({marginLeft:0});

    state = 1;
}

function nextSlider(){
    state = 0;
    num ++;

    if(num === liLength){
        num = 0;
        $('#sliderList').append($(".slider1"))
                        .css({marginLeft: `${pos1}%`})
                        .animate({marginLeft:`${pos2}%`}, nextInit); //우 이것은 콜백지옥 
    }
    else{
        $('#sliderList').animate({marginLeft: "-=100%"}, ()=>{
            state = 1;
        });
    }

    $('#btnNum a').removeClass('on');
    $(`#btnNum a:eq(${num})`).addClass('on');
}

function prevInit(){
    for(i = liLength-1; i>0; i--){
        $('#sliderList').prepend($('.slider'+i));
    }
    $('#sliderList').css({marginLeft: pos2+"%"});

    state = 1;
}

function prevSlider(){
    state = 0;
    num --; 
    if( num == -1 ){
        num = liLength - 1;
        $('#sliderList').prepend($('.slider' + liLength))
                        .css({marginLeft: "-100%"})
                        .animate({ marginLeft : 0}, prevInit)
    }
    else{
         $('#sliderList').animate({marginLeft: "+=100%"}, ()=>{
            state = 1;
         });
    }

    $('#btnNum a').removeClass('on');
    $(`#btnNum a:eq(${num})`).addClass('on');
}

$('.nextBtn').on('click', ()=>{
    if(state == 1)
        nextSlider();
    
    clearInterval(timer);
});

$('.prevBtn').on('click', ()=>{
    if(state == 1)
        prevSlider();
    
    clearInterval(timer);
});

$('#btnPos a').on('click', (e)=>{
    e.preventDefault();
    clearInterval(timer);
    if(state == 0){
        timer = setInterval(nextSlider, 3000);
    }
})


function numBtnClick(e){
    e.preventDefault();
    clearInterval(timer);

    num = $(this).index();
    let btnMargin = num * (-100) + '%';
    $('#sliderList').animate({marginLeft: btnMargin});

    $('#btnNum a').not($(this)).removeClass('on');
    $(this).addClass('on');

    if(state == 0){
        timer = setInterval(nextSlider, 3000);
    }
}

$('#btnNum a').on('click', numBtnClick);

let timer = setInterval(nextSlider, 3000);
