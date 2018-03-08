// console.log("hello");


// const apiUrl = "https://dog.ceo/api/breeds/list"


// function getApi() {
// 	$.ajax ({
// 		url: apiUrl,
// 		method: 'GET',
// 		success: function(response) {
// 				console.log(response);
// 			response.message.forEach(function(message){
// 				$("#js-results").append(`<li>${message}</li>`);

// 			})
// 		}

// 	})
// }

// getApi();

// ------- smooth scroll ------- //

$(function() {
	$('body a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});


// ------- keeps track of where mouse is ------- //

document.querySelector('.button.colorful').onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
 
}

$( "input" ).on( "click", function() {
        $(this).find(".center").css({opacity: 0.0});
    }, function() {
         $(this).find(".center").css({opacity: 0.0});
    });


 // $(".center").css("opacity", 1);
 //    $("label").hover(function() {
 //        $(this).find(".center").animate({opacity: 0.0}, 200);
 //    }, function() {
 //         $(this).find(".center").animate({opacity: 1}, 200);
 //    });



