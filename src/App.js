import { useCallback, useState } from 'react';
import Child from './Child';

function App() {
	console.log('parent');
	const [Counter, setCounter] = useState(0);
	const [Input, setInput] = useState('');
	// const [colors] = useState(['red', 'green', 'blue']);
	const colors = ['red', 'green', 'blue'];

	const updateCounter = useCallback(() => setCounter(Counter + 1), [Counter]);

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => setCounter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<input type='text' value={Input} onChange={(e) => setInput(e.target.value)} />
			<Child Counter={Counter} color={colors} updateCounter={updateCounter} />
		</div>
	);
}

export default App;
