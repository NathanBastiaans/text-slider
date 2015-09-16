(function ( $ ) {

	$.fn.textSlider = function ( options ) {

		/* Default settings */
		var settings = $.extend(
			{
				timeout: 5000,
				slideTime: 750,
				loop: 1,
				height: 100
			},
			options 
		);

		var nextItem;

		var currentItem = 0;
		var count = 0;

		this.children('.slider-item').each(
			function () 
			{

				$(this)
				.addClass( 'slide-' + ( count ) )
				.css(
					{
						opacity: 0, 
						paddingTop: settings.height + 'px',
						paddingBottom: '0px'
					}
				);

				$(this).hide();

				count++;

			}
		);

		function firstSlide ()
		{

			$('.slide-' + currentItem )
			.show()
			.animate(
				{
					paddingTop:    ( settings.height / 2 ) + 'px', 
					paddingBottom: ( settings.height / 2 ) + 'px',
					opacity:       1
				},
				settings.slideTime
			);

			setTimeout ( transition, settings.timeout );

		}

		function transition ()
		{

			nextItem = parseInt ( currentItem + 1 );

			if ( nextItem >= count )
			{

				if ( settings.loop == 1 )
				{

					nextItem = 0;

				}
				else
				{

					return false;

				}

			}

			$('.slide-' + currentItem )
			.animate(
				{
					paddingTop:    settings.height + 'px', 
					paddingBottom: '0px',
					opacity:       0 
				}, 
				settings.slideTime,
				function () 
				{
					$(this).hide();
					$('.slide-' + nextItem )
					.show()
					.animate(
						{
							paddingTop:    ( settings.height / 2 ) + 'px',
							paddingBottom: ( settings.height / 2 ) + 'px', 
							opacity:       1 
						},
						settings.slideTime
					);
				}
			);

			currentItem = nextItem;

			setTimeout ( transition, settings.timeout );

		}

		return firstSlide ();

	};

}( jQuery ));