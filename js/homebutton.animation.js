$("document").ready(function(){


	$(".switchOrange").mouseenter(function(){
		t = true;
		$(this).velocity({
		backgroundColor: "#DB5D2F"},{duration:220,easing: "easeInSine"}).then(function() { alert("done"); });

	});
	$(".switchOrange").mouseleave(function(){
	
		$(this).velocity({
		backgroundColor: "#EA6231"},{duration:220,easing: "easeInSine"});
	});	
	$(".switch").mouseenter(function(){
		t = true;
		$(this).velocity({
		backgroundColor: "#0A0A0A"},{duration:220,easing: "easeInSine"}).then(function() { alert("done"); });

	});
	$(".switch").mouseleave(function(){
	
		$(this).velocity({
		backgroundColor: "#1E1E1E"},{duration:220,easing: "easeInSine"});
	});	
});

//3838384b4b4b
/*
     FILE ARCHIVED ON 20:04:57 Sep 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:39:09 Feb 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.182
  esindex: 0.015
  captures_list: 276.334
  LoadShardBlock: 255.95 (3)
  PetaboxLoader3.resolve: 223.71 (2)
  RedisCDXSource: 1.133
  exclusion.robots: 0.196
  CDXLines.iter: 15.457 (3)
  load_resource: 112.273
  PetaboxLoader3.datanode: 125.901 (4)
*/