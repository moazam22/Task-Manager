import React, { Component } from 'react';
import './addtask.css';
import 'tachyons';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
 


const mapDispatchToProps = (dispatch) =>{
	return {
		onAddName: (name)=>dispatch(addTask(name)),
	}
}



class AddTask extends Component
{
	constructor()
	{
		super();
		this.state = {
			tName: ''
		}
	}


	nameChange = (event) =>{
		this.setState({tName: event.target.value});
	}


	onAdd = () => {
		// console.log("on Add");
		if(this.state.tName)
		{
			this.props.onAddName(this.state.tName);
			this.props.onRouteChange('home');
		}
		else
		{
			alert("Please enter Task Name.");
		}	
	}

	onBack = () => {
		this.props.onRouteChange('home');
	}



	render()
	{
		return(
			<div>
				<div className="">
				    <input 
				        onClick={this.onSubmit}
				        className="ma2"
				        type="submit"
				        value="Back"
				        onClick={this.onBack}
				    />
			    </div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
					<main className="pa4 black-80">
					  <div className="measure ">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">New Task</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f3" htmlFor="email-address">Task Name</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="text" 
					        	name="task-name"  
					        	id="task-name"
					        	onChange = {this.nameChange}
					        />
					      </div>
					    </fieldset>
					    <div className="">
						    <input 
						        onClick={this.onSubmit}
						        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
						        type="submit"
						        value="Add"
						        onClick={this.onAdd}
						    />
						</div>
					  </div>
					</main>
				</article>
			</div>
		);
	}
}


export default connect(null,mapDispatchToProps)(AddTask);