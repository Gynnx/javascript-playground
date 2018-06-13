const todoList = [{
    task: 'Walk Natalya',
    completed: false
},{
    task: 'feed Natalya',
    completed: true
},{
    task: 'Laundry clothes',
    completed: false
},{
    task: 'Look for a new job',
    completed: false
}];

const deleteTodo = (todos, findToDo)=>{
    const index = todos.findIndex((todo)=>todo.task.toLowerCase() === findToDo.toLowerCase());
    return index > -1 ? todos.splice(index,1): 'task not found in todo list';
};
console.log(`Original todo list:`);
console.log(todoList);

console.log('Deleted:', deleteTodo(todoList,'feed Natalya'));
console.log(`Updated to do list:`);
console.log(todoList);


const filterToDo = (todos) => todos.filter((todos, index) => !todos.completed);
console.log(`What to do:`);
console.log(filterToDo(todoList));

/*
// const todoList = ['walk Natalya', 'feed Natalya', 'laundry clothes', 'look for a Front-end job'];
//remove third item from the list
console.log(todoList.splice(2, 1));
//remove first item from the list
console.log(todoList.shift());
//add a new item at the end of the list
todoList.push('give Natalya a bath');


console.log(`You have to ${todoList[0]} and ${todoList[todoList.length-1]} on your list!`);
console.log('Todos:');

todoList.forEach((item, index)=>{
    
    console.log(`${index+1}. ${item}`);
    
});
console.log(`Total todos: ${todoList.length}`);


for(let count = todoList.length-1;count >= 0;count--){
    console.log(todoList[count]);
    
};

const num = [5,6,1,33,99,12,15,18];

// console.log(num.sort());

const largestNum = (array, number) => {
    if(number <= array.length){
    
      let arrayConatiner = array.sort().reverse();       
        for(let count = 0; count <= number-1; count++){        
        console.log(arrayConatiner[count]);
    }
  }else {
        console.log (`Number input is greater than the length of the array given.
                Please enter number between ${array.length}`);
    };
   
};
// largestNum([3,2,1,5,6,4], 2);

// largestNum([5,6,1,33,99,12,15,18],3);
// [98,75,19,18,37,19,28]
largestNum(num,3);
*/

