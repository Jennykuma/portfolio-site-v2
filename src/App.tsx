import About from './components/About';
import GetInTouch from './components/GetInTouch';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Photos from './components/Photos';
import './styles/tailwind.css';
import './styles/main.scss';

const App = () => {
	return (
		<div className='font-poppins max-w-2xl mx-auto px-4'>
			<Nav />
			<About />
			<Experience />
			<Photos />
			<GetInTouch />
		</div>
	);
};

export default App;
