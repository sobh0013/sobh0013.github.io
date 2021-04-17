window.onload = init;

function init() {

alert('I am linked');

// Mobile Nav JavaScript
document.querySelector('.ham').onclick = showHideMobileMenu;

function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

	$('#form').submit(function (e) {
		// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
   		 $(".overlay-container").fadeIn(1000, function(){
   		 	showformValues(form);
   		 	$('.overlay-container').delay(500).fadeOut(500);
   		 		$("#results").addClass('reveal');
   		 });
	});

function showformValues(form){
	//serializeArray is a jquery function used to get the values of a form as js Object
	var formValues = $(form).serializeArray(); 
	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_result").text(field.value);
			if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});				
}
}


