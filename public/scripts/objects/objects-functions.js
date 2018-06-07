let myBook = {
    title: '1984',
    author: 'Cyngynn',
    comment: 2,
    rating: 7

};

let myBook2 = {
    title: 'Doomsday',
    author: 'Natalya',
    comment: 2,
    rating: 9000

};

let getBook = function(book){
    console.log(`${book.title} ${book.author}`);
    
};

console.log(getBook);
getBook(myBook);


//objects as function returns values

let converTemp = function(temp){
    return{
        fahrenheit: temp,
        kelvin: (temp + 459.67) * (5/9),
        celcius: (temp -32) * (5/9)
    };
};

let temp = converTemp(32);
console.log(temp);
