$(".thumbs em").hide();

$('.thumbs a').on('click', function(e){

    e.preventDefault();

    let imgPath = $(this).attr('href');
    let exText = $(this).text();
    $('#largeImg img').attr({src:imgPath, alt:exText});

    $('#caption').remove();
    $('#largeImg').append(`<div id='caption'></div>`);
   
    $("#caption").text($(this).next().text())
						//  .animate({ bottom: $("#caption").css('height') })
                .animate({ bottom: $("#caption").innerHeight() })
     
})

