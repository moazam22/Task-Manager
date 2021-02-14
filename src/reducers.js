import {
	ADD_NEW_TASK,
	TASK_COMPLETED,
	UPDATE_TASK,
	FETCH_TASK,
	DELETE_TASK,
} from './constants.js';


const initialState={
	tasks:[],
	toUpdate: []
}

export const taskManagement = (state=initialState, action={})=>{
	switch(action.type)
	{
		case ADD_NEW_TASK:
			return {...state,tasks:[...state.tasks,action.payload]}
		case TASK_COMPLETED:
			console.log("action payload = ",action.payload);
			let task = state.tasks.filter(task=>task.id===action.payload.id)
			// console.log("1",task);
			task[0].status = "completed";
			// console.log("Task Completed", task);
			const otherTasks = state.tasks.filter(task=>task.id!==action.payload.id)
			// console.log("Other Tasks = ",otherTasks);
			return {...state,tasks:[...otherTasks,task[0]]}
			// console.log("After Completed!",news);
		case UPDATE_TASK:
			// console.log("inReducer",action.payload);
			let allTasks = state.tasks.filter(task=> task.id !== action.payload.id)
			allTasks = [...allTasks,action.payload];
			// console.log("Tasks",allTasks);
			// console.log("Before", state);
			state.toUpdate.pop();
			// console.log("After", state);
			let newState1 = {...state,tasks:allTasks};
			// console.log("After Update",newState1);
			return newState1;
		case FETCH_TASK:
			// console.log("In Reducer",action.payload.id);
			let taskToUpdate = state.tasks.filter(task=>task.id===action.payload.id)
			// console.log("Fetched Task =",taskToUpdate[0]);
			return {...state, toUpdate:taskToUpdate}
			// console.log("Before",newState);
			
		case DELETE_TASK:
			const requiredTasks = state.tasks.filter(task=>task.id !== action.payload.id)
			console.log("Deleting task", requiredTasks);
			return {...state, tasks:requiredTasks};
		default:
			return state;
	}
}

 
