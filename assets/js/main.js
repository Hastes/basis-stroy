// Smooth scrolling
var $scrollingLinks = $(".smooth-scrolling").find("a[data-item]");

    $scrollingLinks.click(function(e) {
        var id = $(this).attr("data-item");
        var new_position = $(id).offset();
        $('html, body').stop().animate({ scrollTop: new_position.top}, 500);
        e.preventDefault();
    });
    
// Button to top
var $btn_to_top = $("#toTop");
var $window = $(window);
var $windowHeight = $(window).height();

    $window.resize(function() {
        $windowHeight = $(window).height();
    });

    $window.scroll(function() {
        var $windowScroll = $(window).scrollTop();

        if ($windowScroll >= 200) {
            $btn_to_top.fadeIn();
        } else {
            $btn_to_top.fadeOut();
        }
    });