
// // ------- assigns font values to radio button choices ------- //
// const fontCombo1 = document.getElementById("r1").value = ["https://fonts.googleapis.com/css?family=Eczar:400,500,600,700,800", "https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900"];
// const fontCombo2 = document.getElementById("r2").value = ["https://fonts.googleapis.com/css?family=Archivo+Black", "https://fonts.googleapis.com/css?family=Tenor+Sans"];
// const fontCombo3 = document.getElementById("r3").value = ["https://fonts.googleapis.com/css?family=Rubik:300,400,900", "https://fonts.googleapis.com/css?family=Roboto+Mono:300,400"];


// // ------- assigns color values to radio button choices ------- //
// const colorCombo1 = document.getElementById("r4").value = ["#d4d4d4", "#ff4100"];
// const colorCombo2 = document.getElementById("r5").value = ["#7814b9", "#ff4100"];
// const colorCombo3 = document.getElementById("r6").value = ["#d4d4d4", "#232ce1"];


// ------- assigns font values to radio button choices ------- //
const fontEczar = "https://fonts.googleapis.com/css?family=Eczar:400,500,600,700,800";
const fontWorkSans = "https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900";
const fontArchivoBlack = "https://fonts.googleapis.com/css?family=Archivo+Black";
const fontTenorSans = "https://fonts.googleapis.com/css?family=Tenor+Sans";
const fontRubik = "https://fonts.googleapis.com/css?family=Rubik:300,400,900";
const fontRobotoMono = "https://fonts.googleapis.com/css?family=Roboto+Mono:300,400";

// ------- assigns color values to radio button choices ------- //
const colorGray = "#d4d4d4"; 
const colorRed = "#ff4100";
const colorPurple = "#7814b9";
const colorBlue = "#232ce1";


// ------- handles font form ------- //
function handleFont(){
	$("#form1").on('submit',function(event){
		event.preventDefault();
		console.log('handleFont ran');
		let userFont = $('input:checked').val();
		console.log(userFont);
		assignFont(userFont);
		console.log(font1, font2);
	});
}

function assignFont(font){
	if (userFont == "1") {
		let font1 = fontEczar;
		let font2 = fontWorkSans;
	}
	else if (userFont == "2") {
		let font1 = fontArchivoBlack;
		let font2 = fontTenorSans;
	}
	else {
		let font1 = fontRubik;
		let font2 = fontRobotoMono;
	}
}

// ------- handles color form ------- //
function handleColor(){
	$("#form2").on('submit',function(event){
		event.preventDefault();
		console.log('handleFont ran');
		let userColor = $('input:checked').val();
		console.log(userColor);
		assignFont(userColor);
		console.log(color1, color2);
	});
}

function assignColor(color){
	if (userColor == "1") {
		let color1 = colorGray;
		let color2 = colorRed;
	}
	else if (userColor == "2") {
		let color1 = colorPurple;
		let color2 = colorRed;
	}
	else {
		let color1 = colorGray;
		let color2 = colorBlue;
	}
}



// ------- handles Google Font API ------- //
function getApi() {
	$.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyChZeTZ-DzMW-45IUBXUSuBha9MWEiXXtI",  {}, function (data) {
		$('#fonts').append($("<option></option>")
	    	.attr("value", value.family)
	         .text(value.family));
	});
}



// ------- changes flyer.h1 ------- //
function changeFirstFont() { 

    $('body').append("<link rel='stylesheet' id='colorbox-css'  href='http://fonts.googleapis.com/css?family=" + escape($(this).val()) +"' type='text/css' media='all' />");

    $('.flyer-h1').css({'font-family':'"'+$(this).val()+'"'})

}

// ------- changes flyer.h2 ------- //
function changeFirstFont() { 

    $('body').append("<link rel='stylesheet' id='colorbox-css'  href='http://fonts.googleapis.com/css?family=" + escape($(this).val()) +"' type='text/css' media='all' />");

    $('.flyer-h2').css({'font-family':'"'+$(this).val()+'"'})

}



// ------- handles final form ------- //
function handleFinal(){
	$("#form3").on('submit',function(event){
		getApi(font1);
		changeFirstFont();
		getApi(font2);
		changeSecondFont();
		buildFlyerPage();
		displayFlyerPage();
	});
}




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

// $( "input" ).on( "click", function() {
//         $(this).find(".center").css({opacity: 0.0});
//     }, function() {
//          $(this).find(".center").css({opacity: 0.0});
//     });


 // $(".center").css("opacity", 1);
 //    $("label").hover(function() {
 //        $(this).find(".center").animate({opacity: 0.0}, 200);
 //    }, function() {
 //         $(this).find(".center").animate({opacity: 1}, 200);
 //    });



