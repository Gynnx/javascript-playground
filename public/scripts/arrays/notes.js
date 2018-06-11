const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes);
console.log(notes.length);
//  console.log(notes[0]);
console.log(`pop: ${notes.pop()}`);
notes.push('Note 4');

console.log('Shift:', notes.shift());
notes.unshift('My First Note');
//splice
notes.splice(1, 1, 'This is the new item');

notes[0] = 'This is now the new note 1';
//foreach
notes.forEach((item,index)=>{
    console.log(`${item} is at index: ${index}`);
    
});
//for loop
for(let i = 0; i <= 10; i++){
    console.log(i);  
};


for(let count = 0; count <= notes.length; count++) {
    
    console.log(notes[count]);
    
};

// const numArray =  [2, 20, 24, 6, 8];
//8624220
// console.log(numArray[0].toString());

// const test = numArray[0].toString() + numArray[1].toString();
// console.log(test);

// console.log(numArray.sort());
// const numArray = [2, 20, 24, 6, 8];1

const numArray = [4,21,14, 66, 18,9];

numArray.sort(function(a,b){
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    // console.log(ab);
    
    return parseInt(ab) > parseInt(ba) ? parseInt(ab) : parseInt(ba);
});
console.log(numArray.join(''));

