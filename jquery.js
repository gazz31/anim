



$(document).ready(function(){
    $("#go").show(function(){
        $("#text").text("wow!!!"),
        $("#text").css({"box-sizing": "border-box"})
    });




});
$(document).ready(function(){
    $("#text").load(function(){
    
             
            $(document).ready(function()
            {
                step_0(); 
            })

      

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

$("p#44.test").css("background-color","red");

    function one()
    {
        
        
        
        $("#moon_show").css({"visibility":"invisible"}),
		$("#moon_show").delay(500),
		$("#moon_show").animate({"left":"=0%"}),
        $("#moon_show").animate({"left":"+=77.5%"}),

        $("#moon_show").delay(500),
		$("#moon_show").animate({"bottom":"=0%"}),
		$("#moon_show").animate({"bottom":"+=72.2%"}),
 
  
        $("#moon_show").delay(500),
		$("#moon_show").animate({"left":"=0%"}),
		$("#moon_show").animate({"left":"-=-10.4%"}),
        
      
        $("#moon_show").delay(500),
		$("#moon_show").animate({"bottom":"=0%"}),
        $("#moon_show").animate({"bottom":"+=28.8%"})

        $("#moon_show").delay(500),
		$("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").animate({"left":"+=65%"}),
        
        $("#moon_show").delay(500),
        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").animate({"bottom":"+=57.6%"}),

        
        $("#moon_show").delay(500),
        $("#moon_show").animate({"left":"=0%"}),
        $("#moon_show").animate({"left":"+=23%"}),
        
        $("#moon_show").delay(500),
        $("#moon_show").animate({"bottom":"=0%"}),
        $("#moon_show").animate({"bottom":"-=-43%"}),

        $("#moon_show").delay(500),
        $("#moon_show").animate({"left":"=0%"}),
        $("#moon_show").animate({"left":"-=-65%"}),

        $("#moon_show").animate({"bottom":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"bottom":"+=170px"}),
        $("#moon_show").animate({"left":"+=0"}),
        $("#moon_show").delay(1000),
        $("#moon_show").animate({"left":"-=290px"}),
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
                setTimeout(one,1000);
                
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