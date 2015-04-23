var PostForm = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			message: ''
		};
	},
	onUsernameChange: function(e) {
		this.setState({ username: e.target.value});
	},
	onMessageChange: function(e) {
		this.setState({ message: e.target.value });
	},
	addMessage: function(e){
		e.preventDefault();

		this.props.addMessage(this.state.username, this.state.message);
		this.setState({ username: '' });
		this.setState({ message: '' });
	},
	render: function() {
		return (
			<div className="col-md-6">
				<form onSubmit={this.addMessage}>
					<div className="form-group">
						<label htmlFor="username">Username: </label>
						<input value={this.state.username} onChange={this.onUsernameChange} className="form-control" type="text" name="username" placeholder="username" />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message: </label>
						<input value={this.state.message} onChange={this.onMessageChange} className="form-control" type="text" name="message" placeholder="message" />
					</div>
					<div className="form-group">
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}
});

export default PostForm;