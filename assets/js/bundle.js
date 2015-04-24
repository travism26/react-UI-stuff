(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _GistBox = require('./components/GistBox');

var _GistBox2 = _interopRequireWildcard(_GistBox);

var _StopWatch = require('./components/StopWatch');

var _StopWatch2 = _interopRequireWildcard(_StopWatch);

var _NavBar = require('./layouts/NavigationBar');

var _NavBar2 = _interopRequireWildcard(_NavBar);

var _UserMessage = require('./components/UserMessage');

var _UserMessage2 = _interopRequireWildcard(_UserMessage);

React.render(React.createElement(_GistBox2['default'], null), document.querySelector('#app'));

React.render(React.createElement(_StopWatch2['default'], null), document.querySelector('#stopWatch'));

React.render(React.createElement(_NavBar2['default'], null), document.querySelector('#Navigation'));

React.render(React.createElement(_UserMessage2['default'], null), document.querySelector('#userForm'));

},{"./components/GistBox":4,"./components/StopWatch":7,"./components/UserMessage":8,"./layouts/NavigationBar":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Gist = React.createClass({
	displayName: "Gist",

	render: function render() {
		return React.createElement(
			"div",
			null,
			this.props.username,
			"'s last Gist is ",
			React.createElement(
				"a",
				{ href: this.props.url },
				"here"
			)
		);
	}
});

exports["default"] = Gist;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var GistAddForm = React.createClass({
	displayName: 'GistAddForm',

	getInitialState: function getInitialState() {
		return {
			username: ''
		};
	},

	onChange: function onChange(e) {
		this.setState({ username: e.target.value });
	},

	addGist: function addGist(e) {
		e.preventDefault();

		this.props.onAdd(this.state.username);
		this.setState({ username: '' });
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'form',
				{ className: 'form-inline', onSubmit: this.addGist },
				React.createElement('input', { value: this.state.username, onChange: this.onChange, placeholder: 'type a github username' }),
				React.createElement(
					'button',
					null,
					'Fetch Latest Gist'
				)
			)
		);
	}
});

exports['default'] = GistAddForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Gist = require('./Gist');

var _Gist2 = _interopRequireWildcard(_Gist);

var _GistAddForm = require('./GistAddForm');

var _GistAddForm2 = _interopRequireWildcard(_GistAddForm);

var GistBox = React.createClass({
	displayName: 'GistBox',

	getInitialState: function getInitialState() {
		return {
			gists: []
		};
	},

	//this means our main object
	addGist: function addGist(username) {

		var url = 'https://api.github.com/users/' + username + '/gists';

		$.get(url, (function (result) {
			//this is in a call back function
			// console.log(this);

			var username = result[0].owner.login;

			var url = result[0].html_url;

			var gists = this.state.gists.concat({ username: username, url: url });

			this.setState({ gists: gists });
		}).bind(this));
	},

	render: function render() {

		var newGist = function newGist(gist) {

			return React.createElement(_Gist2['default'], { username: gist.username, url: gist.url });
		};

		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'GistBox'
			),
			React.createElement(_GistAddForm2['default'], { onAdd: this.addGist }),
			this.state.gists.map(newGist)
		);
	}
});

exports['default'] = GistBox;
module.exports = exports['default'];
//console.log(result);

},{"./Gist":2,"./GistAddForm":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Post = React.createClass({
	displayName: "Post",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "media _post-custom" },
			React.createElement(
				"div",
				{ className: "pull-left" },
				React.createElement("img", { src: "http://bit.ly/1NABbkf" })
			),
			React.createElement(
				"div",
				{ className: "media-body" },
				React.createElement(
					"h1",
					{ className: "media-heading" },
					this.props.username
				),
				React.createElement(
					"p",
					{ className: "text-muted" },
					this.props.message
				)
			)
		);
	}
});

exports["default"] = Post;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var PostForm = React.createClass({
	displayName: 'PostForm',

	getInitialState: function getInitialState() {
		return {
			username: '',
			message: ''
		};
	},
	onUsernameChange: function onUsernameChange(e) {
		this.setState({ username: e.target.value });
	},
	onMessageChange: function onMessageChange(e) {
		this.setState({ message: e.target.value });
	},
	addMessage: function addMessage(e) {
		e.preventDefault();

		this.props.addMessage(this.state.username, this.state.message);
		this.setState({ username: '' });
		this.setState({ message: '' });
	},
	render: function render() {
		return React.createElement(
			'form',
			{ onSubmit: this.addMessage },
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ htmlFor: 'username' },
					'Username: '
				),
				React.createElement('input', { value: this.state.username, onChange: this.onUsernameChange, className: 'form-control', type: 'text', name: 'username', placeholder: 'username' })
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ htmlFor: 'message' },
					'Message: '
				),
				React.createElement('input', { value: this.state.message, onChange: this.onMessageChange, className: 'form-control', type: 'text', name: 'message', placeholder: 'message' })
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement('input', { type: 'submit', value: 'Submit' })
			)
		);
	}
});

