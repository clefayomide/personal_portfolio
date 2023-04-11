import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Button } from "../button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { MobileMenu } from "../mobile-menu/MobileMenu";

export const Header = () => {
  const router = useRouter();
  const current_route = router.pathname;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo_container}>{<Logo />}</div>

        <ul className={styles.list}>
          <li
            className={styles.list_item}
            style={{
              fontWeight: `${current_route === "/" && "600"}`,
              fontFamily: `${
                current_route === "/" && "var(--comic_neue_bold)"
              }`,
            }}
          >
            <Link href={"/"}>HOME</Link>
          </li>
          <li
            className={styles.list_item}
            style={{
              fontWeight: `${current_route === "/portfolio" && "600"}`,
              fontFamily: `${
                current_route === "/portfolio" && "var(--comic_neue_bold)"
              }`,
            }}
          >
            <Link href={"/portfolio"}>PORTFOLIO</Link>
          </li>
          <li className={styles.list_item}>
            <a
              target={"_blank"}
              href={
                "https://docs.google.com/document/d/1_moG8-dROFMRwZkCjKEw1-JilEKmEiDoLU7D76TX84Q/edit"
              }
            >
              RESUME
            </a>
          </li>
        </ul>

        <div className={styles.button_container}>
          <a href="mailto:victorolorunfemi.py@gmail.com">
            <Button
              hasIcon
              icon={
                <>
                  <svg
                    className="bi bi-box-arrow-in-up-right"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                      fillRule="evenodd"
                    />
                  </svg>
                </>
              }
              text="Hire!"
            />
          </a>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};
