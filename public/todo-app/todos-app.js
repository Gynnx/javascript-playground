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

const filters = {searchFilter: ''};

const renderTodos = (todos, filterText) => {
    const filteredTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filterText.searchFilter.toLowerCase());
    });
    // console.log(filteredTodo);

    document.querySelector('#todo').innerHTML = '';

    filteredTodo.forEach((todo) => {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todo').appendChild(todoEl);
    });
    
};

renderTodos(todos,filters);

document.querySelector('#new-todo').addEventListener('input',(e)=>{
    // console.log(e.target.value);
    filters.searchFilter = e.target.value;
    renderTodos(todos,filters);
    
});

document.querySelector('#add-todo').addEventListener('click',(e) => {
    console.log('add things to do');
    
});

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('#header').appendChild(summary);

// todos.forEach(function (todo) {
//     const p = document.createElement('p')
//     p.textContent = todo.text
//     document.querySelector('body').appendChild(p)
// });

