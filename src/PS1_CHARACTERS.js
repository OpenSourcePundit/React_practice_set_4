import { useState } from "react";
export const PS1_CHARACTERS = ({ hero, villain }) => {
  const [display, setDisplay] = useState([]);
  return (
    <div>
      <button onClick={() => setDisplay(hero)}>HEROES</button>

      <button onClick={() => setDisplay(villain)}>VILLIANS</button>

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
