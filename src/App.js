import TotalWorkInfoBox from './components/totalWorkInfoBox'
import TopBar from './components/topBar'
import { totalWork, WORKPrice } from './components/contractInteractions'
import './App.css';

function App() {
  totalWork();
  WORKPrice();

  return (
    <div className='App'>
      <TopBar></TopBar>
      <TotalWorkInfoBox></TotalWorkInfoBox>
    </div>
  );
}

export default App;
