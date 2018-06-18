const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Maldives'
}, {
    title: 'Habbits to work on',
    body: 'Exercise every other day with wife'
}, {
    title: 'Improve progamming skills on React',
    body: 'Practice coding skills everyday'
},{
    title: 'What to do',
    body: 'What to say'
}];



//Sort | start
// console.log(notes);

const sortNotes = (notes) => {
    notes.sort(function (a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1;
        }else{
            return 0;
        }
    });
};

sortNotes(notes)
console.log(notes);
//Sort | end

const index = notes.findIndex(function(note, index) {
    console.log(note);
    return note.title === 'Habbits to work on';
    
});

// console.log(index);

// const findIndex = (notes, noteTitle) =>{
//     const index = notes.findIndex((note)=> note.title.toLocaleLowerCase() === noteTitle.toLocaleLowerCase());
//         return notes[index];
// };

const findIndex = (notes, noteTitle) =>{
    return notes.find((note,index)=> note.title.toLocaleLowerCase() === noteTitle.toLocaleLowerCase());     
};

//filter
const findNote = (notes, text) => {
   return notes.filter((notes,index)=>{
        const filteredTitle = notes.title.toLowerCase().includes(text.toLowerCase());
        const filteredBody = notes.body.toLowerCase().includes(text.toLowerCase());
        return filteredTitle || filteredBody;
    });

};


// console.log(findNote(notes,'ne'));


// console.log(findIndex(notes,'HabBits to work on'));



/*
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
*/

/*
const numArray = [4,21,14, 66, 18,9];

numArray.sort(function(a,b){
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    // console.log(ab);
    
    return parseInt(ab) > parseInt(ba) ? parseInt(ab) : parseInt(ba);
});
console.log(numArray.join(''));
*/

//Index of sample
// console.log(notes.indexOf('Note 4'));

// console.log(notes);
// console.log(notes.length);
// console.log(notes.indexOf({}));
