//create a game where youo start with any random game number.ask user to keep guessing
//    the game number until the user enters correct value.
let gameNum=25;
let userNum=prompt("Guess the game number!");
while(gameNum != userNum){
    userNum=prompt("you guess wrong game number,try again!");
}
console.log("Congratulations you entered the right game number.");