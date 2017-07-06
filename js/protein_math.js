// Test Value
var protein_per_hundred = 2.4;

var food;
var weight;
var answer;

function find_protein_value(){
  for (var i = 0; i <= food_directory.length; i+= 1){
    //Variable to clean up code and make i value more readable
    food = food_directory[i];
    weight = parseFloat(food_weight);

    if(food_name == food.name){
      answer = food.protein/100 * weight;
      document.write(answer);
      console.log(answer);
    }else{
      //return error if it doesn't match value
      return -1;
    }
  }
}
