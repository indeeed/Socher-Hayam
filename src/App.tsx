import { useEffect, useState } from "react";
import { remult } from "remult";
import { Player } from "./shared/Player";
import NavbarTop from "./components/NavbarTop";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import { GiCargoShip } from "react-icons/gi";
// import { GiMoneyStack } from "react-icons/gi";
// import { GiTreasureMap } from "react-icons/gi";

import {
  GiCargoShip,
  GiMoneyStack,
  GiTreasureMap,
  GiLockedChest,
  GiWoodPile,
  GiMetalBar,
  GiCutDiamond,
} from "react-icons/gi";

const PlayerRepo = remult.repo(Player);

export default function App() {
  const [player, setPlayer] = useState<Player[]>([]);

  useEffect(() => {
    PlayerRepo.find().then(setPlayer);
  }, []);
  return (
    <div className="app">
      <NavbarTop />
      <main>
        <Container>
          <h1 className="text-center">{player[0]?.name}</h1>

          <div className="main">
            {player.map((playerInfo) => {
              return (
                <div key={playerInfo.id}>
                  <h2>{playerInfo.name}</h2>
                  <ul>
                    <li className="icon">
                      <GiCargoShip /> 200
                    </li>
                    <li className="icon">
                      <GiMoneyStack /> {playerInfo.money}
                    </li>
                    <li className="icon">
                      <GiTreasureMap /> {playerInfo.location}
                    </li>
                  </ul>

                  <ul className="icon">
                    {/* <li>
                      <GiLockedChest /> {">"}
                    </li> */}
                    <li>
                      <GiWoodPile /> {playerInfo.items.wood}
                    </li>
                    <li>
                      <GiMetalBar /> {playerInfo.items.gold}
                    </li>
                    <li>
                      <GiCutDiamond /> {playerInfo.items.diamond}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
