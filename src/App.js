import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList/taskList';
import AddTask  from './Components/AddTask/addtask';
import UpdateTask from './Components/updateTask/updateTask';
import CompletedTasks from './Components/completedTasks/completedTasks';
import { addTask } from './actions';







class App extends Component{
	constructor()
	{
		super();
		this.state = {
			route: 'home'
		}
	}

	onRouteChange = (route) =>{
		if(route == 'add')
			this.setState(Object.assign({},this.state,{route: 'add'}));
		else if(route === 'home')
			this.setState(Object.assign({},this.state,{route: 'home'}));
		else if(route === 'update')
			this.setState(Object.assign({},this.state,{route: 'update'}));
		else if(route === 'completed')
			this.setState({route: 'completed'})
	}


	render()
	{
		return (
			<div>
				{
					(this.state.route === 'home')
					?	<TaskList onRouteChange = {this.onRouteChange} onUpdatingTask={this.onUpdatingTask}/>
					: (
						this.state.route === 'add'
						?	<div><AddTask onRouteChange = {this.onRouteChange} onNameChange= {this.props.onNameChange}/></div>
						: (
							this.state.route === 'completed'
							?	<div><CompletedTasks onRouteChange={this.onRouteChange}/></div>
							: 	<div><UpdateTask onRouteChange= {this.onRouteChange} /></div>
						)  	
					)
				}

			</div>
		);
	}
}

export default App;




// (this.state.route === 'home')
// ?	<TaskList onRouteChange = {this.onRouteChange} onUpdatingTask={this.onUpdatingTask}/>
// : (
// 	this.state.route === 'add'
// 	?	<div><AddTask onRouteChange = {this.onRouteChange} onNameChange= {this.props.onNameChange}/></div>
// 	: 	<div><UpdateTask onRouteChange= {this.onRouteChange} /></div>  	
// )


















