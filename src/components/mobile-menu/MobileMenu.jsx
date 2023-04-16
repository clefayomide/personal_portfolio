import React from "react";
import styles from "./MobileMenu.module.css";
import { Button } from "../button/Button";
import { useRouter } from "next/router";
import Link from "next/link";

export const MobileMenu = () => {
  const router = useRouter();
  const current_route = router.pathname;
  const data = [
    {
      name: "hm",
      route: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house"
          viewBox="0 0 16 16"
          style={{
            color: `${current_route === "/" ? "white" : "#6B6A99"}`,
          }}
        >
          <path
            fillRule="evenodd"
            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fillRule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
      ),
    },

    {
      name: "pfl",
      route: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-briefcase"
          viewBox="0 0 16 16"
          style={{
            color: `${current_route === "/projects" ? "white" : "#6B6A99"}`,
          }}
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      ),
    },

    {
      name: "cv",
      route:
        "https://docs.google.com/document/d/1_moG8-dROFMRwZkCjKEw1-JilEKmEiDoLU7D76TX84Q/edit",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-files"
          viewBox="0 0 16 16"
          style={{ color: "#6B6A99" }}
        >
          <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
        </svg>
      ),
    },
  ];
  return (
    <div className={styles.menu_container}>
      {data.map(({ name, route, icon }) =>
        name === "cv" ? (
          <a href={route} target="_blank" key={name}>
            <Button
              text={icon}
              width={"35px"}
              height={"35px"}
              backgroundColor={"#F4F3F4"}
              isRounded={true}
              fontSize={"12px"}
            />
          </a>
        ) : (
          <Link href={route} key={name} className={styles.menu_route}>
            <Button
              text={
                current_route === route ? (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                    <div>
                      {current_route === route ? name.toUpperCase() : name}
                    </div>
                  </div>
                ) : (
                  icon
                )
              }
              width={current_route === route ? "75px" : "35px"}
              height={current_route !== route && "35px"}
              backgroundColor={current_route === route ? "#3178C6" : "#F4F3F4"}
              isRounded={current_route !== route && true}
              fontSize={"12px"}
            />
          </Link>
        )
      )}
    </div>
  );
};
