import GistBox from './components/GistBox';
import StopWatch from './components/StopWatch';
import NavBar from './layouts/NavigationBar';

React.render(<GistBox />, document.querySelector('#app'));

React.render(<StopWatch />, document.querySelector('#stopWatch'));

React.render(<NavBar />, document.querySelector('#Navigation'));
