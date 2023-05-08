import React from "react";
import styles from "./UserPage.module.scss";

import { useAuthValue } from "src/components/context/Auth/Context";

import { auth } from "src/firebase";
import Button from "../Button";
import { ButtonType } from "src/utils";
import { Link, useNavigate } from "react-router-dom";
import { RoutesList} from "src/pages/Router";
import classNames from "classnames";

const UserPage = () => {
    // @ts-ignore
  const { currentUser } = useAuthValue();

  return (
    <div className={styles.center}>
      <div className={styles.profile}>
        <h1 className={styles.profile_header}>Your Profile</h1>
        <p className={styles.profile_text}>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p className={styles.profile_text}>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>

        <Link
          to={RoutesList.Home}
          className={classNames(styles.profile_button, {})}
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default UserPage;