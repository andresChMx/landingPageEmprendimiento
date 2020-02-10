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
     INTERNET ARCHIVE ON 17:42:01 Feb 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 16.236 (3)
  PetaboxLoader3.resolve: 53.724
  LoadShardBlock: 86.451 (3)
  captures_list: 108.457
  esindex: 0.009
  load_resource: 85.811
  PetaboxLoader3.datanode: 82.205 (4)
  RedisCDXSource: 1.859
  exclusion.robots.policy: 0.166
  exclusion.robots: 0.179
*/