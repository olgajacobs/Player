
import './css/style.css';
import Menu from './Menu';
import Center from './Center';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="wrapper container main">
      <Menu/>
      <Center/>
      <Sidebar/>
    </div>
  );
}

export default App;
