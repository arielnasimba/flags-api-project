import React, { useContext, useState, useEffect } from 'react'
import Header from '../Header/Header'
import ARROW from "../../assets/images/arrow-left.png"
import { Outlet, Link , useParams} from 'react-router-dom';
import { FlagInfoContext } from '../../App';

export default function Detail() {

    // const {flagsGallery} = useContext(FlagInfoContext);

  const { id } = useParams();

  console.log(id);



//   const flag = flagsGallery[id];


  const [flagsGalleryDetail, setFlagsGalleryDetail] = useState([]);
  const [flag_src, setFlag_src] = useState(null);

  const flagId = flagsGalleryDetail[id];


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setFlagsGalleryDetail(data);


        setFlag_src(flagId.flags.png);

      });




    }, []);

    // console.log(flagId.flags.png);



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
                              min-[1440px]:  min-[1440px]: min-[1440px]:bg-yellow-200
      `}>



      

{/* <h3>{flag.name.common}</h3> */}

            <div className={`left bg-slate-700 flex
        
                            min-[1440px]:w-[50%] min-[1440px]:h-full
        
            
            
            `}>
            
            <img src={flag_src}  alt="" srcset="" 
                    className={``}
            />
        
        
            </div>
            <div className={`right bg-slate-200
        
                            min-[1440px]:w-[42%] min-[1440px]:h-full
                            min-[1440px]:flex min-[1440px]:justify-center 
                            min-[1440px]:items-center


                            
        
            
            
            `}>


                <div className={`text_inside bg-orange-400 
                
                                    min-[1440px]:w-full min-[1440px]:flex
                                    min-[1440px]:h-[78%] min-[1440px]:flex-col
                                    min-[1440px]:justify-between
                `}>


                      <div className={`title_area bg-stone-600

                                  min-[1440px]:w-[50%] min-[1440px]:h-[12%]
                      `}>

                        <h3 className={`
                        
                                min-[1440px]:text-[1.8rem]
                                min-[1440px]:font-[800]
                        
                        `}>

                            {/* {flagId.name} */}
                        </h3>

                      </div>
                      <div className={`desc_area bg-stone-600

                                  min-[1440px]:w-full min-[1440px]:h-[55%]
                      `}>




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
        {/* </FlagInfoContext.Provider> */}
    </>
  )
}
