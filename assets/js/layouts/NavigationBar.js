var NavBar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
					    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
					            data-target="#bs-example-navbar-collapse-1">
					        <span className="sr-only">Toggle Navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
					    <a className="navbar-brand" href="#">ReactJS Stuff</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					    <ul className="nav navbar-nav">
					        <li><a href="#">Home</a></li>
					    </ul>

					    <ul className="nav navbar-nav navbar-right">
					        <li className="dropdown">
					            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Travis
					                <span className="caret"></span></a>
					            <ul className="dropdown-menu" role="menu">
					                <li><a href="#">Logout</a></li>
					            </ul>
					        </li>
					    </ul>
					</div>
				</div>
			</nav>
		);
	}
});

export default NavBar;