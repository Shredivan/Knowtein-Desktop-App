// Declare DOM Components

// Inputs
var food_name = document.querySelector('input.food_name');
var food_weight = document.querySelector('input.food_weight');
var exchanges = document.querySelector('input.exchanges');

// Labels
//  * Check which value user is trying to find and adjust algorithim
var label_exchanges = document.querySelector('label.food_exchanges');
var label_weight = document.querySelector('label.food_weight');


// Buttons
var calculate = document.querySelector('button.submit_button');
var clear = document.querySelector('button.clear_button');

// Print answer to DOM
var print_answer = document.querySelector('div.print_answer');
var answer = document.createElement('h1')
    answer.className = "margin-bottom-20";

// Form Event Listener
calculate.addEventListener('click', function(){
  var food;
  var exchanges;
  var name;
  var calculation;

  // Loop through directory
  // TODO: Binary Search to increase efficiency
  for (var i = 0; i < food_directory.length; i++ ){

    // Variable to clean up code and make i value more readable
    food = food_directory[i];
    exchanges = parseFloat(food_weight.value);
    weight = parseFloat(food_weight.value);
    name = food_name.value.toLowerCase();


    if(label_exchanges){
        // Check if food name is in directory
        if(name == food.name){
          calculation = 100/food.protein * exchanges;
          answer.textContent = calculation;
          print_answer.appendChild(answer);

          // clear weight input field
          food_weight.value ='';
        }
    }else if(label_weight){
        if(name == food.name){
           calculation = food.protein/100 * weight;
           answer.textContent = calculation;
           print_answer.appendChild(answer);

           // clear weight input field
           food_weight.value ='';
        }
    }
  }
});

// Clear Form
clear.addEventListener('click', function(){
  // Clear content from input form
  food_name.value ='';
  food_weight.value ='';
  print_answer.removeChild(answer);
})
