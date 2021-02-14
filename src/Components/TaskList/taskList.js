import React, { Component } from 'react';
import {connect} from "react-redux";
import 'tachyons';
import './taskList.css';
import {
	taskCompleted,
	fetchingTaskToBeUpdated, 
} from '../../actions.js';


class TaskList extends Component
{

	constructor(props)
	{
		super(props);
	}




	onCompleted = (id) =>{
		console.log(id);
		this.props.onTaskComplete(id);
	}


	onUpdateTask = (id,name) =>{
		// console.log(id,name);
		// this.props.onUpdatingTask(id,name);


		this.props.onEditTask(id);
		this.props.onRouteChange('update');
	}



	onAddTask = ()=>
	{
		// console.log('add');	
		this.props.onRouteChange('add');
	}


	completedTask = ()=>{
		this.props.onRouteChange('completed')
	}



	render()
	{
		const { allTasks,filteredTasks } = this.props;
		const completedTasks = allTasks.filter(task=>task.status === 'completed');
		const completedCount = completedTasks.length;
		// console.log(completedCount);
		const btnName = "Completed (" + completedCount + ")"; 

		return (
			<div>
				<h1 className="pa3 tableFlex">TASKS</h1>
					<br/>
				<div className="tableFlex f4">
					<input className="ma2"
						type="submit" 
						value="+ Add a Task"
						onClick={this.onAddTask} 
					/>
					<input className="ma2" 
						type="submit" 
						value={btnName}
						onClick={this.completedTask} 
					/>
					<br/>
				</div>
				<div className="tableFlex">
					<div className="pa4">
						<div className="overflow-auto">
						    <table className="f6 w-100 mw8 center" cellSpacing="0">
						      <thead>
						        <tr>
						          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
						          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
						          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
						        </tr>
						      </thead>
						      <tbody className="lh-copy">
						      	{
						      		filteredTasks.map((task, index) => {
						      			return (
						      				<tr key={index} className="f4">
									          <td className="pv3 pr3 bb b--black-20">
									          	{task.name}<br/>
									          	{task.description !== ''? <textarea className="textarea" type="text" value={task.description} readOnly/> : null}
									          </td>
									          <td className="pv3 pr3 bb pa5 b--black-20">
									          	<input 
									          		type="submit" 
									          		value="Edit"
									          		onClick={()=>this.onUpdateTask(task.id,task.name)}
									          	/>
									          </td>
									          <td className="pv3 pr3 bb pa5 b--black-20">
									          	<input 
									          		type="submit" 
									          		value="Completed"
									          		onClick={()=>this.onCompleted(task.id)}
									          	/>
									          </td>						          
									        </tr>
						      			)
						      		})
						      	} 
						      </tbody>
						    </table>
					  	</div>
					</div>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	// console.log(state);
	return {
		allTasks: state.tasks,
		filteredTasks: state.tasks.filter(task=>task.status==="incomplete")
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTaskComplete: (value)=> dispatch(taskCompleted(value)),
		onEditTask: (id) => dispatch(fetchingTaskToBeUpdated(id))
	}
}




export default connect(mapStateToProps,mapDispatchToProps)(TaskList);