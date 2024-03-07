import React from 'react'
import Header from '../Header/Header'
import '../Home/Home.css'

export default function Home() {
  return (

    <>
        <body className={`w-[100dvw] min-h-[100dvh] 

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col
        
        
        
        `}

           
        
        
        
        >

<Header />


      <main className={`w-[88%]  

                        min-[1440px]:min-h-[100dvh]
                      min-[1440px]: min-[1440px]:self-center



      `}
      >

        <div className={`search_filter_area 
        
                        min-[1440px]:w-full min-[1440px]:min-[1440px]:h-[12rem]
          `}>

            <ul className={` 



                    min-[1440px]:w-full     min-[1440px]:  min-[1440px]:flex  min-[1440px]:
                    min-[1440px]:h-full     min-[1440px]:items-center min-[1440px]: justify-between 

            `}>
            
              <li
              className={`
                            min-[1440px]:w-[40%] min-[1440px]:h-[45%] min-[1440px]:bg-red-400
              `}
              >



              </li>


            <li className={`
                                min-[1440px]:w-[19%] min-[1440px]:h-[45%] min-[1440px]:bg-red-400
                                min-[1440px]:flex min-[1440px]:justify-end 
            `}>
            



            </li>
            </ul>





        </div>
        

      </main>

            
        </body>
    
    </>
  )
}
