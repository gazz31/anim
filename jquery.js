$(window).ready(function(){
    $("#go").click(function(){
        $("#moon_hide").css({"visibility":"hidden"});
    });
});

$(window).ready(function(){
    $("#go").click(function(){
        $("#moon_show").css({"visibility":"visible"}),
        $("#moon_show").animate({"left":"+=480px"})
       
  
       
      
    });
});


$(window).ready(function(){
    $("#go").click(function(){
      
        $("#moon_show").animate({"bottom":"+=310px"})
       
  
       
      
    });
});

//$("#moon_show").animate({"right":"+=380px"})