exports['default'] = PostForm;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var StopWatch = React.createClass({
	displayName: "StopWatch",

	getInitialState: function getInitialState() {
		return {
			time: 0,
			until: 0,
			enabled: true
		};
	},

	type: function type(e) {
		this.setState({ until: e.target.value });
	},

	start: function start() {

		this.setState({ enabled: false });
		this.interval = setInterval((function () {
			if (this.isTimeUp()) {
				this.finish();
			} else {
				this.tick();
			};
		}).bind(this), 1000);
	},

	finish: function finish() {
		// alert("WHAAAA");

		this.replaceState(this.getInitialState());
		console.log("Ding Ding Ding");
		React.findDOMNode(this.refs.input).focus();
		return clearInterval(this.interval);
	},

	tick: function tick() {
		this.setState({ time: this.state.time + 1 });
	},

	isTimeUp: function isTimeUp() {
		// var lim = parseInt(this.limit);
		return this.state.time >= this.state.until;
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "StopWatch" },
			React.createElement("input", { ref: "input", onChange: this.type, value: this.state.until }),
			React.createElement(
				"button",
				{ disabled: !this.state.enabled, onClick: this.start },
				"Go"
			),
			React.createElement(
				"h1",
				null,
				this.state.time
			)
		);
	}
});

exports["default"] = StopWatch;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Post = require('./Post');

var _Post2 = _interopRequireWildcard(_Post);

var _PostForm = require('./PostForm');

var _PostForm2 = _interopRequireWildcard(_PostForm);

var UserMessage = React.createClass({
	displayName: 'UserMessage',

	getInitialState: function getInitialState() {
		return {
			statusPost: []
			//username='Travis', message= 'hello'
		};
	},
	addMessage: function addMessage(usernameIn, messageIn) {
		//alert(username + ' ' + message);
		var username = usernameIn;
		var message = messageIn;
		var statusPost = this.state.statusPost.concat({ username: username, message: message });
		this.setState({ statusPost: statusPost });
	},
	render: function render() {
		var displayPost = function displayPost(status) {
			return React.createElement(_Post2['default'], { username: status.username, message: status.message });
		};
		return (
			//alert(this.state.statusPost.length);
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-md-6' },
					React.createElement(_PostForm2['default'], { addMessage: this.addMessage }),
					this.state.statusPost.map(displayPost)
				)
			)
		);
	}
});

exports['default'] = UserMessage;
module.exports = exports['default'];

},{"./Post":5,"./PostForm":6}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var NavBar = React.createClass({
	displayName: "NavBar",

	render: function render() {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default navbar-fixed-top" },
			React.createElement(
				"div",
				{ className: "container-fluid" },
				React.createElement(
					"div",
					{ className: "navbar-header" },
					React.createElement(
						"button",
						{ type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse",
							"data-target": "#bs-example-navbar-collapse-1" },
						React.createElement(
							"span",
							{ className: "sr-only" },
							"Toggle Navigation"
						),
						React.createElement("span", { className: "icon-bar" }),
						React.createElement("span", { className: "icon-bar" }),
						React.createElement("span", { className: "icon-bar" })
					),
					React.createElement(
						"a",
						{ className: "navbar-brand", href: "#" },
						"ReactJS Stuff"
					)
				),
				React.createElement(
					"div",
					{ className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
					React.createElement(
						"ul",
						{ className: "nav navbar-nav" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Home"
							)
						)
					),
					React.createElement(
						"ul",
						{ className: "nav navbar-nav navbar-right" },
						React.createElement(
							"li",
							{ className: "dropdown" },
							React.createElement(
								"a",
								{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
								"Travis",
								React.createElement("span", { className: "caret" })
							),
							React.createElement(
								"ul",
								{ className: "dropdown-menu", role: "menu" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Logout"
									)
								)
							)
						)
					)
				)
			)
		);
	}
});

exports["default"] = NavBar;
module.exports = exports["default"];

},{}]},{},[1]);
