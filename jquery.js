$(window).ready(function(){
    $("#go").click(function(){
        $("#moon_hide").css({"visibility":"hidden"});
    });
});






   
   $(window).ready(function(){
        
        $("#go").click(function(){
            $("#moon_show").css({"visibility":"visible"}),
            $("#moon_show").delay(5000),
            $("#moon_show").animate({"left":"+=1010px"}),
            
            
                $("#moon_show").animate({"bottom":"+=0"}),
            
            $("#moon_show").delay(5000),
            $("#moon_show").animate({"bottom":"+=328px"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").delay(5000),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"-=700px"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"-=265px"})
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"+=880px"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"+=215px"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"-=560px"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"-=163px"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"+=0"}),
            $("#moon_show").animate({"left":"+=390px"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"+=0"}),
            $("#moon_show").animate({"bottom":"+=163px"}),
            $("#moon_show").animate({"bottom":"+=163px"})
           
           
        });
        
    });
    
    

    $(document).on('mouseenter', function(e){
        $('#moon_show').html('Coords:Y:'+e.clientY+"X:"+e.clientX);
        $("#moon_show").css("box-sizing", 'border-box');
        $("#moon_show").css("font-size", "2");
       
        $("#moon_show").css("padding-top", "-=6");
        $("#moon_show").css("padding-bottom", "-=6");
    
    });

       


    
  


  
    





//$("#moon_show").animate({"right":"+=380px"})



/*$("#circle-but").on("click", moveBall);
//Animate square
$("#square-but").on("click", moveSquare);

//Ball animation function
function moveBall(){
//select ball
  $(".ball").animate({
// animate it to the right
  "left":400
  //callback
    //set it for 2s and proceed
}, 2000, function(){
  //after 2s, continue animating
    $(".ball").animate({
//return it to original state
  "top":0,
  "left":0
      //finally after animation are done, we prompt it with our message!
    }, function(){
    alert("Circle Animated!")
    });
});
}

//Square animation function
function moveSquare(){
$(".square").slideUp(2000,slideSquare);
};
                     
function doneAnimatingSquare(){
alert("Square Animated!");
};
function slideSquare(){
$(".square").slideDown(2000);
};*/