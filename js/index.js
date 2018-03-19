// import domtoimage from 'dom-to-image';

// ------- state management ------- //
const store = {
	userFont1: "",
	userFont2: "",
	userColor1: "",
	userColor2: "",
	userEventName1: "",
	userEventName2: "",
	userEventName3: "",
	userEventDate: "",
	userEventPrice: "",
	userEventTime: "",
	userEventLocation1: "",
	userEventLocation2: "",
	userEventLocation3: "",
	apiResult1: null,
	apiResult2: null
}


// ------- assigns color values to radio button choices ------- //
const colorGray = "#d4d4d4"; 
const colorRed = "#ff4100";
const colorPurple = "#7814b9";
const colorBlue = "#232ce1";


// ------- handles font form ------- //
function handleFont(){
	$("#fontForm").on('submit',function(event){
		event.preventDefault();
		let chosenFont = $("input[type='radio'][name='fontChoice']:checked").val();
		assignFont(chosenFont);
		 $('html,body').animate({scrollTop: $("#section3").offset().top}, 1500, 'easeInOutExpo');
	});
}


// ------- assigns font based on user choice, returns api ------- //
function assignFont(font){
	if (font == "1") {
		store.userFont1 = "Eczar";
		store.userFont2 = "Work Sans";
	}
	else if (font == "2") {
		store.userFont1 = "Archivo Black";
		store.userFont2 = "Tenor Sans";
	}
	else if (font == "3") {
		store.userFont1 = "Rubik";
		store.userFont2 = "Roboto Mono";
	}

	getApi1(store.userFont1);
	getApi2(store.userFont2);
}


// ------- handles Google Font API ------- //
function getApi1(font) {
	$.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPyjLVFVbDrnfM0Oh41zwb4NczTz102cw",  {}, function (data) {
		data.items.forEach(function(item){
			if (item.family === font) {
				store.apiResult1 = item;
				// ------- adds google font to body and ajusts css ------- //
				$('body').append("<link rel='stylesheet' id='colorbox-css'  href='http://fonts.googleapis.com/css?family="+item.family+":100,200,300,400,500,500,700,900' type='text/css' media='all' />");
    			$(':root').css({'--font1':'"'+item.family+'"'})

			}

		}) 

	});
}


// ------- handles Google Font API ------- //
function getApi2(font) {
	$.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPyjLVFVbDrnfM0Oh41zwb4NczTz102cw",  {}, function (data) {
		data.items.forEach(function(item){
			if (item.family === font) {
				store.apiResult2 = item;
				// ------- adds google font to body and ajusts css ------- //
				$('body').append("<link rel='stylesheet' id='colorbox-css'  href='http://fonts.googleapis.com/css?family=" +item.family+" :100,200,300,400,500,500,700,900' type='text/css' media='all' />");
    			$(':root').css({'--font2':'"'+item.family+'"'})
			}

		}) 

	});
}


// ------- handles color form ------- //
function handleColor(){
	$("#colorForm").on('submit',function(event){
		event.preventDefault();
		let chosenColor = $("input[type='radio'][name='colorChoice']:checked").val();
		assignColor(chosenColor);
		event.preventDefault();
		$('html,body').animate({scrollTop: $("#section4").offset().top}, 1500, 'easeInOutExpo');
		$(':root').css({'--color1':''+store.userColor1+''});
		$(':root').css({'--color2':''+store.userColor2+''});
		console.log(store.userColor1);
		if (store.userColor1 == "#d4d4d4") {
			$('.flyer-box').css({'background-color':'linear-gradient('+store.userColor1+','+store.userColor2+')'});
		}
		else {
			$('.flyer-box').css({'background':''+store.userColor1+''});
		}
	});
}


// ------- assigns color based on user choice ------- //
function assignColor(color){
	if (color == "4") {
		store.userColor1 = colorGray;
		store.userColor2 = colorRed;
	}
	else if (color == "5") {
		store.userColor1 = colorPurple;
		store.userColor2 = colorRed;
	}
	else if (color == "6") {
		store.userColor1 = colorGray;
		store.userColor2 = colorBlue;
	}
}



