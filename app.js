// $("selector").accion 

$(function(){

    $(".vertical_dots").dblclick(function(){
       
        $(".config").slideDown();
    });
    
    $(".vertical_dots").click(function(){
       
        $(".config").slideUp();
    });
    
    
    $(".hamburguer").click(function(){
       
        $(".sidebar").slideDown();
    });

});