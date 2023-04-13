import "./styles.css";

import { characters } from "./objects";
import { PS1_CHARACTERS } from "./PS1_CHARACTERS";
import { PS2_WELCOME } from "./PS2_WELCOME";

export default function App() {
  return (
    <div className="App">
      <h1>Shashank's box</h1>
      <PS1_CHARACTERS hero={characters.heroes} villain={characters.villains} />
      <PS2_WELCOME />
    </div>
  );
}