// ------- handles final form ------- //
function handleFinal(){
	$("#infoForm").on('submit',function(event){
		event.preventDefault();
		store.userEventName1 = document.getElementById("eventName1").value;
		store.userEventName2 = document.getElementById("eventName2").value;
		store.userEventName3 = document.getElementById("eventName3").value;
		store.userEventTime = document.getElementById("eventTime").value;
		store.userEventPrice = document.getElementById("eventPrice").value;
		store.userEventDate = document.getElementById("eventDate").value;
		store.userEventLocation1 = document.getElementById("eventLocation1").value;
		store.userEventLocation2 = document.getElementById("eventLocation2").value;
		store.userEventLocation3 = document.getElementById("eventLocation3").value;

		buildFlyer();

		displayFlyerPage();

		event.preventDefault();
  		$('html,body').animate({scrollTop: $("#js-flyer").offset().top}, 1500, 'easeInOutExpo');

		if (store.userFont1 == "Rubik") {
			$("#flyer-center h1").css("text-transform", "uppercase");
			$("#flyer-center h1").css("font-weight", "900");
			$("#flyer-center h1:nth-of-type(2)").css("text-transform", "none");

		}

		else if (store.userFont1 == "Eczar") {
			$("#flyer-center h1").css("font-weight", "normal");
			$("#flyer-center h1:nth-of-type(1)").css("font-weight", "bold");
			$("#flyer-center h1:nth-of-type(3)").css("font-weight", "bold");
			$("#flyer-center h2").css("font-weight", "normal");

		}

		else if (store.userFont1 == "Archivo Black") {
			$("#flyer-center h1").css("text-transform", "uppercase");
			$("#flyer-center h1").css("font-weight", "900");
			$("#flyer-center h1:nth-of-type(2)").css("font-weight", "normal");
			$("#flyer-top h2.flyer-date").css("font-family", "var(--font2);");
			$("#flyer-top h2.flyer-date").css("text-transform", "uppercase");
			$("#flyer-top h2.flyer-date").css("font-weight", "900");

		}

		// else if (store.userColor1 == "#d4d4d4") {
		// 	$('.flyer-box').css({background:'linear-gradient(red,blue,red)'});
		// }


	});
}


// ------- flyer template------- //

function buildFlyer(){      	


   return    `<div class="black-results" id="section1">
			    <div class="row">
					    <div class="col-6 flyer-box">
					        <div id="flyer-top">
							    <h2 class="flyer-date">${store.userEventDate}</h2>
							    <h2 class="flyer-time">${store.userEventTime}</h2>
					        </div>
					        <div class="circle">
						        <h2 class="flyer-price">${store.userEventPrice}</h2>
					        </div>
					        <div id="flyer-center">
						        <h1>${store.userEventName1}</h1>
						        <h1>${store.userEventName2}</h1>
						        <h1>${store.userEventName3}</h1>
						    </div>
						    <div class="flyer-bottom">
							    <h2 class="flyer-location">${store.userEventLocation1}</h2>
							    <h2 class="flyer-location">${store.userEventLocation2}</h2>
							    <h2 class="flyer-location">${store.userEventLocation3}</h2>
						    </div>
					    </div>

					    <div class="col-4" id="last">
						    <button type="button" class="button colorful" id="download"><span>Download</span></button>

						    <button type="button" class="button underline restart-button"><span>Start Over</span></button>
					    </div>

			    </div>
			  </div>`




						    // <a class="twitter-share-button" href="https://twitter.com/home?status=I%20made%20a%20flyer%20with%20http%3A//bit.ly/2HJMzym%20thx%20%40spexbakerx%20!""><i class="fab fa-twitter"></i></a>
						    // <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//spexbakerx.github.io/class-project/"><i class="fab fa-facebook"></i></a>
						    // <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//bit.ly/2HJMzym&title=&summary=Awesome%20flyer%20building%20tool%20made%20by%20Lauren%20Baker!&source="><i class="fab fa-linkedin-in"></i></a>



  }

// ------- displays built flyer ------- //
function displayFlyerPage(){
  $("#js-flyer").html(buildFlyer());
  $(".grad4").css('visibility', 'visible').show();
  $("#js-flyer").css('visibility', 'visible').show();


  // $("#js-flyer").css('visibility', 'visible').addClass('animated fadeInUpBig');

}


// ------- restart process ------- //
function restartFlyer(){
	$("#js-flyer").on ('click','.restart-button', function(event){
		event.preventDefault();
		location.reload(true);
  })
}


// ------- saves flyer image on button click ------- //

function handleDownload(){
	$("#js-flyer").on ('click','#download', function(event){
		console.log('download clicked');
		domtoimage.toJpeg(document.getElementById('.flyer-box'), { quality: 0.95 })
		    .then(function (dataUrl) {
		        var link = document.createElement('a');
		        link.download = 'my-image-name.jpeg';
		        link.href = dataUrl;
		        link.click();
	    });
	});
}




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


$("#main").show();
$(".grad4").hide();
$("#js-flyer").hide();
$('html, body').animate({ scrollTop: 0 }, 'slow',);

handleFont();
handleColor();
handleFinal();
handleDownload();
restartFlyer();

