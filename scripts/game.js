//Been to variables
beentoforestopenning=true;

//Items
pickedupsword=false;

//Current Room
currentRoom="forest_openning";

document.ready(function(){
  $("form").submit(function(){
    var input = $("#command_line").val();
    
    if (input == "help"){
      $("#message_help").clone().insertBefore("#placeholder").fadeIn(1500);
        }
    $("#command_line").val("");
    
  });
});
