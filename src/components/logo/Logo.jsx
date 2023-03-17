import React from "react";
import rocket from "../../assets/rocket.png";
import styles from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Image
        src={rocket}
        alt="rocket"
        width={40}
        height={40}
        className={styles.logo_rocket}
      />
      <div className={styles.text_container}>
        <div>
          VICTOR
          <br />
          OLORUNFEMI
        </div>
      </div>
    </div>
  );
};

export default Logo;
