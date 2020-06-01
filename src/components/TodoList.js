import React, {useEffect} from 'react';
import { useStoreState, useStoreActions, useActions } from 'easy-peasy';

function TodoList() {
   //const toggle = useStoreActions(actions => actions.toggle);
  // const remove = useStoreActions(actions => actions.remove);
  const fetchTodos= useStoreActions(actions => actions.fetchTodos);

  const {toggle, remove} = useStoreActions(actions => ({
  	toggle: actions.toggle,
  	remove: actions.remove

  }));

  const todos = useStoreState(state => state.todos)
 // const add = useStoreActions(actions => actions.todos.add)
 //{todos.map((todo, idx) => <div key={idx}>{todo}</div>)}

  useEffect(()=>{
  	fetchTodos();
  },[fetchTodos]);

  return (
    <div>
      
     	{todos.map(todo => (
     		<div key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}} >
     			<span onClick={()=>toggle(todo.id) } style={{cursor:'pointer'}} >{todo.title}</span>
     			<button onClick={()=>remove(todo.id) } >X</button>
     		</div>
     	))}
    </div>
  )
}
export default TodoList;