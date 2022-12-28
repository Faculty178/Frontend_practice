let liLength = $("#sliderList li").length;
let num;
let btnNum; // 번호버튼의 인덱스 번호
let classNum;
let state = 1;

function prevSlider() {
    state = 0;
    $("#sliderList li:last").addClass('active')
                            .css({ opacity: 0 })
                            .animate({ opacity: 1 }, 1000, function() {
                                $("#sliderList").prepend($("#sliderList li:last"))
                                $("#sliderList li:eq(1)").removeClass('active')
                                state = 1;
                            })
    classNum = $("#sliderList li:last").attr("class").substr(13, 1) - 1;
    $("#btnNum a").removeClass('on');
    $("#btnNum a:eq("+classNum+")").addClass('on');
}
function nextSlider() {
    state = 0;
    $("#sliderList li:eq(1)").addClass('active')
                             .css({ opacity: 0 })
                             .animate({ opacity: 1 }, 1000, function() {
                                 $("#sliderList").append($("#sliderList li:eq(0)"));
                                 $("#sliderList li:last").removeClass('active');
                                 state = 1;
                             })
    classNum = $("#sliderList li:first").attr("class").substr(13, 1);
    if ( classNum == 4 ) classNum = 0;
    $("#btnNum a").removeClass('on');
    $("#btnNum a:eq("+classNum+")").addClass('on');
}

let timer = setInterval(nextSlider, 3000);

$(".prevBtn").on('click', function() {
    if ( state == 1 ) prevSlider();
})
$(".nextBtn").on('click', function() {
    if ( state == 1 ) nextSlider();
})
$("#btnNum a").on('click', function() {
    if ( state == 1 ) {

        state = 0;

        btnNum = $(this).index() + 1;
        num = btnNum;    
        
        if ( $(this).hasClass('on')) {
            return;
        }

        $("#btnNum a").removeClass('on');
        $(this).addClass('on');

        $(".slider"+ btnNum ).addClass('active')
                    .css({ opacity: 0 })
                    .animate({ opacity: 1 },1000, function() {
                        $("#sliderList li").not(this).removeClass('active');
                        for (let i=0; i < liLength-1; i++ ) {
                            if ( num == liLength ) num = 0;
                            num++;
                            $("#sliderList").append($(".slider"+num))
                        }                    
                        state = 1;
                    })    
    }
})

$("#btnPos a, #btnNum a").on("click", function(e){
   e.preventDefault();
   clearInterval(timer);
   if ( state == 0 ) {
    timer = setInterval(nextSlider, 3000)
   }
})


