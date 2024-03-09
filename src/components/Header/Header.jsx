import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MOON from "../../assets/images/moon.png"
import {ThemeContext } from '../../FlagContext';


export default function Header() {
  const { theme, themeElements, themeUser, themeText, darkMode, setDarkMode, setThemeElements } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };


  useEffect(() => {

    // darkMode ? (console.log(`dark mode on`), 

    //   document.querySelector("header").style = `none`
    
    
    
    
    
    
    
    
    // ):(console.log(`dark mode off`), 
    //   document.querySelector("header").style = themeElements);

    if (darkMode) {

      document.querySelector("body").style.backgroundColor = "hsl(209, 23%, 22%)";


      document.querySelector("header").style.backgroundColor = "hsl(209, 23%, 27%)";
      document.querySelector("h1").style.color = "white";

      document.querySelector("button").style.backgroundColor = "hsl(209, 23%, 27%)";
      document.querySelector("button").style.color = "hsl(0, 0%, 100%)";
      document.querySelector("img").style.backgroundClip = "hsl(0, 0%, 100%)";


      document.querySelectorAll("#cardFlag").forEach( ( el ) => (
        el.style.backgroundColor ="hsl(209, 23%, 27%)",
        el.style.color = `hsl(0, 0%, 100%)`
        
        ) )



      // document.querySelectorAll("#cardFlag").style.backgroundColor= "hsl(209, 23%, 22%)";


      // console.log(`dark mode on`);
    } else{

      document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 95%)";


      document.querySelector("header").style = `none`
      document.querySelector("h1").style.color = "black";

      document.querySelector("button").style.backgroundColor = "";
      document.querySelector("button").style.color = "";
      // document.querySelectorAll("#cardFlag").forEach( ( el ) => console.log(el) )

      document.querySelectorAll("#cardFlag").forEach( ( el ) => (
        el.style.backgroundColor ="hsl(0, 0%, 95%)",
        el.style.color = `unset`
        ) )


      // document.querySelector("#cardFlag").style.backgroundColor= "hsl(0, 0%, 100%)";





      // console.log(`dark mode off`);

    }

    // backgroundColor:  "hsl(207, 26%, 17%)",
    //     color: "hsl(0, 0%, 100%)",
    


    return () => {
    }
  }, [darkMode])
  


  return (

    <>
     <header className={` w-full h-[5rem] fixed top-0 shadow-[0px_3px_3px_0px_rgba(201,190,190,0.3)]
     
                        bg-[rgba(255,255,255,1)]


                            
                                  min-[1440px]:flex  min-[1440px]:justify-center            
                                    min-[1440px]:  min-[1440px]:
     
     `}
    //  style={themeElements}
     >

        <ul className={` 
        
        
        
                            min-[1440px]:w-[88%]     min-[1440px]:  min-[1440px]:flex  min-[1440px]:
                            min-[1440px]:h-full     min-[1440px]:items-center min-[1440px]: justify-between 
        
        `}>

          <Link

          to={`/flags-api-project/`}

          className={`
                                  min-[1440px]:w-[25%] min-[1440px]:h-[40%] 
                `}
          >
          
              <h1 className={`            

                                          min-[1440px]:text-[1.9rem]  min-[1440px]:font-[900]
                                          min-[1440px]:leading-8

              `}
              
              >

                  Where in the world?

              </h1>
          
        
          </Link>

            
            <li className={`
                                        min-[1440px]:w-[19%] min-[1440px]:h-[60%] 
                                        min-[1440px]:flex min-[1440px]:justify-end 
                                        
            `}>

              <button className={`  

                                              min-[1440px]:btn min-[1440px]:h-full min-[1440px]:w-[55%]
                                              min-[1440px]:  min-[1440px]:border-[0px]
              `}
              
              // style={themeUser}

              onClick={toggleTheme}

              >

                <img src={MOON} alt="" srcset=""
                    className={`
                    
                                          min-[1440px]:w-[12%]
                    `}
                />
                <span  className={` 


                                  min-[1440px]:text-[1rem]  min-[1440px]:font-[600]
                
                `}
                
                >
                  Dark Mode
                </span>
              </button>

            </li>
        </ul>


     </header>
    
    </>
  )
}
