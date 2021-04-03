import React from "react";
import ItemInfo from "../../components/ItemInfo";

import styles from "./Info.module.css";

const Info = (props) => {
  return (
    <div className={styles.infoContent}>
      <ItemInfo {...props} />
    </div>
  );
};

export default Info;
