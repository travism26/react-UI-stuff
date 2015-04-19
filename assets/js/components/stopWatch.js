var StopWatch = React.createClass({
	getInitialState: function() {
		return {
			time: 0,
			until: 0,
			enabled: true
		};
	},

	type: function(e) {
		this.setState({ until: e.target.value })
	},

	start: function() {

		this.setState({ enabled: false });
		this.interval = setInterval( function() {
			if (this.isTimeUp()) {
				this.finish();
			} else {
				this.tick();
			};
		}.bind(this), 1000); 

	},

	finish: function() {
		// alert("WHAAAA");

		this.replaceState(this.getInitialState());
		console.log('Ding Ding Ding');
		React.findDOMNode(this.refs.input).focus();
		return clearInterval(this.interval);
	},

	tick: function() {
		this.setState({ time: this.state.time + 1 });
	},

	isTimeUp: function() {
		// var lim = parseInt(this.limit);
		return this.state.time >= this.state.until;
	},

	render: function() {
		return (
			<div className="StopWatch">
				<input ref="input" onChange={this.type} value={this.state.until} />
				<button disabled={ ! this.state.enabled } onClick={this.start}>Go</button>
				<h1>{ this.state.time }</h1>
			</div>
		);
	}
});

export default StopWatch;