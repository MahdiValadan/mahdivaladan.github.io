$(document).ready(function(){
    $('#nav-button').click(function (){
        let navbar = $('#navbar')
        $(this).addClass('animation-swing');
        $(this).one('animationend', function(event) {
            $(this).removeClass('animation-swing')
        });
        if(navbar.css("width") !== "0px"){
            navbar.css("width","0%")
            $("#nav-button-icon").text("menu");
        }
        else {
            if (window.innerHeight > window.innerWidth){
                navbar.css("width","100%")
            }
            else{
                navbar.css("width","17%")
            }
            $("#nav-button-icon").text("close");
        }
    })

})
