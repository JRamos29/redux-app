import './App.css';
import Card from './components/Card';
import Range from './components/Range';

function App() {
	return (
		<div className="App">
			<h1>React Redux Learning</h1>
			<div className="row">
				<Range></Range>
			</div>
			<div className="row">
				<Card title="Card 2" green>
					X
				</Card>
				<Card title="Card 3" blue>
					Y
				</Card>
				<Card title="Card 4" purple>
					Y
				</Card>
			</div>
		</div>
	);
}

export default App;
