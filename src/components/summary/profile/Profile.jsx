import styles from "./Profile.module.css";
import Image from "next/image";
import profile from "../../../assets/profile-site.jpeg";
import { Button } from "../../../components/button/Button";

export const Designation = () => {
  return (
    <div>
      <div className={styles.designation_title}>Frontend Engineer</div>

      <div className={styles.languages_outer_container}>
        <div className={styles.languages_container}>
          <Button
            hasIcon
            icon={
              <div>
                <svg
                  className={`bi bi-asterisk ${styles.asterisk_black}`}
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                </svg>
              </div>
            }
            isRounded
          />
          <Button text="React" backgroundColor="#61DAFB" fontSize="14px" />
        </div>

        <div className={styles.languages_container}>
          <Button text="JavaScript" backgroundColor="#EFD81D" fontSize="14px" />
          <Button text="TypeScript" backgroundColor="#3178C6" fontSize="14px" />
          <Button text="Next" backgroundColor="grey" fontSize="14px" />
          <Button text="Storybook" backgroundColor="#FF4785" fontSize="14px" />
          <Button text="Jest & RTL" backgroundColor="#000000" fontSize="14px" />
          <Button text="API" backgroundColor="#593D88" fontSize="14px" />
        </div>
      </div>
    </div>
  );
};

export const Photo = () => {
  return (
    <div className={styles.profile_container}>
      <Image src={profile} alt="profile" className={styles.profile} />
    </div>
  );
};

export const ShortIntro = () => {
  return (
    <div className={styles.intro_container}>
      <Button
        isTransparent={true}
        hasIcon={true}
        icon={
          <div>
            <svg
              className={`bi bi-asterisk ${styles.asterisk}`}
              fill="currentColor"
              height="30"
              viewBox="0 0 16 16"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg>
          </div>
        }
        isRounded={true}
      />
      <p className={styles.intro_text}>
        My name is Victor, I am a Frontend Engineer based in Nigeria. I'm
        currently building amazing FinTech solutions and products that delights
        the end users{" "}
        <span className={styles.current_company}>@CallPhone Limited</span>
      </p>
      <div className={styles.social_container}>
        <a
          href="https://linkedin.com/in/voa-fe-dev"
          target={"_blank"}
          rel="noopener"
        >
          <Button
            backgroundColor="white"
            hasBorder
            hasIcon
            icon={
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-linkedin ${styles.social_icon}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>
            }
            isRounded
          />
        </a>
        <a href="mailto:victorolorunfemi.py@gmail.com">
          <Button
            backgroundColor="white"
            hasBorder
            hasIcon
            icon={
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-envelope ${styles.social_icon}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
              </div>
            }
            isRounded
          />
        </a>
        <a
          href="https://github.com/clefayomide"
          rel="noopener"
          target={"_blank"}
        >
          <Button
            backgroundColor="white"
            hasBorder
            hasIcon
            icon={
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-github ${styles.social_icon}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
            }
            isRounded
          />
        </a>
      </div>
    </div>
  );
};
