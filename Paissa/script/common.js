// 외부파일은 head나 body 둘 다 가능합니다.
// 문제 1. 웹문서 로딩시 1초뒤에 로고가 3초에 걸쳐서 서서히 나타나도록
// 문제 2. 네비게이션이 숨겨져 있도록 설정
// 문제 3. #navigation h2 버튼 클릭시 메뉴 펼침, 숨김 구현
// 문제 4. #navigation li 클릭시 해당 섹션으로 슬라이딩되도록
// 문제 5. .btnList span 클릭시 슬라이더 애니메이션 구현
// 문제 6. 코딩교육프로그램 섹션의 span 태그를 이용해서 아코디언 효과 적용
// 문제 7. .contentWrap1에 도달시 컨텐츠가 나타나기


//문제1, 2
$(window).on('load', function(){
    $('#mainHeader h1').delay(1000).animate({opacity:1}, 3000);
    $('.navWrap').hide();
})

//문제3
let state = 1;
$('#navigation h2 a').on('click', function(){
    if(state === 1){
        $('.navWrap').slideDown(700);
        state = 0;
    }
    else{
        $('.navWrap').slideUp(700);
        state = 1;
    }
})


//문제4
$('#navigation li').on('click', function(e){
    e.preventDefault();
    let sectionPos = $($(this).children('a').attr('href')).position().top;
    $('html, body').stop().animate({scrollTop: sectionPos});
})

//문제5
$('.btnList span').on('click', function(){
    $('.btnList span').removeClass('on');
    $(this).addClass('on');

    let num = $(this).index();
    // console.log(num);
    let btnMargin = num*(-100) + '%';
    $('.sliderList').animate({marginLeft: btnMargin});
})


//문제6
$('.program span').on('click', function(){
    console.log($('.program span'));
    $('.program').css({transition:'1s'});
    $('.program span').parent().removeClass('pro');
    $(this).parent().addClass('pro');

    $('.program span').text('-');
    $(this).text('+');
})


//문제7

let pos = $('#content1').position().top - 500;
$('.contentWrap1').css({opacity:0});

$(window).on('scroll', function(){
    if($(this).scrollTop() >= pos){
        //class contentWrap1을 아래로 
        $('.contentWrap1').animate({opacity:1}, 1500);     
    }
    
})


//etcetc
$('.sns a:eq(0)').on('click', function(e){
    e.preventDefault();
    window.open('https://www.facebook.com');
})

$('.sns a:eq(1)').on('click', function(e){
    e.preventDefault();
    window.open('https://www.twitter.com');
})

$('.sns a:eq(2)').on('click', function(e){
    e.preventDefault();
    window.open('https://www.youtube.com');
})

$('.sns a:eq(3)').on('click', function(e){
    e.preventDefault();
    window.open('https://www.google.com');
})