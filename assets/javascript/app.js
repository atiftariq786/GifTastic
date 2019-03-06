
$(document).ready(function () {
    

 

 function ajaxQuery(animals){

 

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=a5W87BWFnrdUxgTG8eWjb7rLW8i67AJE&limit=10";

  
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
       
      console.log(response);



      var apiResponse = response.data;

    //------------Operation---------------------------
      for(var i = 0; i< apiResponse.length;i++){
      
      var gifDiv = $('<div class="allResize">');

      var animalsImage = $('<img>');
              
      animalsImage.attr("src", apiResponse[i].images.downsized_still.url);

      animalsImage.attr("data-still", apiResponse[i].images.downsized_still.url);

      animalsImage.attr("data-animate", apiResponse[i].images.downsized_medium.url);

      animalsImage.attr("data-state", "still");

      animalsImage.on("click",function() {

        var state = $(this).attr("data-state");

        if (state === "still") {

          $(this).attr("src", $(this).attr("data-animate"));
  
          $(this).attr("data-state", "animate");
  
        } else {
  
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }


      });


      animalsImage.attr("width", "250px");
      animalsImage.attr("height", "200px");

      var p = $('<p class="allResize">').text("Rating: " + apiResponse[i].rating);

      gifDiv.prepend(animalsImage);
      gifDiv.prepend(p);

      //-------GIFs Pausing------

    //var data[""0""].images.downsized_still.url

    //data[""0""].images.downsized_small.mp4


      

      $("#gifs-display").prepend(gifDiv);



      
      }
      
  });

}

 //------------ Button section--------------------

 var buttonsArray=["Cat", "Rat", "Rabbit","Horse","Camel","Frog","Dog"];

  arrayOperation();
  
 
  //$(".allResize").width(260);

 function arrayOperation (){
    for (var i = 0; i < buttonsArray.length;i++){

      var newButton = $("<button>");

      newButton.addClass("resize");


     newButton.attr("data-name", buttonsArray[i]);

      newButton.text(buttonsArray[i]);
    
      $("#buttons-display").append(newButton);

    }
 }
 //-------Add Button On Click -----------------  

    


    $("#userSubmit").on("click", function(event) {

      event.preventDefault();

      var animalAdd = $("#userInput").val();

      var filter = buttonsArray.indexOf(animalAdd);

      if (animalAdd !== "" && filter === -1) {


        buttonsArray.push(animalAdd);

        var newButton1 = $("<button>");

        newButton1.on("click", function () {
   
        
          var animals = $(this).attr("data-name");
      
          ajaxQuery (animals);
          
      
      })
      
        


        newButton1.addClass("resize");
  
       newButton1.attr("data-name", animalAdd);
  
        newButton1.text(animalAdd);
  
        $("#buttons-display").append(newButton1); 
        
        

      }   
      
           
      
      
      
    });

    

//-------Button On Click operation----------------- 


  $("button").on("click", function () {
   
        
    var animals = $(this).attr("data-name");

    ajaxQuery (animals);
    
    console.log(animals); 

    

    



})


  
}) 