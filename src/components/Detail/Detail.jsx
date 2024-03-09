import React, { useContext, useState, useEffect } from 'react'
import Header from '../Header/Header'
import ARROW from "../../assets/images/arrow-left.png"
import { Outlet, Link , useParams} from 'react-router-dom';
// import { FlagInfoContext } from '../../App';
import {ThemeContext } from '../../FlagContext';

export default function Detail() {

  const { theme, flagsGallery2, themeUser, themeElements, themeBtn, themeText, darkMode} = useContext(ThemeContext);

    console.log(darkMode);

  const { id = 0} = useParams();

  console.log(id);

  const flagId = flagsGallery2[id];
-
 
  useEffect(() => {

    if (darkMode) {

      document.querySelector(".back_button").style.backgroundColor = `hsl(209, 23%, 27%)`;
      document.querySelector("#backBtn").style.color = `white`;


      document.querySelector("h3").style.color = `white`;

      document.querySelectorAll("p").forEach(( element) =>{
        element.style.color = `white`;
      })
 
      document.querySelectorAll("span").forEach(( element) =>{
        element.style.color = `white`;
      })


      console.log(`dark mode on`);
    } else{

      document.querySelector(".back_button").style.backgroundColor = `unset`;
      document.querySelector("#backBtn").style.color = `unset`;

      document.querySelector("h3").style.color = `unset`;

      
      document.querySelectorAll("p").forEach(( element) =>{
        element.style.color = `unset`;
      })
      
      document.querySelectorAll("span").forEach(( element) =>{
        element.style.color = `unset`;
      })
console.log(`dark mode off`);

    }

  }, [darkMode])
  


  return (
    
    <>

        
          {/* <FlagInfoContext.Provider value={{flagsGallery}}> */}


          

        <body className={`w-[100dvw] h-[100dvh] 

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col 
        
        
        
        `}

        >

          

          <Header />


      <main className={`w-[88%]  mt-[4rem]

                        min-[1440px]:h-[100dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
                      min-[1440px]: min-[1440px]:self-center



      `}
      >

        <div className={`back_btn_area 
        
        
                        min-[1440px]:w-[10rem] min-[1440px]:h-[3rem] 
                        min-[1440px]: min-[1440px]:my-[3.5rem]
        
        `}>

            <Link

            

                to={`/flags-api-project/`}
            >

            <button type="button" className={`back_button btn 
            
            
                            w-full h-full

                            min-[1440px]:text-[1.3rem] 
                            min-[1440px]:flex min-[1440px]:justify-center
                            min-[1440px]:items-center min-[1440px]:
                            
            `}
            

            
            >

                <span 
                    className={`

                    min-[1440px]: min-[1440px]:w-[20%]
                    min-[1440px]:h-[50%]
                    
                    `}
                
                >
                    <img src={ARROW} alt="" srcset=""
                        className={`
                        
                                min-[1440px]:w-[95%]
                                min-[1440px]:
                        `}
                    />

                </span>

                <p 

                id='backBtn'
                
                >Back</p>
            </button>
            
            
            </Link>


        </div>

    

        {/* flag_area start  */}
        <div className={`flags_cards_area 
        
                              min-[1440px]:w-full min-[1440px]: min-[1440px]:h-[50%]
                              min-[1440px]:  min-[1440px]:flex min-[1440px]:justify-between
                              min-[1440px]:  min-[1440px]: min-[1440px]:
      `}


      >



      

{/* <h3>{flag.name.common}</h3> */}

            <div className={`left  flex
        
                            min-[1440px]:w-[50%] min-[1440px]:h-full
        
            
            
            `}>
            
            <img src={flagId.flags.png}  alt="" srcset="" 
                    className={`rounded-3xl`}
            />
        
        
            </div>
            <div className={`right 
        
                            min-[1440px]:w-[42%] min-[1440px]:h-full
                            min-[1440px]:flex min-[1440px]:justify-center 
                            min-[1440px]:items-center


                            
        
            
            
            `}>


                <div className={`text_inside  
                
                                    min-[1440px]:w-full min-[1440px]:flex
                                    min-[1440px]:h-[78%] min-[1440px]:flex-col
                                    min-[1440px]:justify-between
                `}>


                      <div className={`title_area 

                                  min-[1440px]:w-[50%] min-[1440px]:h-[12%]
                      `}>

                        <h3 className={`
                        
                                min-[1440px]:text-[1.8rem]
                                min-[1440px]:font-[800]
                        
                        `}>

                            {flagId.name.common}
                        </h3>

                      </div>
                      <div className={`desc_area 

                                  min-[1440px]:w-full min-[1440px]:h-[55%]
                                  min-[1440px]:grid min-[1440px]:grid-cols-2

                      `}>

                        <div className={`
                        

                                        min-[1440px]:col-start-1 min-[1440px]:

                                        min-[1440px]:flex min-[1440px]:flex-col  min-[1440px]:justify-center 
                                        min-[1440px]:gap-1
                        
                        `}>



                        
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Native Name :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                {

                                      (Object.entries(Object.entries(flagId.name.nativeName).at(-1)).at(-1))[(Object.entries(Object.entries(flagId.name.nativeName).at(-1)).at(-1)).length-1].common
                                }
                                </span>
                            </p>
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Population :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                    {flagId.population}
                                </span>
                            </p>
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Region :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                    {flagId.region}
                                </span>
                            </p>
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Sub Region :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                    {flagId.subregion}
                                </span>
                            </p>
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Capital :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                {flagId.capital}
                                </span>
                            </p>

                        </div>
                        <div className={`
                        

                                        min-[1440px]:col-start-2 min-[1440px]:
                                        min-[1440px]:flex min-[1440px]:flex-col  min-[1440px]:justify-start 
                                        min-[1440px]:gap-1 min-[1440px]:pt-7
                        
                        `}>

                          <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Top Level Domain  :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                {flagId.tld }
                                </span>
                            </p>
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Currencies :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                {

                                  
                                  Object.entries(flagId.currencies).map( ( [key, val] = entry) => {
                                    
                                    return (
                                      val.name

                                    )
                                  })
                                }
                                </span>
                            </p>
 
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                                        min-[1440px]:flex min-[1440px]:
                            `}       
                            >
    
                                Languages :  
                                <span className={`
                                                        min-[1440px]:font-[600] min-[1440px]:
                                                        
                                `}>
                                
                                    {/* {flag.population} */}

                                    {
                                        Object.entries(flagId.languages).map( ( [key, val] = entry) =>{

                                          return (

                                            
                                            <span >
                                              &nbsp;&nbsp;
                                              {val}
                                            </span>
                                          )
                                        })

                                    }
                                </span>
                            </p>
 




                        </div>







                      </div>


                      <div className={`near_countries_area 

                                  min-[1440px]:w-full min-[1440px]:h-[10%]  min-[1440px]:flex
                      `}>

                        <span className={`
                        
                        
                                    min-[1440px]:font-[700]
                        `}>
                            Border Countries : &ensp;
                        </span>

                        <div className={` map_near_countries 
                                           min-[1440px]:flex  min-[1440px]:gap-2

                                               
                        

                        `}>

                          {

                                  flagId.borders.map((border, id) => {
                                     let hello = 'd';
                                    return (

                                      <Link
                                      
                                      to={`/flags-api-project/detail/${id}`}

                                      >
                                      
                                      

                                      <button type="button"
                                      className={` 
                                      
                                      min-[1440px]: min-[1440px]:h-[1.5rem]
                                      min-[1440px]:w-[4rem]  min-[1440px]:rounded-md
                                      min-[1440px]:flex min-[1440px]:justify-center 
                                      min-[1440px]:items-center min-[1440px]:border
                                      min-[1440px]:active:scale-[90%]  min-[1440px]:active:blur-[0.03rem]
                          
                          `}
                                      
                                      >
                                 <p className={`
                                      
                                      min-[1440px]:text-[0.8rem] min-[1440px]:
                                      min-[1440px]:  min-[1440px]:leading-4
                          
                                            `}>
                                        {border}

                                        </p>

                                      </button>

                                      </Link>




                                    )
                                  })
                          }




                        </div>

                      </div>

                </div>



            
        
        
        
            </div>

    



        </div>


     {/* flag_area end  */}

      </main>

            
        </body>
    </>
  )
}
