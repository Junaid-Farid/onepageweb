jQuery("document").ready(function ($) {
    var nav = $('#navigation-bar');
    var pos = nav.offset().top;

    $(window).scroll(function () {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        nav.toggleClass("fix-nav", fix);
        $('body').toggleClass("fix-body", fix);
    });

    //bar chart skills
    $('.chart').horizBarChart({
        selector: '.bar',
        speed: 3000
    });

    //service main tabbed panels
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");
    });

    $("#service-slider").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        navigation: true,
        navigationText: [
            '<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-2x  fa-angle-right" aria-hidden="true"></i>'
        ]
                // "singleItem:true" is a shortcut for:
                // items : 1, 
                // itemsDesktop : false,
                // itemsDesktopSmall : false,
                // itemsTablet: false,
                // itemsMobile : false

    });

    //recent work tabs
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    //world Map
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 1,
            minZoom: 1
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    //scroll to top
    $("#move_up").click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '100', 'swing');
        return false;
    });
});