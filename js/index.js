 /* global html2canvas */

const isMobile = (window.innerWidth <= 800 && window.innerHeight <= 600);

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

	$('input[name=fontChoice]').on('click', function(event){
		event.preventDefault();
	    let chosenFont = $("input[type='radio'][name='fontChoice']:checked").val();
		assignFont(chosenFont);
		$('html,body').animate({scrollTop: $("#section3").offset().top}, 1500, 'easeInOutExpo');
	})

	$("#fontForm .button").on('click',function(event){
		
		 swal ({
			text: "Please choose a font theme!",
			button: "",
		});         
     })
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
	$('input[name=colorChoice]').on('click', function(event){
		let chosenColor = $("input[type='radio'][name='colorChoice']:checked").val();
		assignColor(chosenColor);
		$('html,body').animate({scrollTop: $("#section4").offset().top}, 1500, 'easeInOutExpo');
		$(':root').css({'--color1':''+store.userColor1+''});
		$(':root').css({'--color2':''+store.userColor2+''});

		// else {
		// 	$('#flyer-capture').css({'background-color':''+store.userColor1+''});
		// }
	})
	$("#colorForm .button").on('click',function(event){
		 swal({
			text: "Please choose a color theme!",
			button: "",
			});    
    })      
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
		console.log(store.userColor1);
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
			$("#flyer-bottom h2 span").css("border-bottom", "1px solid var(--color2)");
    		$("#circle h2.flyer-price").css("font-family", "var(--font1)");
    		$("#circle h2.flyer-price").css("font-weight", "bold");
    		$("#circle h2.flyer-price").css("line-height", "1");
		}
		else if (store.userFont1 == "Archivo Black") {
			$("#flyer-center h1").css("text-transform", "uppercase");
			$("#flyer-center h1").css("font-weight", "900");
			$("#flyer-center h1:nth-of-type(2)").css("font-weight", "normal");
			$("#flyer-top h2.flyer-date").css("font-family", "var(--font1)");
			$("#flyer-top h2.flyer-date").css("text-transform", "uppercase");
			$("#flyer-top h2.flyer-date").css("font-weight", "900");

		}

		else if (store.userEventPrice == "") {
			$("#circle").css("display", "none");
		}

		else if (store.userColor1 == "#d4d4d4") {
			$('#flyer-capture .flyer-box').css('background', 'linear-gradient('+store.userColor1+','+store.userColor2+')');
			$("#flyer-capture .col-6.flyer-box.outer").css("background-color", "black");
		}
	});
}


// ------- flyer template------- //

function buildFlyer(){      	
   return    `<div class="black-results" id="section1">
			    <div class="row">
					    <div class="col-6 flyer-box outer" id="flyer-capture">
					        <div id="flyer-top" class="inner">
							    <h2 class="flyer-date">${store.userEventDate}</h2>
							    <h2 class="flyer-time">${store.userEventTime}</h2>
					        </div>
					        <div id="circle" class="inner">
						        <h2 class="flyer-price">${store.userEventPrice}</h2>
					        </div>
					        <div id="flyer-center">
						        <h1>${store.userEventName1}</h1>
						        <h1>${store.userEventName2}</h1>
						        <h1>${store.userEventName3}</h1>
						    </div>
						    <div class="flyer-bottom inner" id="flyer-bottom"> 
							    <h2 class="flyer-location"><span>${store.userEventLocation1}</span></h2>
							    <h2 class="flyer-location"><span>${store.userEventLocation2}</span></h2>
							    <h2 class="flyer-location"><span>${store.userEventLocation3}</span></h2>
						    </div>
				 		</div>
					    <div class="col-4" id="last">
						    <button type="button" class="button colorful3" id="download"><span>Download</span></button>
						    <a href="#modal-02" id="demo02" class="button underline" style="display:none;">test 2</a>
						    <button type="button" class="button underline restart-button"><span>Start Over</span></button>
					    </div>   
			    </div>
			  </div>
			  <div id="modal-02">
		        	<div id="btn-close-modal" class="close-modal-02"> 
			            <button type="button" class="button underline close" style="color:white;text-align:center;"><div class="spin">&#x2715;</div></button></a>
			        </div>		
			        <div class="modal-content">
			        	<p style="color:white;"> Click and hold image to save!</p>
			        	<p style="color:white;font-size:16px;">Suitable for web use only. Visit the desktop version for print-ready size. </p>
			        	</br>
			    		<div id="destination"></div>
			    	</div> 	
			    </div>`
  }


