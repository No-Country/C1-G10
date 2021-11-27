export const Trips = ({ setPosition, map, setDestination }) => {
  const goTo = (e, lat, lng) => {
    setPosition([lat, lng]);
    map.flyTo([lat, lng], 11);
    setDestination(e.target.id);
  };

  return (
    <div>
      <p
        id="Hawai"
        onClick={(e) => {
          goTo(e, 19.8968, -155.5828);
        }}
      >
        Hawai
      </p>
      <p id="Cancun" onClick={(e) => goTo(e, 21.1619, -86.8515)}>
        Cancun
      </p>
    </div>
  );
};
