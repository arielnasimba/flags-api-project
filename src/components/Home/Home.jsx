import React, { useState, useEffect, useContext }  from 'react'
import Header from '../Header/Header'
import '../Home/Home.css'
import CardFlag from '../CardFlag/CardFlag'
import LOUPE from "../../assets/images/loupe.png"
import DOWNARROW from "../../assets/images/arrows-down.png"
import { Outlet } from 'react-router-dom'
// import { FlagInfoContext } from '../../App'
import { ThemeContext } from '../../FlagContext'

// export const FlagInfoContext = React.createContext();

export default function Home() {

  const { themeUser, themeInput, themeElements, themeText,flagsGallery2,setFlagsGallery2, darkMode} = useContext(ThemeContext);
// console.log(darkMode);


const [selectedRegion, setSelectedRegion] = useState('all');

const handleRegionChange = (e) => {
  setSelectedRegion(e);

};


  const [searchTerm, setSearchTerm] = useState('');

const handleFlag = (id) => {
  setTask(prevTasks =>
      prevTasks.map(task =>
          task.id == id ? { ...task, status: !task.status } : task
      )
  );
};

const [originalFlags, setOriginalFlags] = useState(flagsGallery2);

// console.log(document.querySelector('body').querySelector("main").querySelector('input'));



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

useEffect(() => {
  if (selectedRegion.trim() == 'all') {
    setFlagsGallery2(originalFlags)
  } else {
    const filteredFlags = originalFlags.filter(flag => flag.region.toLowerCase() === selectedRegion.toLowerCase());
    setFlagsGallery2(filteredFlags);
  }
}, [selectedRegion, originalFlags]);

const [filterDisplay, setFilterDisplay] = useState(false);

// flagsGallery2.map((el) => {

//   // console.log(el.region);
// })

// useEffect(() => {

//   if (selectedRegion.trim() == 'all') {
//     setFlagsGallery2(originalFlags)


//   } else {

//     flagsGallery2.map((el) => {

//       console.log(el);
//       // console.log(el.region);

//       switch (el.region.toLowerCase()) {
//         case 'africa':

//         setFlagsGallery2(prevFlag =>({ ...el}))
          
//           break;
//         case 'americas':

//         setFlagsGallery2(prevFlag =>({ ...el}))
          
//           break;
//         case 'asia':

//         setFlagsGallery2(prevFlag =>({ ...el}))
          
//           break;
//         case 'europe':

//         setFlagsGallery2(prevFlag =>({ ...el}))
          
//           break;
//         case 'oceania':

//         setFlagsGallery2(prevFlag =>({ ...el}))
          
//           break;
      
//         default:

//         setFlagsGallery2(originalFlags)
//           break;
//       }

//     })


//       let filteredRegion = originalFlags.filter(flag =>{

//         console.log(flag.region);
//         flag.region.toLowerCase().includes(selectedRegion.toLowerCase())
//       }

//       );
//       setFlagsGallery2(filteredRegion);
//   }

  // switch (selectedRegion.trim()) {
  //   case 'all':
  //     let filteredRegion = originalFlags.filter(flag =>
  //       flag.region.toLowerCase().includes(selectedRegion.toLowerCase())
  //     );
  //     setFlagsGallery2(filteredRegion);
      
  //     break;
  //   case 'africa':
      
      
  //     break;
  //   case 'americas':
      
      
  //     break;
  //   case 'asia':
      
      
  //     break;
  //   case 'oceania':
      
      
  //     break;
  //   case 'europe':
      
      
  //     break;
  
  //   default:
  //     break;
  // }
  
// }, [selectedRegion])


useEffect(() => {


  if (filterDisplay) {

    document.querySelector('body').querySelector("main").querySelector('.list_region_area').style.display =`flex`

    // if (selectedRegion != '') {
    //   let filterRegion = originalFlags.filter( flags =>
        
    //     flags.region.toLowerCase().includes(selectedRegion.toLocaleLowerCase())

    //     );
    //   setFlagsGallery2(filterRegion)
    // }


    // console.log(`filter display flex`);
  } else{
    // console.log(`filter display hidden`);

    document.querySelector('body').querySelector("main").querySelector('.list_region_area').style.display =`none`;
    // setFlagsGallery2(originalFlags)

  }

}, [filterDisplay])

console.log(selectedRegion);


useEffect(() => {



    if (darkMode) {


      document.querySelector('body').querySelector("main").querySelector('input').style.backgroundColor = `hsl(209, 23%, 27%)`;
      document.querySelector('body').querySelector("main").querySelector('.filter_region').style.backgroundColor = `hsl(209, 23%, 27%)`;
      document.querySelector('body').querySelector("main").querySelector('.filter_region > span').style.color = `rgba(255,255,255,0.5)`;
      document.querySelector('body').querySelector("main").querySelector('.list_region_area').style.backgroundColor = `hsl(209, 23%, 27%)`;
      document.querySelector('body').querySelector("main").querySelector('.list_region_area').querySelectorAll("span").forEach( (el) => (
        el.style.color = `white`
      ))


    } else{

      document.querySelector('body').querySelector("main").querySelector('input').style.backgroundColor = `white`;
      document.querySelector('body').querySelector("main").querySelector('.filter_region').style.backgroundColor = `white`;
      document.querySelector('body').querySelector("main").querySelector('.filter_region > span').style.color = `unset`;
      document.querySelector('body').querySelector("main").querySelector('.list_region_area').style.backgroundColor = `white`;
      document.querySelector('body').querySelector("main").querySelector('.list_region_area').querySelectorAll("span").forEach( (el) => (
        el.style.color = `unset`
      ))

    }

}, [darkMode])

const handleSearch = (e) => {
  setSearchTerm(e.target.value);

  
};

  
  return (
    <>
      {/* <FlagInfoContext.Provider value={{flagsGallery}}> */}

      <body
        className={`w-[100dvw] min-h-[100dvh] m-0 p-0 overflow-x-hidden

                                    min-[1440px]:
                                    min-[1440px]:flex min-[1440px]:flex-col
        
        
        
        `}

        // style={themeUser}
      >
        <Header />

        <main
          className={`w-[88%]  mt-[7rem]

                        min-[1440px]:min-h-[100dvh] min-[1440px]:bg-[rgba(250,250,250,0)]
                      min-[1440px]: min-[1440px]:self-center



      `}
        >
          {/* filter_search_area start  */}

          <div
            className={`search_filter_area 
        
                        min-[1440px]:w-full min-[1440px]: min-[1440px]:h-[10rem]
          `}
          >
            <ul
              className={` 



                    min-[1440px]:w-full     min-[1440px]:  min-[1440px]:flex  min-[1440px]:
                    min-[1440px]:h-full     min-[1440px]:items-center min-[1440px]: justify-between 

            `}
            >
              <li
                className={`
                            min-[1440px]:w-[35%] min-[1440px]:h-[40%] min-[1440px]:flex
              `}
              >
                <input
                  type="text"
                  className={`search_bar
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
                />

                <span
                  className={`w-[50px] h-[40px]  absolute
                  
                            min-[1440px]:left-[7rem] min-[1440px]:top-[11rem]
                  `}
                >
                  <img src={LOUPE} alt="" srcset="" className={`w-[70%]`} />
                </span>
              </li>

              {/* filter per continent start  */}

              <li
                className={`
                                  min-[1440px]:w-[19%] min-[1440px]:h-[40%] min-[1440px]:
                                  min-[1440px]:flex min-[1440px]:justify-end 
              `}
              >
                <div
                  className={`filter_region hover:cursor-pointer
                
                                  min-[1440px]:h-full min-[1440px]:w-full 
                                  min-[1440px]:min-[1440px]:rounded-2xl 
                                  min-[1440px]:text-center min-[1440px]:flex min-[1440px]:items-center
                                  min-[1440px]:justify-center bg-white

                                  drop-shadow-xl
                
                `}
                  onClick={() => setFilterDisplay(!filterDisplay)}
                >
                  <span
                    className={` flex min-[1440px]:gap-10
                  
                  
                  
                  
                  `}
                  >
                    Filter by Region
                    <img
                      src={DOWNARROW}
                      alt=""
                      srcset=""
                      className={`

                                        min-[1440px]: min-[1440px]:w-[1rem] min-[1440px]:h-[1rem]
                                        min-[1440px]:self-center
                    
                    `}
                    />
                  </span>
                </div>

                <div
                  className={`list_region_area


                                      absolute rounded-2xl
                                      min-[1440px]:  min-[1440px]:top-[15rem]
                                      min-[1440px]:w-[15rem] min-[1440px]:h-[15rem]

                                      hidden min-[1440px]:flex-col 
                                      min-[1440px]:pl-9  min-[1440px]:pt-5
                                      min-[1440px]:gap-3
                `}


                >
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}

                  onClick={(e) => {handleRegionChange('all')}}
                  
                  >All</span>
                  
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}

                  onClick={(e) => {handleRegionChange('africa')}}
                  
                  >Africa</span>
                  
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}

                  onClick={(e) => {handleRegionChange('americas')}}
                  
                  >America</span>
                  
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}

                  onClick={(e) => {handleRegionChange('asia')}}
                  
                  >Asia</span>
                  
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}
                  onClick={(e) => {handleRegionChange('europe')}}

                  
                  >Europe</span>
                  
                  <span className={`  
                                      hover:underline  min-[1440px]:decoration-2  min-[1440px]:underline-offset-8

                                       min-[1440px]:hover:cursor-pointer
                  `}

                  onClick={(e) => {handleRegionChange('oceania')}}
                  
                  >Oceania</span>
                </div>
              </li>

              {/* filter per continent end  */}
            </ul>
          </div>

          {/* filter_search_area end  */}

          {/* flags_cards_area start  */}
          <div
            className={`flags_cards_area 
        
                              min-[1440px]:w-full min-[1440px]: min-[1440px]:min-h-[70dvh]
                              min-[1440px]:grid  min-[1440px]:grid-cols-4 min-[1440px]:
                              min-[1440px]:gap-y-16  min-[1440px]:gap-x-[5.8rem]
      `}
          >
            <CardFlag />
          </div>

          {/* flags_cards_area end  */}
        </main>
      </body>
      {/* </FlagInfoContext.Provider> */}
    </>
  );
}
