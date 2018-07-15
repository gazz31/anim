


var text_0 = "";
text_0.css(
    {"font-size": 24,
    "font-wieght": "bolder"}
);



$(document).ready(function(){
    $("#go").click(function(){
        $("#middle").text("wow!!!")
    });




});
$(document).ready(function(){
    $("#middle").load(function(){
        if ( $("#moon_show").animate({"left":"+=700px"}))
        {
             
            $(document).ready(function()
            {
                step_0(); 
            })

        }

    });

});
function step_1() 
{
    var text_1 = "gora";
    text_1.css({
        "font-size": "26px",
        "color": "red",
        "font-Style": "italic",
        "font-weight": "bolder"
    });
}
function step_2() 
{
    var text_2 = "lewa";
    text_2.css({
        "font-size": "26px",
        "color": "green",
        "font-Style": "italic",
        "font-weight": "bolder"
    });
}
function step_3() 
{
    var text_3 = "dol";
    text_3.css({
        "font-size": "26px",
        "color": "yellow",
        "font-Style": "italic",
        "font-weight": "bolder"
    });


}
  


    function one()
    {

        $("#moon_show").css({"visibility":"visible"}),
        $("#moon_show").animate({"left":"+=700px"}),
        $("#moon_show").delay(1000),
        
        $("#moon_show").animate({"bottom":"+=325px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"-=620px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"bottom":"-=265px"})
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"+=540px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"bottom":"+=215px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"-=500px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"bottom":"-=180px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"+=390px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"bottom":"+=150px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"-=280px"}),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").animate({"left":"-=80px"})


    }

    function link()
    {
        $(location).attr('href', 'one.html');
    }


if ($(document).ready())
{
    
        $(window).ready(function(){
            $("#go").click(function(){
                $("#moon_hide").css({"visibility":"hidden"});
            });
        });


        $(document).on('mousemove', function(e){
            $("#go").html('Coords:Y:'+e.clientY+"X:"+e.clientX);
            

        });


        $("#moon_show").css("box-sizing", 'border-box');
        $("#moon_show").css("font-size", "2");

        $("#moon_show").css("padding-top", "-=6");
        $("#moon_show").css("padding-bottom", "-=6"); 
    
        $(window).ready(function(){
    
        
            $("#go").click(function(){
                setTimeout(one,3000);
                
                setTimeout(link,23000);
            
            
                
            
            
                    
                
            
                    
                
            });
            
        });

      

}

    

    



    
  


  
    





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