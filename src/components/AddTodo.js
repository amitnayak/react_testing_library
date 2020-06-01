import React, {useState} from  'react';
import { useStoreActions } from 'easy-peasy';

const AddTodo = () => {
	const [title,setTitle]= useState('');
	const add = useStoreActions(actions => actions.add);
	var counter =20; 

	return(
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();
				counter++;
				add({title, completed: false, id:counter })
			}} >
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="add title" />
				<input type="submit" value="Add Todo" />
			</form>
		</div>
	)

}

export default AddTodo;