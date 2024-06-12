/* eslint-disable react/prop-types */
export const DarkMode = ({darkMode, setDarkMode}) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={toggleDarkMode} className='p-4 text-white bg-slate-900 rounded-full fixed left-4 top-1/2'>
            {darkMode ? 'LIGHT' : 'DARK'}
        </button>
    );
}