function imgAppearOpen() {
	
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
			'z-index' : 1
			},
			click: function(){
				imgAppearClose();
			}
	}).appendTo('#imgAppear_wrapper');

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


	jQuery('<div/>', {
		id: 'imgAppear_img',
		css: {
			background: 'green',
			position: 'relative',
			width: '100px',
			height: '100px',
			'float': 'left',
			'z-index' : 2
		}
	}).appendTo('#imgAppear_wrapper');
	
		jQuery('<div/>', {
		id: 'imgAppear_close',
		css: {
			position: 'relative',
			width: '13px',
			height: '13px',
			'margin-left' : '-6px',
			'margin-top' : '-6px',
			'float': 'left',
			'z-index' : 2
		}
	}).appendTo('#imgAppear_wrapper');

	jQuery('<img/>', {
		id: 'imgAppear_close_img',
		css: {
			position: 'relative',
			src: 'close.png',
			'float': 'left',
			'z-index' : 3
		},
		click: function(){
			imgAppearClose();
		}
	}).appendTo('#imgAppear_close');




	return false;
}

function imgAppearClose() {

$("#imgAppear_wrapper").remove();
$("#imgAppear_shade").remove();
$("#imgAppear_topFloat").remove();
$("#imgAppear_leftFloat").remove();
$("#imgAppear_img").remove();

return true;
}
