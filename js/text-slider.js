(function ( $ ) {

    $.fn.textSlider = function ( options ) {

        /* Default settings */
        var settings = $.extend({
            timeout:     7500,
            nextItem:    0,
            CurrentItem: 1,
            count:       1
        }, options );

        $(this).children('.slider-item').each(function () {

            $(this).addClass( 'slide-' + settings.count ).css({opacity: 0});

            settings.count++;

        });

        function transition ()
        {

            settings.nextItem = settings.currentItem + 1;
            if ( settings.nextItem >= settings.count )
                settings.nextItem = 1;

            $('.slide-' + settings.currentItem ).animate({ paddingTop: '200px', opacity: 0 }, 750, function () {
                $(this).hide();
                $('.slide-' + settings.nextItem ).show().animate({ paddingTop: '150px', opacity: 1 }, 750);

                settings.currentItem = settings.nextItem;

            });

            setTimeout ( transition, settings.timeout );
        }

        return transition ();

    };

}( jQuery ));