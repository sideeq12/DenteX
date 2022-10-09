
import './App.css';
import Menu from './components/Headers/menu';
import ImageComp from './components/imagesComponent/image';
import Waveline from './components/waveline/waveline';

function App() {
  return (
    <div className="App">
     <Menu />
     <div>
      <Waveline />
      <ImageComp />
     </div>
    </div>
  );
}

export default App;
