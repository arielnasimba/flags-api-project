import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MOON from "../../assets/images/moon.png"
import {ThemeContext } from '../../FlagContext';


export default function Header() {
  const { theme, themeElements, themeUser, themeText} = useContext(ThemeContext);


  return (

    <>
     <header className={` w-full h-[5rem] fixed top-0 shadow-[0px_3px_3px_0px_rgba(201,190,190,0.3)]
     
                        bg-[rgba(255,255,255,1)]


                            
                                  min-[1440px]:flex  min-[1440px]:justify-center            
                                    min-[1440px]:  min-[1440px]:
     
     `}
     style={themeElements}
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
              
              style={themeText}
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
              
              style={themeUser}
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
