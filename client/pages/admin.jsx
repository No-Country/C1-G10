import { Destination } from "../components/Admin/Destination";
import { Type } from "../components/Admin/Type";
import { Category } from "../components/Admin/Category";
import { Package } from "../components/Admin/Package/Package";
import styles from "../styles/Admin/Admin.module.scss";

import { getSession } from 'next-auth/client'; //for user authentication (next-auth)

export default function Admin({ user }) {

  if ((user === undefined) || (user.email !== "travellifetouroperator@gmail.com")) {
    return (
      <>
        <p>You are not authorized to access this page.</p>
      </>
    )
  }

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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    // context.res.writeHead(302, { Location: '/' });
    // context.res.end();
    return {
      props: {}
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}

