
import './css/style.css';
import Menu from './Menu';
import Center from './Center';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

function App() {
  return (
    <div className="wrapper container">
        <div className="main">
            <Menu/>
            <Center/>
            <Sidebar/>
        </div>
        <BottomBar/>
        <footer className="footer"/>
    </div>
  );
}

export default App;
