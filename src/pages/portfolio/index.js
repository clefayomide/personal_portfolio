import React from "react";
import Head from "next/head";
import { Header } from "@/components/header/Header";
import { Portfolio } from "@/components/portfolio/Portfolio";
import styles from "../../styles/Portfolio.module.css";

const index = () => {
  return (
    <>
      <Head>
        <title>Victor Olorunfemi - Frontend Engineer:::Portfolio </title>
        <meta
          name="description"
          content="Portfolio page of Victor Olorunfemi, a Frontend Engineer based in Nigeria"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=yes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className={styles.portfolio_container}>
          <Portfolio
            desc="Airvend web app for vas and utility services"
            stacks="JAVASCRIPT + REACT"
            title="Airvend"
            link={"https://test-airvend-web.netlify.app/"}
          />
          <Portfolio
            desc="Customisable UI currency converter package library"
            stacks="TYPESCRIPT + REACT"
            title="UI Currency Converter"
            link={
              "https://www.npmjs.com/package/@clefayomide/ui-currency-converter"
            }
          />
          <Portfolio
            desc="eCommerce web app for thrift sellers and buyers"
            stacks="JAVASCRIPT + REACT"
            title="Thrifit"
            link={"https://dev-thrifit.netlify.app/"}
          />
          <Portfolio
            desc="Spotify clone"
            stacks="TYPESCRIPT + REACT"
            title="Not Spotifffyyy"
            link={"https://not-spotifffyyy.netlify.app/"}
          />
        </section>
      </main>
    </>
  );
};

export default index;
