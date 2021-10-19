import './App.css';
import Range from './components/Range';
import Average from './components/Average';
import Sum from './components/Sum';
import Random from './components/Random';
import { useState } from 'react';

function App() {
	const [min, setMin] = useState(100);
	const [max, setMax] = useState(1000);

	return (
		<div className="App">
			<h1>React Redux Learning</h1>
			<div className="row">
				<Range
					min={min}
					max={max}
					onChangeMin={setMin}
					onChangeMax={setMax}
				></Range>
			</div>
			<div className="row">
				<Average min={min} max={max}></Average>
				<Sum min={min} max={max}></Sum>
				<Random min={min} max={max}></Random>
			</div>
		</div>
	);
}

export default App;
