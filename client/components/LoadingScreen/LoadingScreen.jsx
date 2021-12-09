import Spinner from "../Styled/Spinner";
import styles from "../../styles/LoadingScreen/loadingScreen.module.scss";

export const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};
