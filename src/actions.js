import { 
	ADD_NEW_TASK,
	TASK_COMPLETED,
	UPDATE_TASK,
	FETCH_TASK,
	DELETE_TASK,
} from './constants';
let taskid=0;

export const addTask = (name,description="") => {
	return (
		{
			type: ADD_NEW_TASK,
			payload: {
				id:++taskid,
				name,
				description,
				status:"incomplete"
			}
		}
	)
}

export const taskCompleted = (id) => {
	console.log("In action id =",id);
	return (
		{
			type: TASK_COMPLETED,
			payload: {
				id:id
			}
		}
	);
}


export const deleteTask = (id) => {
	// console.log("In action delete id = ", id);
	return{
		type: DELETE_TASK,
		payload: {
			id
		}
	}	
}

export const updateTask = (id,name,description,status) => {
	// console.log("Action",id,name,description);
	return({
		type:UPDATE_TASK,
		payload:{
			id,
			name,
			description,
			status
		}
	})
}


export const fetchingTaskToBeUpdated = (id) => {
	return({
		type: FETCH_TASK,
		payload: {
			id
		}
	})
}