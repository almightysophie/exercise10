$(document).ready(function(){
    $("button").click(function(){
      $("#home").fadeToggle();
      $("#home").fadeToggle("slow");
      $("#home").fadeToggle(3000);
    });
  });