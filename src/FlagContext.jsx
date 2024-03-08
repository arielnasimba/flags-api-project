import React, {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext();
const FlagContext2 = createContext();

const ThemeProvider = ( { children }) =>{

    const [ theme, setTheme] = useState("light");
    const [flagsGallery2, setFlagsGallery2] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setFlagsGallery2(data);
        });
      }, []);
    //   console.log(flagsGallery2);
    
    
    return (
        
        <ThemeContext.Provider value={{theme, flagsGallery2}} >

            {children}

        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext, FlagContext2}