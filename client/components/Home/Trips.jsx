export const Trips = ({ setPosition, map }) => {
  const goTo = (lat, lng) => {
    setPosition([lat, lng]);
    map.flyTo([lat, lng], 11);
  };

  return (
    <div>
      <p
        onClick={() => {
          goTo(19.8968, -155.5828);
        }}
      >
        Hawai
      </p>
      <p onClick={() => goTo(21.1619, -86.8515)}>Cancun</p>
    </div>
  );
};
