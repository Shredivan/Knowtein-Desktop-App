// Declare DOM Components
var food_name = document.querySelector('input.food_name');
var exchanges = document.querySelector('input.exchanges');
var calculate = document.querySelector('button.submit_button');
var clear = document.querySelector('button.clear_button');
var print_answer = document.querySelector('div.print_answer');
var answer = document.createElement('h1')
    answer.className = "margin-bottom-20";

calculate.addEventListener('click', function(){
  var food;
  var exchanges;
  var name;
  var calculation;

  // Loop through directory
  // TODO: Binary Search to increase efficiency of Search.
  for (var i = 0; i < food_directory.length; i ++ ){

    // Variable to clean up code and make i value more readable
    food = food_directory[i];
    exchanges = parseFloat(food_weight.value);
    name = food_name.value.toLowerCase();

    // Check if food name is in directory
    if(name == food.name){
      calculation = 100/food.protein * exchanges;
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
