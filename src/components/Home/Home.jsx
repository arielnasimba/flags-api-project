import React, { useState, useEffect, useContext }  from 'react'
import Header from '../Header/Header'
import '../Home/Home.css'
import CardFlag from '../CardFlag/CardFlag'
import LOUPE from "../../assets/images/loupe.png"
import { Outlet } from 'react-router-dom'
// import { FlagInfoContext } from '../../App'
import { ThemeContext } from '../../FlagContext'

// export const FlagInfoContext = React.createContext();

export default function Home() {

  const { themeUser, themeInput, themeElements, themeText,flagsGallery2,setFlagsGallery2, darkMode} = useContext(ThemeContext);
console.log(darkMode);

  const [searchTerm, setSearchTerm] = useState('');

const handleFlag = (id) => {
  setTask(prevTasks =>
      prevTasks.map(task =>
          task.id == id ? { ...task, status: !task.status } : task
      )
  );
};

const [originalFlags, setOriginalFlags] = useState(flagsGallery2);

useEffect(() => {
  if (searchTerm.trim() !== '') {
    let filteredTasks = originalFlags.filter(flag =>
      flag.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFlagsGallery2(filteredTasks);
  } else {
    setFlagsGallery2(originalFlags);
  }
}, [searchTerm]);

const handleSearch = (e) => {
  setSearchTerm(e.target.value);



  
};

  
  return (

    <>

        
          {/* <FlagInfoContext.Provider value={{flagsGallery}}> */}


          

        <body className={`w-[100dvw] min-h-[100dvh] m-0 p-0 overflow-x-hidden

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col
        
        
        
        `} 

            // style={themeUser}
        
        
        
        >



          <Header />

         

      <main className={`w-[88%]  mt-[7rem]

                        min-[1440px]:min-h-[100dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
                      min-[1440px]: min-[1440px]:self-center



      `}
      >

                 {/* filter_search_area start  */}


        <div className={`search_filter_area 
        
                        min-[1440px]:w-full min-[1440px]: min-[1440px]:h-[10rem]
          `}>

            <ul className={` 



                    min-[1440px]:w-full     min-[1440px]:  min-[1440px]:flex  min-[1440px]:
                    min-[1440px]:h-full     min-[1440px]:items-center min-[1440px]: justify-between 

            `}>
            
              <li
              className={`
                            min-[1440px]:w-[35%] min-[1440px]:h-[40%] min-[1440px]:flex
              `}
              >

                  <input type="text"

   
                  

                  className={` 
                          drop-shadow-xl
                          rounded-xl
                          
                  
                          min-[1440px]:w-[80%] min-[1440px]:h-full
                          min-[1440px]:pl-[5rem] min-[1440px]:pt-[0.5rem]

                  `}

                  name="search"
                  id="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search for a country..."

                  style={themeElements}

                  />

                  <span className={`w-[50px] h-[40px]  absolute
                  
                            min-[1440px]:left-[7rem] min-[1440px]:top-[11rem]
                  `}>

                    <img src={LOUPE} alt="" srcset="" 
                        className={`w-[70%]` }

                        style={themeText}
                    />
                  </span>


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
                              min-[1440px]:grid  min-[1440px]:grid-cols-4 min-[1440px]:
                              min-[1440px]:gap-y-16  min-[1440px]:gap-x-[5.8rem]
      `}>

      

 <CardFlag />
    



        </div>


     {/* flags_cards_area end  */}

      </main>

            
        </body>
        {/* </FlagInfoContext.Provider> */}
    </>
  )
}
