let notes = [];

const notesJSON = localStorage.getItem('notes');
if(notesJSON){
    notes = JSON.parse(notesJSON);
}


const filters = {
    searchText: ''
};

//CRUD - Create, Read, Update and Delete ( Data Storage Mechanism)
// localStorage.setItem('location','Philippines');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');

// const user = {
//     name: 'Cyngynn',
//     age: 33
// };

// const userJson = JSON.stringify(user);

// console.log(userJson);
// localStorage.setItem('user', userJson);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);

// console.log(`${user.name} is ${user.age} years old`);



const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note)=>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#note').innerHTML = '';
    
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p');

        if(note.title.length > 0){
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unknown title'
        };
        
        document.querySelector('#note').appendChild(noteEl);
        
    });
    
};

renderNotes(notes,filters);

// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '******'
//     // console.log(p.textContent)
//     // p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)
    
// document.querySelector('#remove-note').addEventListener('click', (e) => {
//         console.log('Remove note');
//         document.querySelectorAll('.note').forEach((note)=>note.remove());
//     });

document.querySelector('#note-input').addEventListener('input',(e)=>{
    // console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
    
});

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        completed: ''
    });
    localStorage.setItem('notes',JSON.stringify(notes));
    renderNotes(notes,filters);    
});


document.querySelector('#name-form').addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
    
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
    });

