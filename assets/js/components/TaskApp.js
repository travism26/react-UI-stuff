var TaskApp = React.createClass({

	getInitialState: function() {
		return {
			items: [],
			task: ''
		};
	},

	addTask: function(e) {
		this.setState({
			items: this.state.items.concat([this.state.task]),
			task: ''
		});
		e.preventDefault();
	},

	onChange: function(e){
		this.setState({ task: e.target.value });
	},


	render: function() {
		return (
			<div className="TaskApp">
				<h1>My Tasks</h1>
				<TaskList items={this.state.items} />
				<form onSubmit={this.addTask}>
					<input placeholder="What to do" onChange={this.onChange} value={this.state.task}/>
					<button>Add</button>
				</form>
			</div>
		);
	}
});

React.render(<TaskApp />, document.body);