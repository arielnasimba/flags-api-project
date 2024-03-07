import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Outlet, Link , useParams} from 'react-router-dom';
import { FlagInfoContext } from '../Home/Home';

export default function Detail() {


const { flagsGallery} = useContext(FlagInfoContext);
  const {id = 0} = useParams();
  const flagId = flagsGallery[id]


  return (
    
    <>

        
          {/* <FlagInfoContext.Provider value={{flagsGallery}}> */}


          

        <body className={`w-[100dvw] min-h-[100dvh] m-0 p-0 overflow-x-hidden

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col bg-slate-600
        
        
        
        `}

           
        
        
        
        >

          

          <Header />


      <main className={`w-[88%]  

                        min-[1440px]:min-h-[100dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
                      min-[1440px]: min-[1440px]:self-center



      `}
      >

    

        {/* flags_cards_area start  */}
        <div className={`flags_cards_area 
        
                              min-[1440px]:w-full min-[1440px]: min-[1440px]:min-h-[70dvh]
                              min-[1440px]:grid  min-[1440px]:grid-cols-4 min-[1440px]:justify-between
                              min-[1440px]:gap-y-16  min-[1440px]:gap-x-16
      `}>

      

   

    



        </div>


     {/* flags_cards_area end  */}

      </main>

            
        </body>
        {/* </FlagInfoContext.Provider> */}
    </>
  )
}
