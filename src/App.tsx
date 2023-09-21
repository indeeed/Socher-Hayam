import { useEffect, useState } from "react";
import { remult } from "remult";
import { Player } from "./shared/Player";
import NavbarTop from "./components/NavbarTop";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { GiCargoShip } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";
import { GiBlackBar } from "react-icons/gi";
import { GiWoodPile } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";

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
                  <p>
                    <GiCargoShip className="icon" />
                  </p>
                  <p>
                    <GiMoneyStack className="icon" />
                    {playerInfo.money}
                  </p>
                  <p>
                    <GiTreasureMap className="icon" /> {playerInfo.location}
                  </p>
                  <h3>items:</h3>
                  <ul>
                    <li>
                      <GiWoodPile className="icon" />
                      {playerInfo.items.wood}
                    </li>
                    <li>
                      <GiBlackBar className="icon" /> {playerInfo.items.gold}
                    </li>
                    <li>
                      <GiCutDiamond className="icon" />
                      {playerInfo.items.diamond}
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
