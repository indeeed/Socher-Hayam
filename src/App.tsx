import { useEffect, useState } from "react";
import { remult } from "remult";
import { Player } from "./shared/Player";

const PlayerRepo = remult.repo(Player);

export default function App() {
  const [player, setPlayer] = useState<Player[]>([]);

  useEffect(() => {
    PlayerRepo.find().then(setPlayer);
  }, []);
  return (
    <div className="player-info">
      <h1>player</h1>
      <main>
        {player.map((playerInfo) => {
          return (
            <div key={playerInfo.id}>
              <h2>{playerInfo.name}</h2>
              <p>money: {playerInfo.money}</p>
              <p>location: {playerInfo.location}</p>
              <h3>items:</h3>
              <ul>
                <li>copper: {playerInfo.items.copper}</li>
                <li>silver: {playerInfo.items.silver}</li>
                <li>gold: {playerInfo.items.gold}</li>
              </ul>
            </div>
          );
        })}
      </main>
    </div>
  );
}
