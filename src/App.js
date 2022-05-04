import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  // State
  const [walletAddress, setWalletAddress] = useState(null);

  /*const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log('Connected with Public Key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };*/

  const connectWallet = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect();
          console.log('Connected with Public Key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        } else {
          alert('Solana object not found! Get a Phantom Wallet 👻');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };



  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet}>
      Connect to Wallet
    </button>
  );



  /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  /*useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);*/



  return (
    <div className="App">
      <header className="App-header">
        {!walletAddress && renderNotConnectedContainer()}
      </header>
    </div>
  );
}

export default App;
