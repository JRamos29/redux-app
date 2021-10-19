import './App.css';
import Range from './components/Range';
import Average from './components/Average';
import Sum from './components/Sum';
import Random from './components/Random';

function App() {
	return (
		<div className="App">
			<h1>React Redux Learning</h1>
			<div className="row">
				<Range></Range>
			</div>
			<div className="row">
				<Average></Average>
				<Sum></Sum>
				<Random></Random>
			</div>
		</div>
	);
}

export default App;
