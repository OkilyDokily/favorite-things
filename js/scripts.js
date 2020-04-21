$(document).ready(function(){


  $("form").submit(function(e){
    e.preventDefault();
    var inputs = $("input").map(function(){
      return $(this).val();
    }).get();
    console.log(inputs);
    var newArray = [];
    var one = inputs[0];
    var two = inputs[1];
    var three = inputs[2];

    newArray.push(two);
    newArray.push(three);
    newArray.push(one);

    newArray.forEach(function(item){
      $("ul").append("<li>"+ item +"</li>")
    });
  
  
  });


});