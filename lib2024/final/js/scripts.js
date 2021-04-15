// const lightbox= document.createElement('img')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image =>{
// 	image.addEventListener('click', e=> {
// 		lightbox.classList.add('active')
// 		const img = document.getElementsById('image').src = "img/girlsontruck.jpg";
// 	})
// })

// lightbox.addEventListener('click', e=> {
// 	if (e.target !== e.currentTarget) return
// 	lightbox.classList.remove('active')
// })

jQuery(document).ready(function($) {
     
  $('.lightbox_trigger').click(function(e) {
     
	
e.preventDefault();
var image_href = $(this).attr("href");
if ($('#lightbox').length > 0) { // #lightbox exists
     
    //insert img tag with clicked link's href as src value
    $('#content').html('<img src="' + image_href + '" />');
     
    //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
    $('#lightbox').show();
}
$('body').on('click', '#lightbox', function() {
    $('#lightbox').hide();
});
 
});
 
});