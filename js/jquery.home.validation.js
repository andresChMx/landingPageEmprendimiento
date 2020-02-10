var firstrun = true;
var submitAllowed = false;

$("document").ready(function(){
	
	
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
	



	var errorAanmelden = new Array();

	$("#aanmeldForm").submit(function() {
	errorAanmelden =  new Array();
	   // validate		
	   
	   firstrun = true;
	   if($(".voornaamBlock input").val() == '' || $(".achternaamBlock input").val() == '') {
				errorAanmelden.push("Vul uw volledige naam in");
				showError('Vul uw volledige naam in.',$(".voornaamBlock"));			
		}
	   
	   if($("#aanmeldenEmail input").val() == ''){
				errorAanmelden.push("vul email in");
				showError('U heeft geen email adres ingevuld.',$("#aanmeldenEmail"));
				$("#aanmeldenEmail").css("background-color","#FBDDD5");

		}
		
		if($("#aanmeldenEmail input").val() != ''){
			if(!validEmail($("#aanmeldenEmail input").val())){
				errorAanmelden.push("vul correct email adres in");
				showError('Vul een correct email adres in.',$("#aanmeldenEmail"));
				$("#aanmeldenEmail").css("background-color","#FBDDD5");
			}	
		}
  
		$(".telefoonBlock input").val($(".telefoonBlock input").val().replace(/\D/g,''));
	   if($(".telefoonBlock input").val().length < 10 || !$.isNumeric($(".telefoonBlock input").val())){
				errorAanmelden.push("vul telefoon in");
				showError('U heeft geen telefoonnummer ingevuld.',$(".telefoonBlock"));
				$(".telefoonBlock").css("background-color","#FBDDD5");
		}
		 
		
		if($(".voornaamBlock input").val() == '') {
			$(".voornaamBlock").css("background-color","#FBDDD5");
		}
		if($(".achternaamBlock input").val() == '') {
			$(".achternaamBlock").css("background-color","#FBDDD5");
		} 
		
		
		if(errorAanmelden.length == 0) {
			
			$.post( "/ajax/email/", { email: $("#aanmeldenEmail input").val() }).done(function( data ) {
				if(data != '0') {					
					showError('Dit email adres is al in gebruik.',$("#aanmeldenEmail"));
					$("#aanmeldenEmail").css("background-color","#FBDDD5");
					return false;
				}
				else {
					$( "#aanmeldForm" ).submit();
					submitAllowed = true;
				}
		  });
		  
			if(!submitAllowed) {
				return false;
			}
			
		}
		else {
			console.log(errorAanmelden);
			return false;
		}
		


	});

	var errorLogin = new Array();
	
	$("#login").submit(function() {
		errorLogin.length = 0;
	
	   if($("#loginEmail input").val() == ''){
				errorLogin.push("vul email in");
				$("#loginEmail").css("background-color","#FBDDD5");

		}
		
		if($("#loginEmail input").val() != ''){
			if(!validEmail($("#loginEmail input").val())){
				errorLogin.push("vul correct email adres in");
				$("#loginEmail").css("background-color","#FBDDD5");
			}	
		}	
		
	   if($("#password input").val() == ''){
				errorLogin.push("vul email in");
				$("#password").css("background-color","#FBDDD5");

		}

		if(errorLogin.length == 0) {
			submitCommentForm();
		}else{
		console.log(errorLogin);
			return false;
		}

	});	
	
	$(  window ).resize(function() {
		$( '.popover' ).hide();
	});
});

function showError(msg,position) {
	if(firstrun) {
		
		
		console.log('Scroll value' + ($( window ).scrollTop()/10));
		console.log(position.offset().top);
		$('.popover').show(); 
		$('.popover').css('top',position.offset().top+($( window ).scrollTop()/10));
		$('.popover').css('left',  position.offset().left );
		$('.popover').css('display',  'inline-block' );
		$('.popoverText').html(msg);
		$('.popover').css('margin', 0);
		$('.popover').css('margin-left',  -$('.popover').width()-20);
		
		
		
		firstrun = false;
	}
}
/*
     FILE ARCHIVED ON 19:09:09 Sep 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:39:09 Feb 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 18.728
  PetaboxLoader3.resolve: 55.681
  exclusion.robots.policy: 0.243
  captures_list: 96.804
  exclusion.robots: 0.259
  LoadShardBlock: 62.936 (3)
  PetaboxLoader3.datanode: 182.621 (4)
  esindex: 0.012
  CDXLines.iter: 11.78 (3)
  load_resource: 181.106
*/