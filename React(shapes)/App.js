import logo from './logo.svg';
import "./component/style.css"
import './App.css';
import {Square,Rectangle,Circle,Parallelogram,Cube} from './component/shapes';
function App() {
  return (
    <div className='parent'>
      <Parallelogram />
      <Rectangle />
      <Cube />
      <Square />
     
      
      <Circle />
    </div>
  );
}

export default App;
