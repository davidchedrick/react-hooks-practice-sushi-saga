import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [wallet, setWallet] = useState(100);
  const [sushis, setSushis] = useState([]);
  console.log("sushis: ", sushis);

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => {
        return { ...sushi, eaten: false };
      });
      setSushis(updatedSushis)
    })
  }, []);

  function handleEatSushi(eatenSushi) {
    if(wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map(sushi => {
        if(sushi.id === eatenSushi.id) return { ...sushi, eaten:true};
        return sushi;
      });
      setSushis(updatedSushis);
      setWallet(wallet => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet(wallet => wallet + moreMoney)
  }

  const eatenSushi = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        onEatSushi={handleEatSushi}
      />
      <Table 
        wallet={wallet} 
        onAddMoney={handleAddMoney}
        plates={eatenSushi}
      />
    </div>
  );

}

export default App;
