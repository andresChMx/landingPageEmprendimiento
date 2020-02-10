$("document").ready(function(){
	$("#loginForm").submit(function(event) {
		event.preventDefault();
		$('.popover').hide(); 
		console.log('Submit');
		errorAanmelden = new Array();
		function validEmail(email) {
			var r
			var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
			if (filter.test(email))	{			
				r = true;
			}else{
				r = false;
			}				
			return r;
	}
	
	   firstrun = true;
	   if($("#loginEmail input").val() == ''){
				errorAanmelden.push("vul email in");
				console.log('Emailinvullen');
				showError('U heeft geen email adres ingevuld.',$("#loginEmail"));
				$("#loginEmail").css("background-color","#FBDDD5");

		}
		
		if($("#loginEmail input").val() != ''){
			if(!validEmail($("#loginEmail input").val())){
				errorAanmelden.push("vul correct email adres in");
				console.log('nietcorrectemail');
				showError('Vul een correct email adres in.',$("#loginEmail"));
				$("#loginEmail").css("background-color","#FBDDD5");
			}	
		}
		
		if($("#password input").val() == '') {
				errorAanmelden.push("U heeft geen wachtwoord ingevuld");
				console.log('geenwachtwoord');
				showError('U heeft geen wachtwoord ingevuld.',$("#password"));	
				$("#password").css("background-color","#FBDDD5");				
		}
		
		if(errorAanmelden.length == 0) {
			console.log('geenerror');
			$.post( "/ajax/login/", $( "#loginForm" ).serialize() ).done(function( data ) {
				console.log(data);
				if(data == 'error') {
					showError('De door u ingevulde gegevens zijn onjuist.',$("#password"));
					
					$("#loginEmail").css("background-color","#FBDDD5");
					$("#password").css("background-color","#FBDDD5");
				}
				else if(data == 'user') {
					window.location = "/mijn-profiel/"
				}
				else if(data == 'drukker'){
					window.location = "/drukopdrachten/"
				}
				else {
					console.log('Gegevens juist');
					window.location = "/bedrijf/"
					
				}
			});
		}
	});
});
/*
     FILE ARCHIVED ON 01:07:29 Sep 06, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:39:10 Feb 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 179.826
  esindex: 0.006
  PetaboxLoader3.datanode: 246.552 (4)
  exclusion.robots.policy: 0.149
  exclusion.robots: 0.158
  RedisCDXSource: 3.001
  CDXLines.iter: 11.866 (3)
  PetaboxLoader3.resolve: 157.382
  LoadShardBlock: 253.068 (3)
  captures_list: 270.631
*/