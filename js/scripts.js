$(function(){

  $('#math').click(function(){

    var add = function (number1, number2) {  return number1 + number2;};
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));

    var result = add(number1, number2);
    alert("Added: " + result);

    var sub = function (number1, number2) {
      return number1 - number2;
    };

    alert("Subtracted: " + sub(number1, number2));

    var mult = function (number1, number2) {
      return number1 * number2;
    };

    alert("Multiplied: " + mult(number1, number2));

    var div = function (number1, number2) {
      return number1 / number2;
    };

    alert("Divided: " + div(number1, number2));

  });

  $('#bmi').click(function(){
    var inches = parseInt(prompt("Heigt in inches: "));
    var weight = parseInt(prompt("Weight in lbs: "));
    alert(((weight)/(inches*inches))*703);
  });

  $('#tempc2f').click(function(){
    var celcius = prompt("Temperature in Celcius: ");
    alert(celcius * 9/5 + 32);
  });

  $('#tempf2c').click(function(){
    var f = prompt("Temperature in Fahrenheit: ");
    alert((f-32)*5/9);
  });

  $('#quarts2liters').click(function(){
    var q = prompt("How many quarts do you have?");
    alert((q/1.05669));
  });
  $('#liters2quarts').click(function(){
    var l = prompt("How many liters do you have?");
    alert((l*1.05669));
  });
});
