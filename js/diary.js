let input = document.querySelector('input');
let addToList = document.querySelector('button.addToList');
let submitRandom = document.querySelector('button.submit');
let ul = document.querySelector('ul');

// TODO: Create function to loop through all the list items and add delete button using target event
// TODO: Stop user from adding more than one name at a time

/*
* Empty array to hold values of input field
* Keep as block level element as will be accessed by more than one function
*/
let randomList = [];

//Function to take data from input form and add to list
addToList.addEventListener('click', () =>{

    // Check if form is empty before submitting value
    // Throw error if empty
    if(input.value.length == 0){
        console.log('error, you need to write a name');
    }else if(parseInt(input.value)){

        // TODO: Add While loop to remove it once user uses form after error
        // TODO: Don't allow more than one error to appear at a time
        // TODO: If error handling becomes to big, split errors into seperate files as objects

        // Create P element with error message
        let numberError = document.createElement('p');
            numberError.textContent += "You cant add numbers to the list";

        // Append error message to span area
        let errorArea = document.querySelector('span.errorArea');
            errorArea.appendChild(numberError);

        // Log area
        console.log('You cant add a number');

        // Add error styling to form field
        input.value = '';
        input.className = 'formError'
    }
    else{
        // Take input values and add as a list item to DOM
        let li = document.createElement('li');
        // add delete button for each li element
        // let deleteButton = document.createElement('button');
        //      deleteButton.className += 'deleteButton';
        //      deleteButton.textContent = 'x';

        li.textContent = input.value;
        ul.appendChild(li);
        //li.appendChild(deleteButton);

        // Append input value to empty array for random function
        randomList.push(input.value);

        // Check values are being added to the array
        console.log(randomList);

        // Empty the array after a value is entered
        input.value = '';
    }
})

submitRandom.addEventListener('click', () =>{
    let div = document.querySelector('div.answer');
    let p = document.createElement('p');
    let h4 = document.createElement('h4');

    // Check for values in list
    // If empty, throw error
    if(ul.textContent.length == 0){
        let emptyError = document.createElement('p');
            emptyError.textContent += "You need to add a name to the list";

        // Append error message to span area
        let errorArea = document.querySelector('span.errorArea');
            errorArea.appendChild(emptyError);

        input.value = '';
        input.className = 'formError'

        console.log('error, you need to write a name');
    }
    else{
        let randomAnswer = randomList[Math.floor(Math.random() * randomList.length)];
        console.log(randomAnswer);

        // Take input values and add as a list item to DOM
        h4.textContent = randomAnswer;
        p.textContent = 'Your Answer is: ';
        div.appendChild(p);
        div.appendChild(h4);

        // Disable button is the random function has already been fired
        if(h4.textContent == randomAnswer){
            submitRandom.disabled = true;
            addToList.disabled = true;
        }
    }
})