import { useState } from "react";

const Nav = () => {
    const html = document.documentElement;
    const [theme, setTheme] = useState(html.classList[0]);
    const [spinning, setSpinning] = useState(false);

    const changeTheme = () => {
        const newTheme = html.classList.contains("dark") ? "light" : "dark";

        html.classList.toggle("dark");
        setTheme(newTheme);
        localStorage.theme = newTheme;

        setSpinning(true);
        setTimeout(() => setSpinning(false), 300);
    };

    return (
        <header className="sticky bg-white dark:bg-zinc-800 top-0 z-10">
            <nav className="py-4 flex justify-between">
                <a href="/" className="text-lg md:text-xl font-semibold hover:text-sage">
                    jenny le
                </a>
                <div className="flex gap-5 text-sm md:text-base font-medium text-zinc-700 dark:text-gray-200">
                    <a className="hover:text-sage hover:underline underline-offset-4" href="#about">
                        about
                    </a>
                    <a
                        className="hover:text-sage hover:underline underline-offset-4"
                        href="#experience"
                    >
                        experience
                    </a>
                    <a
                        className="hover:text-sage hover:underline underline-offset-4"
                        href="#photos"
                    >
                        photos
                    </a>
                    <button className="relative w-6 h-6 cursor-pointer" onClick={changeTheme}>
                        {theme === "dark" ? (
                            <svg
                                className={`absolute inset-0 transition-all duration-550 ease-in-out transform
                                ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                ${spinning && theme === "dark" ? "rotate-[72deg]" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                className={`absolute inset-0 transition-all duration-550 ease-in-out transform
                                ${theme === "dark" ? "opacity-0 scale-90" : "opacity-100 scale-100"}
                                ${spinning && theme === "light" ? "rotate-[72deg]" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
