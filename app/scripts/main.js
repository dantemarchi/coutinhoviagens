$(document).ready(function() {
	$('#fullpage').fullpage({
		//equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
		easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		sectionsColor: ['#FFFFFF', '#005CA0', '#F5F5F5', '#FFFFFF', '#005CA0'],
		menu: '#menu',
		slidesNavigation: true,
		keyboardScrolling: true,
		resetSliders: true,

		afterLoad: function(anchorLink, index){
			//section 2
			if(anchorLink == '3rdPage'){
				//moving the image
				$('#section2').find('.col-md-4').delay(0).animate({
					top: '0%'
				}, 500, 'easeInOutQuad');
			}
		}
	});

});