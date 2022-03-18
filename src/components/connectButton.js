import './components.css';
import { ethers } from "ethers";
import React, {useState, useEffect} from 'react'

function ConnectButton() {

  const [button, setButton] = useState(<button className='connectButton' onClick={connect}>Connect</button>);
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [connected, setConnected] = useState(false);

  async function initialConnectionAttempt() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const addresses = await provider.listAccounts();
    console.log(addresses)
    if (addresses.length) {
      const signer = provider.getSigner();
      setProvider(provider);
      setAddress(addresses[0]);
      setSigner(signer);
      setConnected(true);
    }
  }

  async function connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let address = signer.getAddress();
    setProvider(provider);
    setAddress(address);
    setSigner(signer);
    setConnected(true);
  }

  useEffect(async () => {
    await initialConnectionAttempt();

    console.log(address)

    if (!window.ethereum) {
      setButton(<button className='connectButton'><a href='https://metamask.io/download/' target='_blank'>Install Metamask</a></button>);
    } else {
      setButton(<button className='connectButton' onClick={connect}>Connect</button>);
    }
  
    if (address) {
      setButton(<button className='connectButton'>{address.slice(0, 6) + '...' + address.slice(-4)}</button>);
    }
 }, [])

  return (
    button
  );
}

export default ConnectButton;
