//Creates special single image webpage that is tinted black with a given image in the center of the webpage
//To exit the display click anywhere not on the image itself
function imgAppearOpen(imgSrc) {

//Create Fixed Wrapper Div 	
	jQuery('<div/>', {
		id: 'imgAppear_wrapper',
		css: {
			width: '100%',
			height: '100%',
			position: 'fixed',
			'float' : 'left',
			top:0,
			left: 0
		}
	}).appendTo('body');

//Creates Shaded Div that tints whole page black
	jQuery('<div/>', {
		id: 'imgAppear_shade',
		css: {
			background: 'black',
			opacity: 0.8,
			width: '100%',
			height: '100%',
			position: 'fixed',
			top: 0,
			left: 0,
			display: 'none',
			'z-index' : 1
			},
			click: function(){
				imgAppearClose();
			}
	}).appendTo('#imgAppear_wrapper').fadeIn('slow', function() {});

//Divs topFloat and leftFloat allow the image divs to be almost near the center
	jQuery('<div/>', {
		id: 'imgAppear_topFloat',
		css: {
			width: '100%',
			height: '50%',
			position: 'relative',
			'float' : 'left',
			top:0,
			left: 0,
		}
	}).appendTo('#imgAppear_wrapper');

	jQuery('<div/>', {
		id: 'imgAppear_leftFloat',
		css: {
			width: '50%',
			height: '50%',
			position: 'relative',
			'float' : 'left',
			top: '50%',
			left: 0
		}
	}).appendTo('#imgAppear_wrapper');

//Create image object from href source
var t = new Image();
t.src = $(imgSrc).attr("href");

//Make sure image loads first
t.onload = function(){
	//Div that holds the image to be displayed
		jQuery('<div/>', {
			id: 'imgAppear_img',
			css: {
				position: 'relative',
				'margin-left': -t.width/2,
				'margin-top': -t.height/2,
				'float': 'left',
				'z-index' : 2
			}
		}).appendTo('#imgAppear_wrapper');
		
		//Main image to be displayed
		jQuery('<img/>', {
			id: 'imgAppear_img_img',
			src: $(imgSrc).attr("href"),
			css: {
				position: 'relative',
				'float': 'left',
				display : 'none',				
				'z-index' : 3
			}
		}).appendTo('#imgAppear_img').fadeIn('slow', function() {});

		//Close Button Image
		jQuery('<img/>', {
			id: 'imgAppear_close_img',
			src: 'imgAppear/close.png',
			css: {
				position: 'absolute',
				left: t.width,
				'margin-left' : '-8px',
				'margin-top' :'-4px',				
				'float': 'left',
				display : 'none',
				cursor: 'pointer',
				'z-index' : 3
			},
			click: function(){
				imgAppearClose();
			}
		}).appendTo('#imgAppear_img').fadeIn('slow', function() {});
	};
	
	return false;
}

//Removes all created divs and images from HTML
function imgAppearClose() {

	$("#imgAppear_wrapper").fadeOut("slow", function () {	$("#imgAppear_wrapper").remove(); });
	return true;
}
