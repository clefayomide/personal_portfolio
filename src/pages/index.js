import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "@/components/header/Header";
import { useRouter } from "next/router";
import { Summary } from "@/components/summary/Summary";
import {
  Designation,
  Photo,
  ShortIntro,
} from "@/components/summary/profile/Profile";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Victor Olorunfemi - Frontend Engineer</title>
        <meta
          name="description"
          content="Victor Olorunfemi is a Software Engineer with experience in Frontend Engineering. He is a user centered Frontend Engineer who is comfortable working
with JavaScript, React.js, and other various frontend web technologies to deliver and transform business ideas into an exceptional
scalable, accessible, responsive, and user friendly full stack web application following the Test Driven Development (TDD) and
Component Driven Development (CDD) Methodologies. Victor Olorunfemi is looking to levera Software Engineer with experience in Frontend Engineering. A user centered frontend Engineer who is comfortable working
with JavaScript, React.js, and other various frontend web technologies to deliver and transform business ideas into an exceptional
scalable, accessible, responsive, and user friendly full stack web application following the Test Driven Development (TDD) and
Component Driven Development (CDD) Methodologies. I am looking to leverage my experience to solve interesting problems that
delight end-usersge is experience to solve interesting problems that
delight end-users"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=yes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header current_route={router.pathname} />

        <Summary
          content_one={<Designation />}
          content_three={<ShortIntro />}
          content_two={<Photo />}
        />
      </main>
    </>
  );
}
