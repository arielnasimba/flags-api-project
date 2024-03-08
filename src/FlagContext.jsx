import React, {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext();
const FlagContext2 = createContext();

const ThemeProvider = ( { children }) =>{

    const [ theme, setTheme] = useState("light");

    const [themeUser, setThemeUser] = useState({
        backgroundColor:  "hsl(207, 26%, 17%)",
        color: "hsl(0, 0%, 100%)",

      });

    const [themeElements, setThemeElements] = useState({
        backgroundColor:  "hsl(209, 23%, 22%)",

      });

    const [themebtn, setThemebtn] = useState({
        backgroundColor:  "hsl(209, 23%, 22%)",
        color: "hsl(0, 0%, 100%)",

      });

    const [themeText, setThemeText] = useState({
        Color:  "hsl(0, 0%, 100%)",

      });
    const [themeInput, setThemeInput] = useState({
        backgroundColor:  "hsl(0, 0%, 52%)",

      });


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
        
        <ThemeContext.Provider value={{theme, flagsGallery2,setFlagsGallery2, themeUser, setThemeUser, themeElements,setThemeElements, themeInput, setThemeInput, themeText, setThemeText, themebtn, setThemebtn}} >

            {children}

        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext, FlagContext2}