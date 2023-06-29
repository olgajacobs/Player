import {useState,useEffect} from 'react'
import './css/style.css';
import LeftBlockMenu from './Components/LeftBlockMenu/LeftBlockMenu';
import CenterBlock from './Components/CenterBlock/CenterBlock';
import Sidebar from './Sidebar';
import BottomBar from "./BottomBar";
import MyLoader from './MyLoader';

    
function App() {
    const [loading, setLoading] = useState(true);
    const stopPropagation1 = () =>{
        console.log("SSS")
    };
    useEffect(() => {
      setTimeout(() => setLoading(false), 10000);
    });
    if(loading)
    return (
        <div className="wrapper container" >
            <div className="shadow" onClick={(e) => { e.stopPropagation(); stopPropagation1(); }} role='button' tabIndex="0" onKeyUp={() => {}}>
                 <MyLoader/>
                 <p>Loading...</p>
          
            
                <div className="main">
                    <LeftBlockMenu/>
                    <CenterBlock/>
                    <Sidebar/>
            
                 </div>
        
                 <BottomBar/>
            </div>
        
        </div>
      );
              
       
  return (
    <div className="wrapper container">
      
         <div className="main">
            <LeftBlockMenu/>
            <CenterBlock/>
            <Sidebar/>
        </div>
        
        <BottomBar/>
        <footer className="footer"/>
      
    </div>
  );
}

export default App;