// ------- displays built flyer ------- //
function displayFlyerPage(){
	$("#js-flyer").html(buildFlyer());
	$(".grad4").css('visibility', 'visible').show();
	$("#js-flyer").css('visibility', 'visible').show();

	$("#demo02").animatedModal({
		modalTarget:'modal-02',
		animatedIn: 'slideInRight',
	    animatedOut: 'slideOutRight',
	    animationDuration: '1s',
	    color: 'black',
	});

	// ------- gradient button button ------- //
	document.querySelector('.button.colorful3').onmousemove = (e) => {
		const x = e.pageX - e.target.offsetLeft
		const y = e.pageY - e.target.offsetTop
		e.target.style.setProperty('--x', `${ x }px`)
		e.target.style.setProperty('--y', `${ y }px`)
	}
}


// ------- restart process ------- //
function restartFlyer(){
	$("#js-flyer").on ('click','.restart-button', function(event){
		event.preventDefault();
		location.reload(true);
  })
}

var downloadCounter = 0;

// ------- saves flyer image on button click ------- //
function handleDownload(){
	$("#js-flyer").on('click','#download', function(event){


		
		if (isMobile) {
			if (downloadCounter == 0) {
				downloadCounter ++;

				var element = document.getElementById('flyer-capture');
				var destination = document.getElementById('destination');


				function hiddenClone(element){

	
				  // Create clone of element
				  var clone = element.cloneNode(true, true);

				  // Position element relatively within the 
				  // body but still out of the viewport
				  var style = clone.style;
				  style.position = 'relative';
				  style.top = screen.availHeight + 'px';
				  // style.zIndex = 3;
				  style.left = 0;

				  // Append clone to body and return the clone
				  document.body.appendChild(clone);
				  return clone;
				}

				var offScreen = document.querySelector('#flyer-capture');

				// Clone off-screen element
				var clone = hiddenClone(offScreen);	


				function myRenderFunction(canvas) {
					// destination.append(canvas);
			        tableImage = canvas.toDataURL("image/png");	
			        $('#destination').append('<img style="width: 100%;" id="image" src="' + tableImage + '">');
			        document.body.removeChild(clone);
			    
				}

				html2canvas(clone, {
					scale: 5,
					onrendered: myRenderFunction
				});

				setTimeout(function(){
				    $("#demo02").click();
				}, 1000);

			}

			else {
				$("#demo02").click();
			}

		}


		else {


			$("#loader-box").fadeIn('fast').delay(5000).fadeOut('slow');

			// Get source element and destination div.
			var element = document.getElementById('flyer-capture');
			var destination = document.getElementById('destination');

			function hiddenClone(element){
			  // Create clone of element

			  var clone = element.cloneNode(true);

			  // Position element relatively within the 
			  // body but still out of the viewport
			  var style = clone.style;
			  style.position = 'relative';
			  style.top = window.innerHeight + 'px';
			  style.left = 0;

			  // Append clone to body and return the clone
			  document.body.appendChild(clone);
			  return clone;
			}

			var offScreen = document.querySelector('#flyer-capture');

			// Clone off-screen element
			var clone = hiddenClone(offScreen);		

			function myRenderFunction(canvas) {
				// destination.append(canvas);

		        tableImage = canvas.toDataURL("image/png");	
		        $('#destination').append('<img style="width: 100%;" id="image" src="' + tableImage + '">');	
		        document.body.removeChild(clone);

		        // forces download of image
    			download(tableImage);
			}

			html2canvas(clone, {
				scale: 10.78125,
				onrendered: myRenderFunction
			});


		}

	})
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


// ------- keeps track of where mouse is for gradient buttons------- //
document.querySelector('.button.colorful').onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
}
document.querySelector('.button.colorful2').onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
}

// ------- date picker------- //
$('#eventDate').dateDropper();


$("#main").show();
$(".grad4").hide();
$("#js-flyer").hide();
$('html, body').animate({ scrollTop: 0 }, 'slow',);

handleFont();
handleColor();
handleFinal();
handleDownload();
restartFlyer();