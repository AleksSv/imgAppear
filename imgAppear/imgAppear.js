//Creates special single image webpage that is tinted black with a given image in the center of the webpage
//To exit the display click anywhere not on the image itself
function imgAppearOpen(imgSrc) {

//Create image object from href source
var t = new Image();
t.src = $(imgSrc).attr("href");
t.id = "imgAppear_img";
//Create Fixed Wrapper Div 	
	jQuery('<div/>', {
		id: 'imgAppear_wrapper',
		css: {
			width: '100%',
			height: '100%',
			position: 'fixed',
			'z-index' : 2,
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



//Get the Width and Height of the Browser
var wrapWidth = $('#imgAppear_wrapper').width();
var wrapHeight = $('#imgAppear_wrapper').height();



//Make sure image loads first
t.onload = function(){

	//Calculate the top and bottom height margins, and check if the image has greather width or height than browser
	//Purpose of + 10 is so the close img does not get cut off
	var marginHeight;
	var maxWidth;
	var maxHeight;

	if (wrapHeight > t.height + 10)
	{
		marginHeight = (wrapHeight - t.height)/2;
		maxHeight = t.height + 10;
	}
	else
	{
		marginHeight = 0;
		maxHeight = wrapHeight
	}

	if (wrapWidth > t.width + 10)
	{
		maxWidth = t.width + 10;
	}
	else
	{
		maxWidth = wrapWidth ;
	}
	//Div that holds the image to be displayed
		jQuery('<div/>', {
			id: 'imgAppear_img',
			css: {
				position: 'relative',
				overflow: 'auto',					
				width:maxWidth,
				height: maxHeight,
				margin: '0 auto',
				'margin-top': marginHeight,
				'z-index' : 3
			}
		}).appendTo('#imgAppear_wrapper');
		
		//Main image to be displayed
//		$('#imgAppear_img').append(t).fadeIn('slow', function() {});


		jQuery(t).css({
				position: 'relative',
				top: 5,
				display : 'none',				
				'z-index' : 2
			}).appendTo('#imgAppear_img').fadeIn('slow', function() {});

		//Close Button Image
		jQuery('<img/>', {
			id: 'imgAppear_close_img',
			src: 'imgAppear/close.png',
			css: {
				position: 'absolute',
				left: t.width,
				top: 5,
				'margin-left' : '-8px',
				'margin-top' :'-4px',				
				display : 'none',
				cursor: 'pointer',
				'z-index' : 2
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
