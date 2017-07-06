// Declare DOM Components
var food_name = document.querySelector('input.food_name');
var food_weight = document.querySelector('input.food_weight');
var calculate = document.querySelector('button.submit');
var print_answer = document.querySelector('div.print_answer');

calculate.addEventListener('click', function(){
  var food;
  var weight;
  var calculation;
  var answer = document.createElement('h1')
      answer.className = "margin-bottom-20";
  // Loop through directory
  for (var i = 0; i < food_directory.length; i ++ ){

    // Variable to clean up code and make i value more readable
    food = food_directory[i];
    weight = parseFloat(food_weight.value);

    // Check if food name is in directory
    if(food_name.value == food.name){
      calculation = food.protein/100 * weight;
      answer.textContent = calculation;
      print_answer.appendChild(answer);
      console.log(answer);
    }
  }
});
