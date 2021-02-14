import React, { Component } from 'react';
import 'tachyons';
import './updateTask.css';
import { connect } from 'react-redux';
import { updateTask } from '../../actions';



class UpdateTask extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			tName: this.props.taskToUpdate[0].name,
			tDesc: this.props.taskToUpdate[0].description
		}
	}

	onNameChange = (event)=> {
		// console.log(event.target.value);
		this.setState({tName: event.target.value});
	}

	onDescChange = (event)=> {
		// console.log(event.target.value);
		this.setState({tDesc: event.target.value});
	}	

	onUpdate = (id,status)=>{
		// console.log(this.state.tName,this.state.tDesc);
		this.props.onUpdatingTask(id,this.state.tName,this.state.tDesc,status);
		// console.log("Update");
		this.props.onRouteChange('home');
	}

	render(){
		// console.log(this.props);
		let task = this.props.taskToUpdate[0];
		// console.log("Fetched Task = ",task);
		return(
			<div>
				<div className='main pa3'>
					<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
						<main className="pa4 black-80">
						  <div className="measure ">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f2 fw6 ph0 mh0">Edit Details</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f3" htmlFor="email-address">Task Name</label>
						        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        	type="text" 
						        	name="task-name"  
						        	id="task-name"
						        	defaultValue={task.name}
						        	onChange={this.onNameChange}
						        />
						      </div>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f3" htmlFor="email-address">Description</label>
						        <textarea className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        	type="text" 
						        	name="task-name"  
						        	id="task-name"
						        	defaultValue={task.description}
						        	onChange = {this.onDescChange}
						        />
						      </div>
						    </fieldset>
						    <div className="">
							    <input 
							        onClick={this.onSubmit}
							        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
							        type="submit"
							        value="Update"
							        onClick={()=>this.onUpdate(task.id,task.status)}
							    />
						    </div>
						  </div>
						</main>
					</article>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		taskToUpdate: state.toUpdate
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdatingTask: (id,name,description,status) => dispatch(updateTask(id,name,description,status))
	}
}




export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);