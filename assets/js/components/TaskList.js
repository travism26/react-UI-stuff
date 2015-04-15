var TaskList = React.createClass({
	
	
	render: function() 
	{
		var displayTask = function(task){
			return <li>{task}</li>
		};
		//harmony support
		//var displayTask = (task) => <li>{task}</li>

		return (
			<ul>
				{ this.props.items.map(displayTask) }
			</ul>
		);
	}
});