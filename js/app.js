'use strict';
let mony=prompt('Do I have 3 million dollars');

switch(mony.toUpperCase()){
    case 'YES':
        alert('of course not,I am broke');
        break;
    case 'No':
        console.log('correct answer');
    
        alert('You are smart');
        break;
}
let place=prompt('Am I live in the space?');

switch(place.toUpperCase()){
    case 'YES':
        alert('no way');
        break;
    case 'No':
    
        alert('that\'s correct');
        console.log('correct answer');

        break;
}
let sponge=prompt('Am I a yellow sponge and live in the sea?');

switch(sponge.toUpperCase()){
    case 'YES':
        alert('no that\'s SpongeBob ');
        break;
    case 'No':
        alert('You are genius');
        console.log('correct answer');

        break;
}
let gender=prompt('Am I a boy?');

switch(gender.toUpperCase()){
    case 'YES':
        alert('You are crazy ');
        break;
    case 'No':
        alert('of course');
        console.log('correct answer');

        break;

}
let points=prompt('Do I deserve 10 points?');

switch(points.toUpperCase()){
    case 'YES':
        alert('Thank you  ');
        console.log('correct answer');

        break;
    case 'No':
        alert('You are kidding with me!!!');
        break;

}
confirm('Thanks for playing');




