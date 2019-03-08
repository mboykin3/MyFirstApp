$(document).ready(function (){
  console.log("You are reading this orm the console");

  


  $("h1").css("color", "red");
  $("h1").innerHtml = "changed from main.js";


  paper.install(window);
  //paper.setup(document.getElementById("mainCanvas"));
  paper.setup($("#mainCanvas")[0]);
  var c = Shape.Circle(200,200, 50);

  c.fillColor = "green";



  paper.view.draw();
  // your code will start here...
  
                

('main.js loaded');

  // ...and end here
});
