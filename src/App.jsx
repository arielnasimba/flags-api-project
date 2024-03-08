import  React,{ useState, useEffect,  useContext } from 'react'

import './App.css'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
// import { ThemeContext } from './FlagContext';

// export const FlagInfoContext = React.createContext();


function App() {
  const [count, setCount] = useState(0)

  // const [flagsGallery, setFlagsGallery] = useState([]);
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setFlagsGallery(data);
  //     });
  //   }, []);


  return (
    <>

    {/* <FlagInfoContext.Provider value={{flagsGallery, setFlagsGallery}} > */}



      <Home/>

      {/* <div className="hidden"> */}

      {/* <Detail/> */}

      {/* </div> */}

    {/* </FlagInfoContext.Provider> */}
      


    </>
  )
}

export default App
