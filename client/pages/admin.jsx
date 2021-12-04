import { Destination } from "../components/Admin/Destination";
import { Type } from "../components/Admin/Type";
import { Category } from "../components/Admin/Category";
import { Package } from "../components/Admin/Package";
import styles from "../styles/Admin/Admin.module.scss";

export default function Admin() {
  return (
    <div className={styles.container}>
      <div></div>
      <h1>Admin Panel</h1>
      <div className={styles.grid}>
        <Destination />
        <Type />
        <Category />
      </div>
      <div className={styles.package}>
        <Package />
      </div>
    </div>
  );
}
