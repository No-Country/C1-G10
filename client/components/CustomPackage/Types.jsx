import { useState, useEffect } from "react";
import { Cards } from "./Cards";

export const Types = ({ setType }) => {
  const [types, setTypes] = useState([]);

  // GET FROM API
  useEffect(() => {
    setTypes(["Family", "Relax", "Active", "Nature", "Highlights"]);
  }, []);

  const getType = (e) => {
    setType(e.target.id);
  };

  return (
    <div>
      {types.map((type, i) => {
        return <Cards key={i} text={type} click={getType} />;
      })}
    </div>
  );
};
