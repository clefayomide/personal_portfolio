import React from "react";
import Head from "next/head";
import { Header } from "@/components/header/Header";
import { useRouter } from "next/router";
import { Portfolio } from "@/components/portfolio/Portfolio";
import uiconverter from "../../assets/ui-currency-converter.png";
import styles from "../../styles/Portfolio.module.css";

const index = () => {
  const router = useRouter();
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
        <Header current_route={router.pathname} />
        <section className={styles.portfolio_container}>
          <Portfolio
            desc="Airvend web app for vas and utility services"
            stacks="JAVASCRIPT + REACT"
            title="Airvend"
          />
          <Portfolio
            desc="Customisable UI currency converter package library"
            stacks="TYPESCRIPT + REACT"
            title="UI Currency Converter"
          />
          <Portfolio
            desc="eCommerce web app for thrift sellers and buyers"
            stacks="JAVASCRIPT + REACT"
            title="Thrifit"
          />
          <Portfolio
            desc="Spotify clone"
            stacks="TYPESCRIPT + REACT"
            title="Not Spotifffyyy"
          />
        </section>
      </main>
    </>
  );
};

export default index;
