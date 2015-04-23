import Post from './Post';
import PostForm from './PostForm';

var UserMessage = React.createClass({
	getInitialState: function() {
		return {
			statusPost: []
			//username='Travis', message= 'hello'
		};
	},
	addMessage: function(usernameIn, messageIn) {
		//alert(username + ' ' + message);
		var username = usernameIn;
		var message = messageIn;
		var statusPost = this.state.statusPost.concat({username, message});
		this.setState({statusPost});
		
	},
	render: function() {

		var displayPost = function (status){
			return <Post username={status.username} message={status.message} />
		};

		return (
			//alert(this.state.statusPost.length);
			<div>
				<h1>Hello guys</h1>
				<PostForm addMessage={this.addMessage} />

				{ this.state.statusPost.map(displayPost) }
			</div>
		);
	}
});

export default UserMessage;