'use strict';
let score = 0;
let mony = prompt('Do I have 3 million dollars'.toLowerCase());
function dollars (){
if (mony='Y'||'YES'){
    alert('of course not,I am broke');
    console.log('YES');
   
  }else if (mony='NO'||'N'){
    console.log('correct answer');
    score++;
    alert('You are smart');
    
  }
}

dollars( );
let place = prompt('Am I live in the space?'.toLowerCase());
function living(){
if (place= 'YES'||'Y'){

    alert('no way');
    
  }else if (place='No'||'N'){
    alert("that's correct");
    score++;

    console.log('correct answer');

    
}
}
living ();
let sponge = prompt('Am I a yellow sponge and live in the sea?'.toLowerCase());
function yellowspong(){

if (sponge='YES'||'Y'){
    alert("no that's SpongeBob ");
    
  }else if(sponge='No'||'N'){
    alert('You are genius');
    score++;

    console.log('correct answer');

   
}
}
yellowspong();

let gender = prompt('Am I a boy?'.toLowerCase());
function boygirl(){
if (gender='YES'||'Y') {
  
    alert('You are crazy ');
    
}else if(gender='NO'||'N') {
    alert('of course');
    score++;

    console.log('correct answer');

   
}
}
boygirl();
let points = prompt('Do I deserve 10 points?'.toLowerCase());
function winner(){
if (points='YES'||'Y') {
  
    alert('Thank you  ');
    score++;

    console.log('correct answer');

    
}else if ('NO'||'n'){
    alert('You are kidding with me!!!');
    
}
}
winner();

let attempts = 4;
let brothers = prompt('How many brothers do i have?');
function family(){
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
}
family();

   

const color = ['red', 'blue', 'black', 'green'];
let chancess = 6;
let userGuess = prompt('What\'s my favourite color?').toLowerCase()
function favcolor(){
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
}
favcolor();
console.log(score);
confirm(' Thanks for playing . Your score is ' + score +'/7');