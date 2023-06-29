import {useState,useEffect} from 'react'
import './css/style.css';
import LeftBlockMenu from './Components/LeftBlockMenu/LeftBlockMenu';
import CenterBlock from './Components/CenterBlock/CenterBlock';
import Sidebar from './Sidebar';
import BottomBar from "./BottomBar";
import MyLoader from './MyLoader';

    
function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
    });
    if(loading)
    return (
        <div className="wrapper container">
          
            ?<MyLoader/>
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
