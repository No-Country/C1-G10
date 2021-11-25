import styles from "../../styles/CustomPackage/PackageNav.module.scss";

export const PackageNav = ({
  destination,
  type,
  category,
  duration,
  member,
  packageDate,
  setter,
  resetState,
}) => {
  // UPDATE THE SPECIFIC STATE
  const updateState = (state) => {
    state();
  };

  return (
    <div>
      <div className={styles.container}>
        <p
          className={destination ? styles.activeP : null}
          onClick={() => updateState(setter.destination)}
        >
          {destination ? destination : "Where ?"}
        </p>
        {<span className={destination ? styles.activeP : null}></span>}

        <p
          className={type ? styles.activeP : null}
          onClick={() => updateState(setter.type)}
        >
          {type ? type : "What kind ?"}
        </p>
        <span className={type ? styles.activeP : null}></span>

        <p
          className={category ? styles.activeP : null}
          onClick={() => updateState(setter.category)}
        >
          {category ? category : "Accomodation ?"}
        </p>
        {<span className={category ? styles.activeP : null}></span>}

        <p
          className={duration ? styles.activeP : null}
          onClick={() => updateState(setter.duration)}
        >
          {duration ? duration : "How long ?"}
        </p>
        {<span className={duration ? styles.activeP : null}></span>}

        <p
          className={member ? styles.activeP : null}
          onClick={() => updateState(setter.member)}
        >
          {member ? member : "With who ?"}
        </p>
        {<span className={member ? styles.activeP : null}></span>}

        <p
          className={packageDate ? styles.activeP : null}
          onClick={() => updateState(setter.packageDate)}
        >
          {packageDate ? packageDate : "When ?"}
        </p>
      </div>
      <p onClick={resetState} className={styles.reset}>
        Reset
      </p>
    </div>
  );
};
