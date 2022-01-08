import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/index';

function App() {
	return (
		<Router>
			<Home />
		</Router>
	);
}

export default App;
