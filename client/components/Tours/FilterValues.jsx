export const FilterOptions = ({ values }) => {
  return (
    <div>
      {values.map((value, index) => {
        <ul>
          <li>{value}</li>
        </ul>;
      })}
    </div>
  );
};
