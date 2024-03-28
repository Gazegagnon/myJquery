$(function(){
     $(".div1").hide();
     $("h1").on("click" , function(){
        $(".div1").slideDown(1000)});
    $(".p4").hide();
    $(".grid").hide();
    $(".p3").hide();
    
    $(".btn1").on("click" , function(){
        $(".grid").slideToggle(20);
        $(".p3").slideUp(20);
        $(".btn2").slideToggle(20);
        $(".p4").slideUp(20)});
        
    $(".btn2").on("click" , function(){
        $(".p1").slideToggle(20);
        $(".p3").slideToggle(20);
        $(".p2").slideUp(20);
        $(".grid").slideUp(20);
        $(".btn1").slideToggle(20);
        $(".p4").slideUp(20);
        $(".btn2").fadeOut(20)
    });

    $("input").on("click" , function(){
        $(".p3").slideUp(20);
        $(".grid").slideUp(20);
        $(".btn2").slideToggle(20);
        $(".p4").slideToggle(20);
        $(".p2").slideToggle(20);
        $(".p1").slideToggle(20);
        $(".button").slideToggle(20)});

    $(".p4").on("click" , function(){
     $(".button").slideDown(20);
     $(".p4").fadeOut(20);
     $(".p2").fadeIn(20);
     $(".p1").fadeIn(20)
    });
    
    $(".p3").on("click" , function(){
        $(".p4").fadeOut(20);
        $(".p3").fadeOut(20);
        $(".p1").fadeIn(20);
        $(".p2").fadeIn(20);
        $(".btn1").slideToggle(20);
        $(".btn2").slideToggle(20);
    });
































































































































})