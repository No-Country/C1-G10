import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";

export const Destinations = ({ setDestination, setPrice }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // GET DESTINATIONS FROM API
    setDestinations([
      { destination: "Cancun", price: 50 },
      { destination: "Hawai", price: 65 },
      { destination: "Peru", price: 30 },
      { destination: "Brasil", price: 37 },
      { destination: "Pakistan", price: 25 },
      { destination: "USA", price: 40 },
    ]);
  }, []);

  const getDestination = (e) => {
    setDestination(e.target.id);
    setPrice(e.target.getAttribute("data--price"));
  };

  return (
    <div>
      {destinations.map((destination, i) => {
        return (
          <Cards
            key={i}
            price={destination.price}
            text={destination.destination}
            click={getDestination}
          />
        );
      })}
    </div>
  );
};
