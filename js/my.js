$(function(){
    function inTop() {
        return ($(window).scrollTop() < 5);
    }
    var SHOWING = 'show-text';
    var HIDING = 'hide-text';
    var type = SHOWING;
    var $navbar = $("#header ul");
    var $magic = $("#header a.header-magic");
    function toggleMenu(toType) {
        if (type != toType) {
            $navbar.stop().animate({height:"toggle",width:"toggle",opacity:"toggle"});
            type = toType;
            $magic.text($magic.attr(type));
        }
    }
    $(window).scroll(
            function(){
                if (!inTop()) {
                    toggleMenu(HIDING);
                } else {
                    toggleMenu(SHOWING);
                }
            }
        );
    $("#header").hover(
            function() {
                toggleMenu(SHOWING);
            },
            function() {
              if (!inTop()) {
                  toggleMenu(HIDING);
              }
            }
        );
    $("#header a.header-magic").click(
            function(e){
               e.preventDefault();
               $("html,body").animate({scrollTop: 0});
            }
        );
    $magic.text($magic.attr(type));
});
