var Post = React.createClass({
	render: function() {
		return (
			<div className="media _post-custom">
				<div className="pull-left"><img src={'http://bit.ly/1NABbkf'} /></div>
				<div className="media-body">
					<h1 className="media-heading">{this.props.username}</h1>
					<p className="text-muted">{this.props.message}</p>
				</div>
			</div>
		);
	}
});

export default Post;