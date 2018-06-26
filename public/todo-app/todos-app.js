const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

const filters = {
    searchText: ''
};

const renderTodos = (todos, filters) => {
    const filteredText = todos.filter((todo)=>{
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    const incompleteTask = filteredText.filter(todo => !todo.completed);

    document.querySelector('#todo').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTask.length} tasks left`;
    document.querySelector('#todo').appendChild(summary);
    
    
    // console.log(filteredText);

    filteredText.forEach((todo)=>{
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todo').appendChild(todoEl);
    });
    
};


renderTodos(todos,filters);
// document.querySelector('#new-todo').addEventListener('input',(e)=>{
//     // console.log(e.target.value);
//     filters.searchFilter = e.target.value;
    
// });

document.querySelector('#search-text').addEventListener('input',(e)=>{
    // console.log(e.target.value);
    filters.searchText = e.target.value
    renderTodos(todos,filters);

    
});

document.querySelector('#add-task').addEventListener('submit', (e) => {
    console.log(e.target.elements.addTask.value);
    e.preventDefault();
   
    todos.push({
        text: e.target.elements.addTask.value,
        completed: false
    });
    e.target.elements.addTask.value = ''
    // console.log(additonalTask);
    // console.log(todos);
    renderTodos(todos,filters);
    
});


// document.querySelector('#add-todo').addEventListener('click',(e) => {
//     console.log('add things to do');
    
// });

// todos.forEach(function (todo) {
//     const p = document.createElement('p')
//     p.textContent = todo.text
//     document.querySelector('body').appendChild(p)
// });

