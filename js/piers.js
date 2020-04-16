// Put the balanceText utility into "polyfill" mode
    // This was the default mode of the 2.0.0 jQuery plugin when it loaded
    $.ready(function() {
        balanceText(); 
    });

    // manually trigger on a list of elements
    balanceText($('.my-class')); // equivalent to $('.my-class').balanceText();

    // manually trigger on a list of elements and update on browser resize
    balanceText($('.my-class'), {watch: true}); // equivalent to $.balanceText('.my-class');

    // manually re-balance all triggered elements
    balanceText.updateWatched(); // equivalent to $.fn.balanceTextUpdate();