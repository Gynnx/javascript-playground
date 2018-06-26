const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
};

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note)=>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#note').innerHTML = '';
    
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
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


document.querySelector('#name-form').addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
    
});