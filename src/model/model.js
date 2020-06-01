import {action, thunk} from 'easy-peasy';

export default {
	fetchTodos: thunk(async actions => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
		const todos = await res.json();
		actions.setTodos(todos);
	}),
	setTodos: action((state, todos)=>{
		state.todos = todos;
	}),
	todos:[
		{id:1, title:"Bread", completed:true},
		{id:2, title:"milk", completed:false}
	],
	//Actions
	toggle: action((state, id)=>{
		state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed;

			}
			return todo;
		});
		
	}),
	remove: action((state, id)=>{
		state.todos = state.todos.filter(todo => todo.id !== id);


	}),
	add: action((state, todo) => {
		state.todos.push(todo);
	})

}