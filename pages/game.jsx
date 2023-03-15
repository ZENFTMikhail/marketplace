import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Phaser from 'phaser';
import { ethers } from 'ethers';

const Game = () => {
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState(true);

  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);
    let zombie;

    function preload() {
      this.load.image('background', '/211.jpg');
      this.load.image('zombie', '/22.png');
      this.load.image('eth', '/23.png');
    }

    function create() {
      this.add.image(500, 300, 'background');

      this.add.image(140, 180, 'eth');
      zombie = this.add.image(200, 200, 'zombie');
    }

    function update() {
      zombie.x += 1;
      zombie.y += 1;
    }

    gameRef.current.appendChild(game.canvas);

    return () => {
      game.destroy(true);
    };
  }, []);

  async function getBalance() {
    if (typeof window !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      setBalance(ethers.utils.formatEther(balance));
    }
  }
  getBalance();
  return (
    <div

      ref={gameRef}
    >

      <h1 style={{ color: 'white' }}>Ваш баланс :  {balance}</h1>

    </div>
  );
};

export default Game;

