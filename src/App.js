import "./styles.css";

import { characters, itemList } from "./objects";
import { PS1_CHARACTERS } from "./PS1_CHARACTERS";
import { PS2_WELCOME } from "./PS2_WELCOME";
import { PS3_FRUITS } from "./PS3_FRUITS";

export default function App() {
  return (
    <div className="App">
      <h1>Shashank's box</h1>
      <PS1_CHARACTERS hero={characters.heroes} villain={characters.villains} />
      <PS2_WELCOME />
      <PS3_FRUITS fruits={itemList} />
    </div>
  );
}
