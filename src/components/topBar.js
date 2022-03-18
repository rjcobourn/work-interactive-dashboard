import './components.css';
import ConnectButton from './connectButton';

function TopBar() {
  return (
    <div className='topBar'>
      <div>
        <h1 className='topBarText'>WORK token dashboard</h1>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
}

export default TopBar;
