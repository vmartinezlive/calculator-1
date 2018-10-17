var add = function(number1, number2){
  return number1 + number2;
};
var sub = function (number1, number2) {
  return number1 - number2
};
 var mult = function (number1, number2) {
   return number1 * number2
};
var divide = function (number1, number2) {
  return number1 / number2
};
$(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output1").text(result);
  });
});
$(function(){
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $("#output2").text(result);
  });
});
$(function(){
  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = mult(number1, number2);
    $("#output3").text(result);
  });
});
$(function(){
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output4").text(result);
  });
});
$(function(){
  $('#quarts2liters').submit(function(event){
    event.preventDefault();
    var q = parseInt($("#quarts2liters1").val());
    var result = ((q/1.05669));
    $("#output5").text(result);
  });
});

$(function(){
  $('#quarts2qallons').submit(function(event){
    event.preventDefault();
    var q = parseInt($("#quarts2qallons1").val());
    var result = ((q/.25));
    $("#output6").text(result);
  });
});

$(function(){
  $('#quarts2pints').submit(function(event){
    event.preventDefault();
    var q = parseInt($("#quarts2pints1").val());
    var result = ((q*2));
    $("#output7").text(result);
  });
});
//   $('#math').click(function(){
//
//     var add = function (number1, number2) {  return number1 + number2;};
//     var number1 = parseInt(prompt("Enter a number:"));
//     var number2 = parseInt(prompt("Enter another number:"));
//
//     var result = add(number1, number2);
//     alert("Added: " + result);
//
//     var sub = function (number1, number2) {
//       return number1 - number2;
//     };
//
//     alert("Subtracted: " + sub(number1, number2));
//
//     var mult = function (number1, number2) {
//       return number1 * number2;
//     };
//
//     alert("Multiplied: " + mult(number1, number2));
//
//     var div = function (number1, number2) {
//       return number1 / number2;
//     };
//
//     alert("Divided: " + div(number1, number2));
//
//   });
//
//   $('#bmi').click(function(){
//     var inches = parseInt(prompt("Heigt in inches: "));
//     var weight = parseInt(prompt("Weight in lbs: "));
//     alert(((weight)/(inches*inches))*703);
//   });
//
//   $('#tempc2f').click(function(){
//     var celcius = prompt("Temperature in Celcius: ");
//     alert(celcius * 9/5 + 32);
//   });
//
//   $('#tempf2c').click(function(){
//     var f = prompt("Temperature in Fahrenheit: ");
//     alert((f-32)*5/9);
//   });
//
//   $('#quarts2liters').click(function(){
//     var q = prompt("How many quarts do you have?");
//     alert((q/1.05669));
//   });
//   $('#liters2quarts').click(function(){
//     var l = prompt("How many liters do you have?");
//     alert((l*1.05669));
//   });
// });
