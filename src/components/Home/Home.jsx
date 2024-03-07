import React, { useState, useEffect, useContext }  from 'react'
import Header from '../Header/Header'
import '../Home/Home.css'
import CardFlag from '../CardFlag/CardFlag'

export const FlagInfoContext = React.createContext();

export default function Home() {

  

  const [flagsGallery, setFlagsGallery] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setFlagsGallery(data);
        });
      }, []);

   
  
  return (

    <>

        
          <FlagInfoContext.Provider value={{flagsGallery}}>


          

        <body className={`w-[100dvw] min-h-[100dvh] m-0 p-0 overflow-x-hidden

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col
        
        
        
        `}

           
        
        
        
        >

          

          <Header />


      <main className={`w-[88%]  

                        min-[1440px]:min-h-[100dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
                      min-[1440px]: min-[1440px]:self-center



      `}
      >

                 {/* filter_search_area start  */}


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

         {/* filter_search_area end  */}

        {/* flags_cards_area start  */}
        <div className={`flags_cards_area 
        
                              min-[1440px]:w-full min-[1440px]: min-[1440px]:min-h-[70dvh]
                              min-[1440px]:grid  min-[1440px]:grid-cols-4 min-[1440px]:justify-between
                              min-[1440px]:gap-y-16  min-[1440px]:gap-x-16
      `}>

      

 <CardFlag />
    



        </div>


     {/* flags_cards_area end  */}

      </main>

            
        </body>
        </FlagInfoContext.Provider>
    </>
  )
}
