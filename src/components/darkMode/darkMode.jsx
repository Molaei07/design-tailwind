/* eslint-disable react/prop-types */
export const DarkMode = ({darkMode, setDarkMode}) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={toggleDarkMode} className='font-mono p-4 font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full fixed left-8 bottom-20'>
            {darkMode ? 'LIT' : 'DRK'}
        </button>
    );
}