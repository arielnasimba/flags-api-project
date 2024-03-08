import React, { useContext, useState, useEffect } from 'react'
import Header from '../Header/Header'
import ARROW from "../../assets/images/arrow-left.png"
import { Outlet, Link , useParams} from 'react-router-dom';
// import { FlagInfoContext } from '../../App';
import {ThemeContext } from '../../FlagContext';

export default function Detail() {

  const { theme, flagsGallery2} = useContext(ThemeContext);
  // console.log(theme);
console.log(flagsGallery2);
    // const {flagsGallery} = useContext(FlagInfoContext);

  const { id } = useParams();

  console.log(id);

  const flagId = flagsGallery2[id];
  console.log(flagId.region);


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

            <button type="button" className={`btn bg-white
            
            
                            w-full h-full

                            min-[1440px]:text-[1.3rem] 
                            min-[1440px]:flex min-[1440px]:justify-center
                            min-[1440px]:items-center min-[1440px]:
                            
            `}>

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

                <p>Back</p>
            </button>
            
            
            </Link>


        </div>

    

        {/* flag_area start  */}
        <div className={`flags_cards_area 
        
                              min-[1440px]:w-full min-[1440px]: min-[1440px]:h-[50%]
                              min-[1440px]:  min-[1440px]:flex min-[1440px]:justify-between
                              min-[1440px]:  min-[1440px]: min-[1440px]:
      `}>



      

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
                      <div className={`desc_area bg-stone-600

                                  min-[1440px]:w-full min-[1440px]:h-[55%]
                                  min-[1440px]:grid min-[1440px]:grid-cols-2

                      `}>

                        <div className={`
                        

                                        min-[1440px]:col-start-1 min-[1440px]:bg-orange-600

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
                                
                                {/* {flagId.name.nativeName} */}
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
                                
                                    {/* {flag.population} */}
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
                                
                                    {/* {flag.population} */}
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
                                
                                    {/* {flag.population} */}
                                </span>
                            </p>

                        </div>
                        <div className={`
                        

                                        min-[1440px]:col-start-2 min-[1440px]:bg-orange-300
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
                                
                                    {/* {flag.population} */}
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
                                
                                    {/* {flag.population} */}
                                </span>
                            </p>
 
                            <p className={`
                                        
                                        min-[1440px]:text-[0.75rem] min-[1440px]:font-[700]
                            `}       
                            >
    
                                Languages :  &nbsp;
                                <span className={`
                                                        min-[1440px]:font-[600]
                                `}>
                                
                                    {/* {flag.population} */}
                                </span>
                            </p>
 




                        </div>







                      </div>


                      <div className={`near_countries_area bg-stone-600

                                  min-[1440px]:w-full min-[1440px]:h-[10%]
                      `}>

                        <span className={`
                        
                        
                                    min-[1440px]:font-[700]
                        `}>
                            Border Countries : &ensp;
                        </span>

                        <div className={` map_near_countries
                        

                        `}>




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
