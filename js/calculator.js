// Wrap script in sell calling function
// to prevent pollution of global scope
(function(){

    // Declare DOM Components
    // Inputs
    var food_name = document.querySelector('input.food_name');
    var food_weight = document.querySelector('input.food_weight');
    var exchanges = document.querySelector('input.exchanges');

    // Labels
    // Check which value user is trying to find and adjust algorithim
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
    // TODO: Add event listener on form, not submit button
    calculate.addEventListener('click', function(){

      // Loop through directory
      // TODO: Binary Search to increase efficiency
      for(var i = 0; i < food_directory.length; i += 1 ){

        // Variable to clean up code and make i value more readable
        var food = food_directory[i];
        var exchanges = parseFloat(food_weight.value);
        var weight = parseFloat(food_weight.value);
        var name = food_name.value.toLowerCase();

        // If the form is to calculate food weight
        if(label_exchanges){
            // Check if food name is in directory
            if(name == food.name){
              var calculation = 100/food.protein * exchanges;
              answer.textContent = calculation;
              print_answer.appendChild(answer);

              // clear weight input field
              food_weight.value ='';
            }
        }
        // If the form is to calculate food exchanges
        else if(label_weight){
            // Check if food name is in directory
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

    // Clear form
    clear.addEventListener('click', function(){
      // Clear content from input form
      food_name.value ='';
      food_weight.value ='';
      print_answer.removeChild(answer);
    })
})();