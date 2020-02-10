$("document").ready( function() {

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}		
				
if(getCookie('login') == ''){
var returningCustomer = false;
}else {
var returningCustomer = true;
}

if(returningCustomer == true){
	$(".aanmelden").hide();
	$(".Login").hide();
	$(".Meldjeaan").show();
	$(".inloggen").show();
	$("#loginEmail input").focus();
	$("#loginEmail").css("background-color","#e7f7ff");
}else{
	$(".aanmelden").show();
	$(".Login").show();
	$(".inloggen").hide();
	$(".Meldjeaan").hide();
}


$(".Login").click(function(){
	$(".inloggen").show();
	$(".Meldjeaan").show();
	$(".aanmelden").hide();
	$(".Login").hide();
	$("#loginEmail input").focus();
	$("#loginEmail").css("background-color","#e7f7ff");
	if($(window).scrollTop() > 200){	
	$("html").velocity("scroll", { offset:"0px", duration: calculateScrollSpeed($(window).scrollTop(),"0"), easing: "easeInSine" });
	}
});
$(".Meldjeaan").click(function(){
	$(".inloggen").hide();
	$(".Meldjeaan").hide();
	$(".aanmelden").show();
	$(".Login").show();
	$(".voornaamBlock input").focus();
	$(".voornaamBlock").css("background-color","#e7f7ff");
	if($(window).scrollTop() > 200){	
	$("html").velocity("scroll", { offset:"0px", duration: calculateScrollSpeed($(window).scrollTop(),"0"), easing: "easeInSine" });
	}
	
});








//scroll vars T is trigger aangezien we subtiele chique animatie willen en geen epilepsie zooi, 
//dus triggers om dingen maar een keer te laten gebeuren

	

    var hoeHetWerkt = 625;
	var T1 = false;
    var deVoordelen = 1271;
	var T2 = false;
    var verhalen = 2053;
	var T3 = false;
    var statistiek = 2940;
	var T4 = false;
    var support = 3708;
	var T5 = false;
	
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
	{
		hoeHetWerkt = 695;
		deVoordelen = 1414;
		 verhalen = 2280;
		 support = 4108;
	
	}

	var totalDurationCount = 1500;

	function calculateScrollSpeed(location, destination){
	
		//pixels per ms
		var speed = 0.5;
	
		return Math.floor(Math.abs(location - destination)*speed);
		
	
	}
	
	$(".menu ul li").removeClass("active");
	$(".dotted-circle img").css("opacity","0");
	$(".hoehetwerktContainer h3").css("opacity","0");
	$(".dotted-circle:eq(0)").css("margin-right","43px");
	$(".dotted-circle:eq(1)").css("margin-right","43px");

	$(".voornaamBlock input, .telefoonBlock input, .bedrijfBlock input, .emailBlock input, .achternaamBlock input").focusout(function(){
	$(this).parent().css("background-color","#fff");
	});
	$(".voornaamBlock input, .telefoonBlock input, .achternaamBlock input, .bedrijfBlock input, .emailBlock input").focus(function(){
	$(this).parent().css("background-color","#e7f7ff");
	});
	
$(".logo").click(function(){
	$(".menu ul li").removeClass("active");
	
	var location = $(window).scrollTop();
	
	$("html").velocity("scroll", { offset:"0px", duration: calculateScrollSpeed(location,"0"), easing: "easeInSine" });
});		
	
$(".menu ul li:eq(0)").click(function(){
	$(".menu ul li").removeClass("active");
	
	var location = $(window).scrollTop();
	
	$("html").velocity("scroll", { offset: hoeHetWerkt+"px", duration: calculateScrollSpeed(location, hoeHetWerkt), easing: "easeInSine" });
});	
$(".menu ul li:eq(1), .advertentieSticker").click(function(){
	$(".menu ul li").removeClass("active");

		var location = $(window).scrollTop();
	
$("html").velocity("scroll", { offset: deVoordelen+"px", duration: calculateScrollSpeed(location, deVoordelen), easing: "easeInSine" });
});	
$(".menu ul li:eq(2)").click(function(){
	$(".menu ul li").removeClass("active");
	
		var location = $(window).scrollTop();
	
$("html").velocity("scroll", { offset: verhalen+"px", duration: calculateScrollSpeed(location, verhalen), easing: "easeInSine" });
});	
$(".menu ul li:eq(3)").click(function(){
	$(".menu ul li").removeClass("active");

	
		var location = $(window).scrollTop();
	
		$("html").velocity("scroll", { offset: support+"px", duration: calculateScrollSpeed(location, support), easing: "easeInSine" });
});	
	
	
//testemonials;	
	$(".testimonialRow:gt(0)").hide();
	
	function fadeCycle(i) {
		
		var n = i + 1;
		if(i == (slide.length-1)) {
			n = 0;
		}
		
	
	
		$(".testimonialRow:eq("+ i +")").fadeOut(500);
		
		setTimeout(function() {
			$(".testimonialRow:eq("+ n +")").fadeIn(500);
		},500);
	
	}
	
	var slide = [];
	 
	$(".testimonialRow").each(function(index) {
	
		slide.push(index);
		
	});
	
	

	var x = 0;


			setInterval(function(){
				
				//console.log(x);

				fadeCycle(x);
				var trueLenght = slide.length-1
				if(x == trueLenght){
					x = 0;
				}else {
					x+=1;
				}
				
			},5000);

		

	
	

//they see me scrollin' they hatin'
$(function(){
  $(window).scroll(function(){
  
	//console.log($(this).scrollTop());
  

	//menu animatie
	if($(this).scrollTop()<(hoeHetWerkt)){
	//console.log("menu-hoehetwerkt");
		$(".menu ul li").removeClass("active");	
	}	

	if($(this).scrollTop()>(hoeHetWerkt-1) && $(this).scrollTop()<deVoordelen){
	//console.log("menu-hoehetwerkt");
		$(".menu ul li").removeClass("active");
		$(".menu ul li:eq(0)").addClass("active"); 		
	}
	
	if($(this).scrollTop()>(deVoordelen-1) && $(this).scrollTop()<verhalen){
	//console.log("menu-voordelen");
		$(".menu ul li").removeClass("active");
		$(".menu ul li:eq(1)").addClass("active"); 	
	}
	
	if($(this).scrollTop()>(verhalen-2) && $(this).scrollTop()<support) {
		$(".menu ul li").removeClass("active");
		$(".menu ul li:eq(2)").addClass("active"); 	
	}
	
	if($(this).scrollTop()>=support){
		$(".menu ul li").removeClass("active");
		$(".menu ul li:eq(3)").addClass("active"); 	
	}
	
	
	//andere animaties
    if($(this).scrollTop()<hoeHetWerkt){

		$(".menu").animate({
		  backgroundColor: jQuery.Color( "rgba(44,44,44,0.75)" )
		}, 0);
		
		
	}
	
	//animaties hoe het werkt
    if($(this).scrollTop()>=hoeHetWerkt){

		$(".menu").animate({
		  backgroundColor: jQuery.Color( "rgba(44,44,44,1)" )
		}, {
		duration: 50,
		easing: "easeInSine"});	
	
		if(T1 == false) {
        //console.log('hoeHetWerkt.');
		

		$(".dotted-circle img:eq(0)").velocity({
		marginTop: [0,12],
		opacity: [1,0]		
		},{
		duration: 600,
		easing: "easeInSine"});	
		
		$(".hoehetwerktContainer h3:eq(0)").velocity({
		opacity: [1,0]		
		},{
		duration: 600,
		easing: "easeInSine"});
		
		//pijl #1

		setTimeout(function() {
			$(".dotted-circle:eq(0)").velocity({
			marginRight: [55,43]
			},{
			duration: 300,
			easing: "easeInSine"		
			});
			
			$(".dotted-circle:eq(1)").velocity({
			marginLeft: [43,55]
			},{
			duration: 300,
			easing: "easeInSine"		
			});
			
		},600);
		
		setTimeout(function() {
			$(".dotted-circle img:eq(1)").velocity({
			marginTop: [0,12],
			opacity: [1,0]		
			},{
			duration: 600,
			easing: "easeInSine"});			
			
			$(".hoehetwerktContainer h3:eq(1)").velocity({
			opacity: [1,0]		
			},{
			duration: 600,
			easing: "easeInSine"});
			
		},900);
		
		//pijl 2
		setTimeout(function() {
			$(".dotted-circle:eq(1)").velocity({
			marginRight: [55,43]
			},{
			duration: 300,
			easing: "easeInSine"		
			});
			
			$(".dotted-circle:eq(2)").velocity({
			marginLeft: [43,55]
			},{
			duration: 300,
			easing: "easeInSine"		
			});
		}, 1500);
		
		setTimeout(function() {
			$(".dotted-circle img:eq(2)").velocity({
			marginTop: [0,12],
			opacity: [1,0]		
			},{
			duration: 600,
			easing: "easeInSine"});			
			
			$(".hoehetwerktContainer h3:eq(2)").velocity({
			opacity: [1,0]		
			},{
			duration: 600,
			easing: "easeInSine"});		
			
		},1800);
		
		T1 = true;
		}
		
		//$(".menu").css('background-color', 'rgba(44,44,44,1.0)');

	}
	
    if($(this).scrollTop()>=deVoordelen){
		if(T2 == false) {
        //console.log('deVoordelen.');
		T2 = true;
		
		
		//verschijnen van de voordelen
		$(".voordeel:first").velocity({opacity: [1,0]}, {
		duration: 500,
		easing: "easeInSine"});		
		
		setTimeout(function() {
		$(".voordeel-active").velocity({opacity: [1,0]}, {
		duration: 500,
		easing: "easeInSine"});
		}, 1000);		
		
		setTimeout(function() {
		$(".voordeel:first").velocity({opacity: [0.6,1]}, {
		duration: 500,
		easing: "easeInSine"});	
		$(".last-voordeel-block").velocity({opacity: [0.6,1]}, {
		duration: 500,
		easing: "easeInSine"});	
		}, 1500);

		setTimeout(function() {
		$(".last-voordeel-block").velocity({opacity: [1,0]},{
		duration: 500,
		easing: "easeInSine"});

		}, 500);
		
		}
		
		if(T2 == true){
		
		$(".last-voordeel-block").mouseenter(function(){
		
			$(".last-voordeel-block").velocity({opacity: [1,0.6]},{
			duration: 500,
			easing: "easeInSine"}).dequeue();
		});
		
		$(".voordeel:eq(0)").mouseenter(function(){
			$(".voordeel:eq(0)").velocity({opacity: [1,0.6]},{
			duration: 500,
			easing: "easeInSine"}).dequeue();
		
		});
		
		$(".voordeel:eq(0)").mouseleave(function(){
			$(".voordeel:eq(0)").velocity({opacity: 0.75},{
			duration: 500,
			easing: "easeInSine"}).dequeue();
		
		});		
		
		$(".voordeel:eq(2)").mouseleave(function(){
			$(".voordeel:eq(2)").velocity({opacity: 0.75},{
			duration: 500,
			easing: "easeInSine"}).dequeue();
		
		});		
		
		}	
		
    }
	
	if($(this).scrollTop()>=(verhalen-600)){
		if(T3 == false) {
	
			$(".line-one").css('visibility','hidden');
			$(".line-two").css('visibility','hidden');
			$(".line-three").css('visibility','hidden');
			$(".line-four").css('visibility','hidden');
			$(".line-five").css('visibility','hidden');		
			$(".story2").css('visibility','hidden');		
			$(".story1").css('visibility','hidden');		
			$(".pin-two").css('visibility','hidden');				

		}
		
	}

    if($(this).scrollTop()>=(verhalen-500) && $(this).scrollTop()<verhalen){	
	
		////console.log((verhalen-800)-verhalen);
		//console.log((Math.abs((verhalen-500)-$(this).scrollTop())/500)*0.54 + "perc");
		var p = (Math.abs((verhalen-500)-$(this).scrollTop())/500)*54;
		
		$(".arrow").css("backgroundPositionY", p + "px");
		
	}
	
    if($(this).scrollTop()>=verhalen){
		if(T3 == false) {
        //console.log('verhalen.');
		T3 = true;
		
		

		
		
		//snelheid van de lijn animatie
		function pixelPerSecond(pixels) {
			
			return Math.floor(pixels*1.1);
		
		}
		
			////dit mag een tikje eerder gebeuren


		//div verhaal blok 1
		$(".story1").css('visibility','visible');	
		$(".story1").velocity({
		opacity: [1,0],
		marginLeft: [150,140]
		}, {
		duration: 600,
		easing: "swing"});
		
		//start punt bounce
		$(".pin-one").velocity({
		marginLeft: [-3,9],
		marginTop: [233,220]
		}, 600);
	
		//route lijntje
		setTimeout(function() {
			$(".line-one").css('visibility','visible');	
			
			$(".line-one").velocity({
			width: [312	,0]
		}, {
		duration: pixelPerSecond(312),
		easing: "swing"
		});
			

			
			setTimeout(function() {
				$(".line-two").css('visibility','visible');
				$(".line-two").velocity({
					height: [94	,0],
					marginTop: [0, 94],
					marginLeft: [237,292]
					}, pixelPerSecond(94));		
			}, pixelPerSecond(312)-40);
			
			setTimeout(function() {
			$(".line-three").css('visibility','visible');
			$(".line-three").velocity({
				height: [31,0],
				marginTop: [0, 31],
				marginLeft: [237,202]
				}, pixelPerSecond(31));		
			}, pixelPerSecond((94+312))-40);
			
			setTimeout(function() {
				$(".line-four").css('visibility','visible');
				$(".line-four").velocity({
					height: [38,0],
					marginTop: [0, 38],
					marginLeft: [237,258]
					}, pixelPerSecond(38));		
			},pixelPerSecond((94+312+38))-40);
			
			setTimeout(function() {
				$(".line-five").css('visibility','visible');
				$(".line-five").velocity({
					height: [74,0],
					marginTop: [0, 74],
					marginLeft: [237,160]
					}, pixelPerSecond(74));		
			},pixelPerSecond((94+312+38+74))-40);
			
		},600);	
		
		//eind punt bounce & divblok verhaal 2
		setTimeout(function() {
		
			$(".pin-two").css('visibility','visible');		
			
			$(".pin-two").velocity({
			marginTop: [-21,-40]
			}, 600);		
			
			$(".story2").css('visibility','visible');	
			
			$(".story2").velocity({
			opacity: [1,0],
			marginLeft: [19,39]
			}, {
		duration: 600,
		easing: "swing"});			
		
		},pixelPerSecond((94+312+38+74))+600);	
	
	
	$(".toggleStoryTwo").click(function(){
		$(".verhaal1").fadeOut();
		
		$(".story1").velocity({
		marginTop: [81, 151],
		height: [310,230]
		},400);
		
		
		setTimeout(function() {
		$(".verhaal1t").fadeIn();	
		}, 400);
		
		
	});
	
	$(".toggleStoryOne").click(function(){
		$(".verhaal2").fadeOut();
		
		
		$(".story2").velocity({
		height: [310,230]
		},400);		
		
		setTimeout(function() {
		$(".verhaal2t").fadeIn();	
		}, 400);
		
		
	});
	
	$(".closeStoryOne").click(function(){
		$(".verhaal2t").fadeOut();
		
		
		$(".story2").velocity({
		height: [230,295]
		},400);		
		
		setTimeout(function() {
		$(".verhaal2").fadeIn();	
		}, 400);
		
		
	});	
	
	$(".closeStoryTwo").click(function(){
		$(".verhaal1t").fadeOut();
		
		
		$(".story1").velocity({
		marginTop: [151, 81],
		height: [230,295]
		},400);
		
		setTimeout(function() {
		$(".verhaal1").fadeIn();	
		}, 400);
		
		
	});	

		
		//alvast de statistiek dingetjes op 1 zetten
		$("div.statistiekHolder div.number").each(function(){	
			 $(this).attr("n", $(this).text());
			 $(this).html("1");
		});
		
		
		}
    }		
	
    if($(this).scrollTop()>=(statistiek-100)){
		if(T4 == false) {
        //console.log('statistiek.');
		T4 = true;
		
		
		//optellen :)		
		var d = 0;

		$("div.statistiekHolder div.number").each(function(){	

			var goal = $(this).attr("n");
			var thing = $(this);
			var i = 1;
			
			//snelheid van het optellen, helaas wel moeten afronden om ze meer gelijk te krijgen
			//js snapt halve micro seconden niet
			var duration = Math.floor(totalDurationCount/goal)+d;
			
			
			setInterval(function() {
				if(i < goal){			
					i++;
					thing.html(i);
				}
			}, duration);
			
			////console.log(duration + " frames per plus 1");
			//console.log((goal*duration) + " totaal duur");
			
		//	d += 50;
	
		});
		
		//ofset voor de rondjes animatie (word ie beter van vraag niet hoe)
		var o = 260;
		
		//rondjes
		$("div.statistiekHolder .chart").each(function(){	
		
			var goal = $("> .number", this).attr("n");
			var durationTemp = Math.floor(totalDurationCount/parseInt(goal));
			var duration = Math.floor(parseInt(durationTemp)*parseInt(goal))+o;
		
			//console.log(duration + " chart duur");
		
		    $(this).easyPieChart({			
				animate:  duration,
				barColor: "#FFF",
				trackColor: false,
				scaleColor: false,
				size: 160,
				lineWidth: 3
			});		
			
		//	o += 50;
		
		});
		
		}
    }		
	
    if($(this).scrollTop()>=support){
		if(T5 == false) {
        //console.log('support.');
		T5 = true;
		}
    }		
	
	
  });
});


});
/*
     FILE ARCHIVED ON 19:41:35 Sep 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:39:09 Feb 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 119.204
  PetaboxLoader3.datanode: 90.637 (4)
  esindex: 0.017
  exclusion.robots: 0.255
  LoadShardBlock: 97.454 (3)
  exclusion.robots.policy: 0.239
  CDXLines.iter: 15.935 (3)
  PetaboxLoader3.resolve: 53.105
  load_resource: 77.171
  RedisCDXSource: 1.298
*/