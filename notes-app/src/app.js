console.log('App component!');
const p = document.querySelectorAll('p');
p.forEach( p => {
    // console.log(p.textContent);
    // p.remove();
    if (p.textContent.toLowerCase().includes('the')){
         p.remove();
    };
    // p.textContent = '***'
  });  

  const newParagraph = document.createElement('p');
       newParagraph.textContent = 'New element from javascript';
       const appendChild = [];
       appendChild.push(document.querySelector('body').appendChild(newParagraph))

class App extends React.Component {
   render(){
       
       const name = 'Jan Cyngynn';
       const person = [
           {
               name: 'Anne Charmaine',
               location: 'UAE',
               expenses: [],
               income: [],
               id: 1
           }
                    ];
        const todoList = [
                {
                    task: 'Feed Natalya',
                    status: true
                    
                }, {
                   task: 'Walk Natalya',
                   status: true 
                }, {
                    task: 'Buy dog food',
                    status: false
                }, {
                    task: 'Get a frontend job',
                    status: false
                }, {
                    task: 'Play the games',
                    status: false
                }
            ];        
        return(
            <div>
              <h1>Hello, {name}</h1>
              {person.map(person =>{
                     return(
                         <div key={person.id}>
                            <p>{person.name}</p>
                            <p>{person.location}</p>
                        </div>
                     );
                })}
                {todoList.map( (todo,index) => {
                    return (
                        <div key = {index}>
                            <p>{todo.task}</p>
                        </div>
                    )
                })}
                {appendChild[0]}  
            </div>
            );
    };
};//App end

const appRoot = document.getElementById('app');



ReactDOM.render(<App/>,appRoot);

