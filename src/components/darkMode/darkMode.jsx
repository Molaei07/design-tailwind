/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        let theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark', 'bg-darkGray')
            setDarkMode('dark')
        }
        if (theme === 'light') {
            setDarkMode('light')
        }
    }, [])

    const toggleDarkMode = () => {
        if (darkMode === 'dark') {
            document.documentElement.classList.remove('dark', 'bg-darkGray')
            setDarkMode('light')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark', 'bg-darkGray')
            setDarkMode('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    return (
        <>
            <button onClick={toggleDarkMode} className='font-mono p-4 font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full fixed left-8 bottom-20'>
                {darkMode === 'dark' ? 'LIT' : 'DRK'}
            </button>
        </>
    );
}

export default DarkMode;