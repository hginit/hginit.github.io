jQuery(document).ready( function(){

	$(".navbutton").hover( 
		function() { 
			if (!($(this).hasClass('selected'))) {
				$(this).children(".bottom").animate({ top: '65px' }, 200)
			};
		}, 
		function() {
			if (!($(this).hasClass('selected'))) {
				$(this).children(".bottom").animate({ top: '30px' }, 200)
			};
		}
	);

	$('html').click(
		function() {
			$('div#kilnFlyOut').animate({top: '-57px'}, 600);
			$('div#kilnFlyOut').removeClass('isOut');
		}
	);

	$("div#kilnFlyOut").click(
		function(e) {
			if ($.browser.msie)
			{
				var fAllow = true;
				try { if (parseFloat($.browser.version) < 7.0) fAllow = false;}
				catch(e) {fAllow = false;};
				if (!fAllow)
				{
					window.location = 'http://kilnhg.com';
					return;
				}
			}
			e.stopPropagation();
			if (!($('div#kilnFlyOut').hasClass('isOut'))) {
				$(this).animate({top: '25px'}, 600);
				$('div#kilnFlyOut').addClass('isOut');
			}
			else {
				$('div#kilnFlyOut').animate({top: '-57px'}, 600);
				$('div#kilnFlyOut').removeClass('isOut');
			}
		}
	);
	
});
