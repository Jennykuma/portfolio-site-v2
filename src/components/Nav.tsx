import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Nav = () => {
	const html = document.documentElement;
	const [theme, setTheme] = useState(html.classList.contains('dark') ? 'dark' : 'light');

	const changeTheme = () => {
		const newTheme = html.classList.contains('dark') ? 'light' : 'dark';

		html.classList.toggle('dark');
		setTheme(newTheme);
		localStorage.theme = newTheme;
	};

	const scrollToTop = (e: React.MouseEvent) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		history.replaceState(null, '', window.location.pathname);
	};

	return (
		<nav
			className='
				sticky top-0 z-10 bg-white dark:bg-zinc-800
				py-4 flex flex-col items-start gap-2 text-zinc-700 dark:text-gray-200 sm:flex-row sm:items-center sm:justify-between'
		>
			<h1 className='text-lg md:text-xl font-semibold'>
				<a
					href='#top'
					className='hover:text-sage hover:underline underline-offset-4'
					onClick={scrollToTop}
				>
					jenny le / ui developer
				</a>
			</h1>
			<div className='flex w-full flex-wrap items-center justify-start gap-x-4 gap-y-2 text-sm font-medium sm:w-auto sm:flex-nowrap sm:justify-start sm:gap-5'>
				<a className='hover:text-sage hover:underline underline-offset-4' href='#about'>
					about
				</a>
				<a className='hover:text-sage hover:underline underline-offset-4' href='#experience'>
					experience
				</a>
				<a className='hover:text-sage hover:underline underline-offset-4' href='#projects'>
					projects
				</a>
				<a className='hover:text-sage hover:underline underline-offset-4' href='/blog'>
					blog
				</a>
				<button
					type='button'
					aria-label='Toggle dark mode'
					aria-pressed={theme === 'dark'}
					className='relative w-5 h-5 shrink-0 cursor-pointer text-sage hover:opacity-70'
					onClick={changeTheme}
				>
					<Moon
						aria-hidden='true'
						size={20}
						className='absolute inset-0 transition-all duration-500 ease-out opacity-100 scale-100 rotate-0 dark:opacity-0 dark:scale-50 dark:rotate-180'
					/>
					<Sun
						aria-hidden='true'
						size={20}
						className='absolute inset-0 transition-all duration-500 ease-out opacity-0 scale-50 -rotate-180 dark:opacity-100 dark:scale-100 dark:rotate-0'
					/>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
