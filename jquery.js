



$(document).ready(function(){
    $("#go").show(function(){
        $("#text").text("wow!!!"),
        $("#text").css({"box-sizing": "border-box"})
    });




});





function step_0() 
{
  
		$("#moon_show").css({"visibility":"invisible"});
		
		$("#moon_show").delay(500).animate({

		
        "left":"+=77.5%"
        
    
    });

        $("#moon_show").delay(800).animate({

    
            "bottom":"+=72%"
    

    });
         $("#moon_show").delay(800).animate({

    
            "left":"-=-10.4%"

    }); 
    $("#moon_show").delay(800).animate({

    
        "bottom":"+=28.8%"

    });
    $("#moon_show").delay(800).animate({

    
        "left":"+=65%"

    });
    $("#moon_show").delay(800).animate({

    
        "bottom":"+=57.6%"

    });
    $("#moon_show").delay(800).animate({

    
        "left":"+=23%"

    });
    $("#moon_show").delay(800).animate({

    
        "bottom":"-=-43%"

    });
    $("#moon_show").delay(800).animate({

    
        "left":"-=-65%"

    });
    $("#moon_show").delay(800).animate({

    
        "left":"+=+35%",
       
    });
   
        
        
        $("#moon_show").css({'background':'red'})
           
        
    

}




  

    function link()
    {
       
        $(location).attr('href', 'one.html');
    }


if ($(document).ready())
{
    
        $(window).ready(function(){
            $("#go").click(function(){
                $(".moon_0").css({"visibility":"hidden"});
				$(".moon_2").css({"visibility":"hidden"});
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
                step_0(); 
                setTimeout(link,15000);
              
                
                
            
            
                    
                
            
                    
                
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