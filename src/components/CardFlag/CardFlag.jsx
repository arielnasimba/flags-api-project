import React, { useContext } from 'react'
// import { FlagInfoContext } from '../../App';
import { Link } from 'react-router-dom';
import {ThemeContext } from '../../FlagContext';

export default function CardFlag() {

    // const {flagsGallery} = useContext(FlagInfoContext);
    const { theme, flagsGallery2, themeElements} = useContext(ThemeContext);
    // console.log(theme);

    // console.log(flagsGallery[0].name.common);


    // console.log(ThemeContext);


  return (
    <>

        {

            flagsGallery2.map (( flag , id ) =>{

                return (
                    
                    <Link
                    
                        to={`/flags-api-project/detail/${id}`}
                    >
                    
                    


                    <div key={id} className={` card_template hover:scale-110 hover:shadow-2xl  flex flex-col shadow-md rounded-3xl
    
                            
                    min-[1440px]:w-[16.85rem] min-[1440px]:h-[22rem] min-[1440px]:


`}
                    style={themeElements}
>

{/* image area start  */}

<div className={`image_area rounded-t-3xl


                        min-[1440px]: min-[1440px]:w-full min-[1440px]:h-[50%]

                        min-[1440px]: min-[1440px]:flex


`}>

    <img src={flag.flags.png} alt="" srcset="" 
        className={`rounded-t-3xl w-full
        
        `}
    />

</div>

{/* image area end  */}

<div className={`

                min-[1440px]: min-[1440px]:w-full min-[1440px]:h-[50%]

                min-[1440px]: min-[1440px]:flex justify-center items-center


`}>

    <div className={`

                            min-[1440px]: min-[1440px]:w-[88%] min-[1440px]:h-[72%]

                            min-[1440px]: min-[1440px]:flex min-[1440px]:flex-col


                            `} 
    >

            {/* title flag area start  */}
        <div className={`title_flag
        
                                            min-[1440px]:w-full min-[1440px]:h-[22%] min-[1440px]:
        
        `}>

            <h3 className={`
            
                            min-[1440px]:text-[1.3rem] min-[1440px]:font-[700] 
            `}      
            
            
            >

                {flag.name.common}
            </h3>


        </div>
            {/* title flag area end  */}


            {/* description flag area start  */}
        <div className={`description_flag
        
                                            min-[1440px]:w-full min-[1440px]:h-[78%] min-[1440px]:
                                            min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:justify-center 
                                            min-[1440px]:gap-1
        
        `}>



            <p className={`
            
                            min-[1440px]:text-[0.8rem] min-[1440px]:font-[700]
            `}       
            >

                Population:  &nbsp;
                <span className={`
                                        min-[1440px]:font-[600]
                `}>

                    {flag.population}
                </span>
            </p>
            <p className={`
            
                            min-[1440px]:text-[0.8rem] min-[1440px]:font-[700]
            `}       
            >

                Region:  &nbsp;
                <span className={`
                                        min-[1440px]:font-[600]
                `}>

                    {flag.region}   
                </span>
            </p>
            <p className={`
            
                            min-[1440px]:text-[0.8rem] min-[1440px]:font-[700]
            `}       
            >

                Capital: &nbsp;
                <span className={`
                                        min-[1440px]:font-[600]
                `}>
                    {flag.capital}
                    </span> 
            </p>


        </div>
            {/* description flag area end  */}



    </div>


    
</div>



</div>
</Link>
                )
            })
        }

      
    
    </>
    
  )


}
