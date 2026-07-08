import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
	return (
		<div className='font-body max-w-2xl mx-auto px-4'>
			<span id='top'></span>
			<Nav />
			<main>
				<About />
				<Experience />
				<Projects />
			</main>
			<Analytics />
		</div>
	);
};

export default App;
