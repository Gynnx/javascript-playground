let myBook = {
    title: '1984',
    author: 'Cyngynn',
    comment: 2,
    rating: 7

};

let person = {
    name: 'Cyngynn',
    age: '32',
    location: 'Dubai'
};


console.log(`Title:  ${myBook.title} \nAuthor: ${myBook.author}`);

myBook.title = 'Doomsday!';

console.log(`Title:  ${myBook.title} \nAuthor: ${myBook.author}`);

console.log(`${person.name} is ${person.age} lives in ${person.location}`);

person.age = parseInt(person.age) + 1;


console.log(`${person.name} is ${person.age} lives in ${person.location}`);
