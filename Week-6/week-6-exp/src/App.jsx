import React ,{useState} from 'react'

let counter =4;

function App() {
  const [todos, settodos] = useState([{
    id:1,
    title: "Learn React",
    description: "Learn React from scratch"
},
  {
    id:2,
    title: "Learn Node",
    description: "Learn Node from scratch"
},
  {
    id:3,
    title: "Learn Express",
    description: "Learn Express from scratch"
}]);

function addTodo(){
  settodos([...todos,{
    id:counter++,
    title: "Learn MongoDB",
    description: "Learn MongoDB from scratch"
  }])
}
  return (
  <div>
    <button onClick={addTodo}>Add a Todo</button>
    {todos.map(function(todo){
      return <Todo key={todo.id} title={todo.title} description={todo.description}/>
    })}

  </div>
  )

}

function Todo ({title,description}){
  return <div>
    <h1>
      {title}
    </h1>

    <h5>
      {description}
    </h5>
  </div>
}


export default App
