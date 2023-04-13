import { useState } from "react";
export const PS3_FRUITS = ({ fruits }) => {
  const [category1, setCategory] = useState("all");

  return (
    <div>
      <button onClick={() => setCategory("all")}>all</button>
      <button onClick={() => setCategory("Fruit")}>fruits</button>
      <button onClick={() => setCategory("Vegetable")}>vegetables</button>
      <ol>
        <h4 style={{ border: "dotted 3px magenta" }}>{category1}</h4>
        {fruits
          .filter(
            ({ id, name, category }) =>
              category1 === "all" || category1 === category
          )
          .map(({ id, name, category }) => {
            return (
              <li
                key={id}
                style={{ color: category === "Fruit" ? "orange" : "green" }}
              >
                {name}
              </li>
            );
          })}
      </ol>
    </div>
  );
};
