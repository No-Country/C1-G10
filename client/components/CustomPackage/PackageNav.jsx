import styles from "../../styles/CustomPackage/PackageNav.module.scss";

export const PackageNav = ({
  destination,
  type,
  category,
  duration,
  member,
  packageDate,
  setter,
}) => {
  const updateState = (state) => {
    state();
  };
  return (
    <div className={styles.container}>
      {destination && (
        <p onClick={() => updateState(setter.destination)}>{destination}</p>
      )}
      {destination && <span></span>}
      {destination && type && (
        <p onClick={() => updateState(setter.type)}>{type}</p>
      )}
      {type && <span></span>}
      {destination && type && category && (
        <p onClick={() => updateState(setter.category)}>{category}</p>
      )}
      {category && <span></span>}
      {destination && type && category && duration && (
        <p onClick={() => updateState(setter.duration)}>{duration}</p>
      )}
      {duration && <span></span>}
      {destination && type && category && duration && member && (
        <p onClick={() => updateState(setter.member)}>{member}</p>
      )}
      {member && <span></span>}
      {destination && type && category && duration && member && packageDate && (
        <p onClick={() => updateState(setter.packageDate)}>{packageDate}</p>
      )}
    </div>
  );
};
