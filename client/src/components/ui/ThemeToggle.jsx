import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme === 'light'){
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }else{
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
    },[]);

    const toggleTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true)
        }
    }
  return (
    <div>
      <button onClick={toggleTheme} className='theme-btn'>
        {isDarkMode ? <Sun className='h-6 w-6 sun' /> : <Moon className='h-6 w-6 moon' />}
      </button>
    </div>
  )
}

export default ThemeToggle
