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
		$('html,body').animate({scrollTop: $("#section4").offset().top}, 1500, 'easeInOutExpo');
		$(':root').css({'--color1':''+store.userColor1+''});
		$(':root').css({'--color2':''+store.userColor2+''});
		$('.flyer-box').css({'background-color':''+store.userColor1+''});
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
	

		console.log(store.userFont1);



		displayFlyerPage();

		if (store.userFont1 == "Rubik") {
			$("#flyer-center h1").css("text-transform", "uppercase");
			$("#flyer-center h1").css("font-weight", "900");
			$("#flyer-center h1:nth-of-type(2)").css("text-transform", "none");

		}

		else if (store.userFont1 == "Eczar") {
			$("#flyer-center h1").css("font-weight", "bold");
			$("#flyer-center h1:nth-of-type(2)").css("text-transform", "none");

		}


	});
}


// ------- flyer template------- //

function buildFlyer(){      	


   return    `<div class="section black-results" id="section1">
    <div class="row">
      <div class="col-6 col-aligncenter flyer-box">
        <div class="flyer-top">
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
    <div class="col-4 col-aligncenter">
    <button type="button" class="button colorful"><span>Download</span></button>
    </div>

    </div>
  </div>`




  }

// ------- displays built flyer ------- //
function displayFlyerPage(){
  $("#js-flyer").html(buildFlyer());
  $("#js-flyer").css('visibility', 'visible').addClass('animated fadeInUpBig');

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

handleFont();
handleColor();
handleFinal();

