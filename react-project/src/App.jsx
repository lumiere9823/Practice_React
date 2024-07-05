import { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
// import CoreConcepts from "./components/CoreConcepts";
// import Examples from "./components/Examples";
import Player from "./component2/Player";
import GameBoard from "./component2/GameBoard";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X"/>
            <Player initialName="Player 2" symbol="O"/>
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}
// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <CoreConcepts />
//         <Examples />
//       </main>
//     </>
//   );
// }

export default App;
