import Nav from './components/Nav';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Photography from './components/Photography';

const App = () => {
	return (
		<div className='font-poppins max-w-2xl mx-auto px-4'>
			<span id='top'></span>
			<Nav />
			<About />
			<Experience />
			<Projects />
			<Photography />
			<GetInTouch />
		</div>
	);
};

export default App;
