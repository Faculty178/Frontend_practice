function reSizing(){
    if($(window).width()>= 1000){
        $("#gnb").removeClass('on2');
        $('.snb').css({display:'block'});
        $('#gnb').css({transition:'none'});
    }
    else{
        // $("#gnb").addClass('on2');
        $('.snb').css({display:'none'});
        $('#gbb').css({transition: '1s'});
    }
}

$(window).on('resize', reSizing);

// pc버전
$("#gnbList .item").on('mouseenter', function() {
    $(this).parents("#gnb").addClass('on');
    $('#gnb').css({transition: '1s'});
})
$("#gnb").on('mouseleave', function() {
    $(this).removeClass('on');
})

// 모바일버전
$('.viewMenu').on('click', function(){
    $('#gnb').addClass('on2');
})

$('.closeMenu').on('click', function(){
    $('#gnb').removeClass('on2');
})

$(document).on('click','#gnb.on2 .item',function(e){
    e.preventDefault();
    $('.snb').not($(this).children('.snb')).slideUp();
    $(this).children('.snb').slideToggle();
})
