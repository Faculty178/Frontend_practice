//앱 설치 광고 배너를 나에게 필요한것?아래로 내리면 됨 
$(window).on('resize', function(){
    if(window.innerWidth <= 768){
        $('#install').insertAfter($('#nowneed'));
    }
    else{
        $('#install').insertAfter($('#hotissue'));
    }
})

//css에 추가할 코드
//768px
// #hotissue{
//     margin: 0 auto 100px;
// }
