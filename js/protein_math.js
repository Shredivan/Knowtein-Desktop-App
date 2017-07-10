// Declare DOM Components
// TODO: Remove duplication of variables across files!!
var food_name = document.querySelector('input.food_name');
var food_weight = document.querySelector('input.food_weight');
var calculate = document.querySelector('button.submit_button');
var clear = document.querySelector('button.clear_button');
var print_answer = document.querySelector('div.print_answer');
var answer = document.createElement('h1')
    answer.className = "margin-bottom-20";

calculate.addEventListener('click', function(){
  var food;
  var weight;
  var name;
  var calculation;
  var grams;

  // Loop through directory
  // TODO: Binary Search to increase efficiency
  for (var i = 0; i < food_directory.length; i++ ){

    // Variable to clean up code and make i value more readable
    food = food_directory[i];
    weight = parseFloat(food_weight.value);
    name = food_name.value.toLowerCase();

    // Check if food name is in directory
    if(name == food.name){
      calculation = food.protein/100 * weight;
      answer.textContent = calculation;
      print_answer.appendChild(answer);

      // clear weight input field
      food_weight.value ='';
    }
  }
});

clear.addEventListener('click', function(){
  // Clear content from input form
  food_name.value ='';
  food_weight.value ='';
  print_answer.removeChild(answer);
})
