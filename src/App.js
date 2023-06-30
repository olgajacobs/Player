import {useState,useEffect} from 'react'
import './css/style.css';
import './shadow.css';
import LeftBlockMenu from './Components/LeftBlockMenu/LeftBlockMenu';
import CenterBlock from './Components/CenterBlock/CenterBlock';
import Footer from "./Components/Footer/Footer";
import MyLoader from './MyLoader';
import RightBlock from './Components/RightBlock/RightBlock';

    
function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 4000);
    });
    
   


    return (
        <div className="wrapper container" >
            <div className="main">
                <LeftBlockMenu loading={loading}/>
                <CenterBlock loading={loading}/>
                <RightBlock loading={loading}/>
                </div>
                <Footer/>

                {loading&&(  
                <div className="first_layer" >
                <div className="second_layer">
                    <MyLoader/>
                    <p>Loading...</p>
                </div>
                </div>)}
        </div>
      );
}

export default App;
