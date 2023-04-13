import { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

export const PS1_CHARACTERS = ({ hero, villain }) => {
  const [display, setDisplay] = useState([]);
  return (
    <div>
      <Tabs value={display[3]} textColor="primary" indicatorColor="primary">
        <Tab />
        <button onClick={() => setDisplay(hero)}>HEROES</button>
        <Tab />
        <button onClick={() => setDisplay(villain)}>VILLIANS</button>
      </Tabs>
      <ol>
        {display.map(({ name, powers, costume }) => {
          return (
            <li style={{ border: "dotted 4px blue", margin: "2px" }}>
              <p>{name}</p>
              <p>{powers}</p>
              <p>{costume}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
