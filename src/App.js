import { useState } from 'react';
import Child from './Child';

function App() {
	console.log('parent');
	const [Counter, setCounter] = useState(0);
	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => setCounter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<Child Counter={Counter} />
		</div>
	);
}

export default App;
