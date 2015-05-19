/* main css elements for accordion only */

init:function(){
				$('a.toggle-section').on('click',$.proxy(this.changeSection,this));
			},
			changeSection:function(e){
				e.preventDefault();
				var $link = $(e.target);
				var $section = $link.parent();
				var alreadyOpen = $section.hasClass('section-open');
				// Close open sections
				var $openSection = $('.section-open');
				if ($openSection.length){
					$openSection.removeClass('section-open');
				}
				// If it wasn't already open, open it. Otherwise leave it closed
				if (!alreadyOpen){
					// open clicked section
					
					$section.addClass('section-open');
					$("body,html").animate({scrollTop:$section.offset().top},500);
					
		         }