let guessingGame = (number) => {
    let min = 1;
    let max = 5    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return number === randomNum;

};

console.log(guessingGame(1));
