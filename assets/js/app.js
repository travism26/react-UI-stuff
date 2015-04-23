import GistBox from './components/GistBox';
import StopWatch from './components/StopWatch';
import NavBar from './layouts/NavigationBar';
import UserMessage from './components/UserMessage';

React.render(<GistBox />, document.querySelector('#app'));

React.render(<StopWatch />, document.querySelector('#stopWatch'));

React.render(<NavBar />, document.querySelector('#Navigation'));

React.render(<UserMessage />, document.querySelector('#userForm'));