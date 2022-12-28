//구현해야할 것들
//스크롤이 로고 아래로 내려가면 gnb 색상 검정으로 변경
//다움 버튼 누르면 첫번째 페이지로 이동
//메뉴 누르면 각각의 칸으로 이동 
//top 누르면 제일 위로 이동 

$('#header a').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({scollTop: $('#content1').position().top});
});

$('#gnb li').on('click', (e)=>{
    e.preventDefault();
    let place = $(this).children('a').attr('href');
    let pos= $(place).position().top;

    $('html, body').animate({scrollTo: pos}, 500);
})

$('.top').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 500);
})

let navPoint = $('#content1').position().top;
// let point = $(window).height(); 

$(window).on('scroll', function(){
    if( $(this).scollTop >= navPoint){
        $('#gnb').addClass('scroll');
    }
    else{
        $('#gnb').removeClass('scroll');
    }
})