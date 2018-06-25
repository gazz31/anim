$(window).ready(function(){
    $("#go").click(function(){
        $("#moon_hide").css({"visibility":"hidden"});
    });
});

$(window).ready(function(){
    $("#go").click(function(){
        $("#moon_show").css({"visibility":"visible"}),
        $("#moon_show").animate({"left":"+=698px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").animate({"bottom":"+=335px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").animate({"left":"+=335px"}),
         $("#moon_show").animate({"left":"+=0"}),

        $("#moon_show").animate({"left":"-=490px"}),
        $("#moon_show").animate({"top":"+=0"}).delay(500),
        $("#moon_show").animate({"top":"+=330px"})
      
    });
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