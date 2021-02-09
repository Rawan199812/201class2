'use strict';
let score = 0;
let mony = prompt('Do I have 3 million dollars').toLowerCase();

switch (mony) {
  case 'YES':
    alert('of course not,I am broke');
    break;
  case 'No':
    console.log('correct answer');
    score++;

    alert('You are smart');
    break;
}
let place = prompt('Am I live in the space?').toLowerCase();

switch (place) {
  case 'YES':
    alert('no way');
    break;
  case 'No':
    alert("that's correct");
    score++;

    console.log('correct answer');

    break;
}
let sponge = prompt('Am I a yellow sponge and live in the sea?').toLowerCase();

switch (sponge) {
  case 'YES':
    alert("no that's SpongeBob ");
    break;
  case 'No':
    alert('You are genius');
    score++;

    console.log('correct answer');

    break;
}
let gender = prompt('Am I a boy?').toLowerCase();

switch (gender) {
  case 'YES':
    alert('You are crazy ');
    break;
  case 'No':
    alert('of course');
    score++;

    console.log('correct answer');

    break;
}
let points = prompt('Do I deserve 10 points?').toLowerCase();

switch (points) {
  case 'YES':
    alert('Thank you  ');
    score++;

    console.log('correct answer');

    break;
  case 'No':
    alert('You are kidding with me!!!');
    break;
}

let attempts = 4;
let brothers = prompt('How many brothers do i have?');
while (attempts){
    if (brothers === '3') {
      alert('that\'s correct');
      score++;
      break;
    } else if (brothers < 3) {
      alert('Too Low');
    }else {
        alert(' Too high');
    }
    if(attempts===1){
      alert('I have 3 brothers');
      break;
    }
    attempts--;
    brothers = prompt('Please try again you have'+attempts+'remaining');
}


   

const color = ['red', 'blue', 'black', 'green'];
let chancess = 6;
let userGuess = prompt('What\'s my favourit color?').toLowerCase()

while (chancess) {
    let correct=false;
  for (let i = 0; i < color.length; i++) {
    if (userGuess === color[i]) {
        correct=true
        score++;
      alert('correct answer');
      break;
    }
   }
  
    if(chancess===1||correct===true){
        alert('My favourits colors are ' + color);
        break;
        
    }
    chancess--
    userGuess=prompt('Try again you have:'+ chancess+ 'remaining');
    
    
}
console.log(score);
confirm(' Thanks for playing . Your score is ' + score +'/7');


