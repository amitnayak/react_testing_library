import React from 'react';
import produce from 'immer';


const baseState = [
	{
		todo: "Learn Ts",
		done: true
	},
	{
		todo: "Learn immer",
		done: false
	}

]


const nextState = produce(baseState, draftState => {
	draftState.push({todo: "Learn Js"})
	draftState[1].done = true

})

function ImmerExample(){
	return(
		<div>
			{nextState[2].todo}
		</div>
	)

}
export default ImmerExample;