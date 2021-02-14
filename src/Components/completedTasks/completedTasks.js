import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions';
import 'tachyons';
import './completedTasks.css';




class CompletedTasks extends Component
{



	onDeleteTask = (id)=>{	
		// console.log(id);
		this.props.taskToDelete(id);

	}


	onBack = ()=>{
		this.props.onRouteChange('home');
	}


	render()
	{
		const tasks = this.props.tasks;
		return(
			<div>
				<div className="main">
					<h1 className="pa3">Completed TASKS</h1>
				</div>
				<br/>
				<div className="main f4">
					<input 
						className="ma2" 
						type="submit" 
						value="Back"
						onClick={this.onBack} 
					/>
				</div>
				<div className="tableFlex">
					<div className="pa4">
						<div className="overflow-auto">
						    <table className="f6 w-100 mw8 center" cellSpacing="0">
						      <thead>
						        <tr>
						          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
						          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
						        </tr>
						      </thead>
						      <tbody className="lh-copy">
						      	{
						      		tasks.map((task, index) => {
						      			return (
							      				<tr key={index} className="f4">
										          <td className="pv3 pr3 bb b--black-20">
										          	{task.name}<br/>
										          	{task.description !== ''? <textarea className="textarea" type="text" value={task.description} readOnly/> : null}
										          </td>
										          <td className="pv3 pr3 bb pa5 b--black-20">
										          	<input 
										          		type="submit" 
										          		value="Delete"
										          		onClick={()=>this.onDeleteTask(task.id)}
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


const mapStateToProps = (state) => {
	console.log(state);
	return{
		tasks: state.tasks.filter(task => task.status === 'completed')
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		taskToDelete: (id)=>dispatch(deleteTask(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);