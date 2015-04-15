
var AvatarTest = React.createClass({
	getDefaultProps: function() {
		return {
			path: 'http://bit.ly/1NABbkf'
		};
	},
	render: function() {
		return (
			<div className="AvatarTest">
				<a href={this.props.path}>
					<img src={this.props.path}/>
					<h1>WTF</h1>
				</a>
			</div>
		);
	}
});

React.render(<AvatarTest />, document.body);