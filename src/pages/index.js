import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "@/components/header/Header";
import { Summary } from "@/components/summary/Summary";
import {
	Designation,
	Photo,
	ShortIntro,
} from "@/components/summary/profile/Profile";

export default function Home() {
	return (
		<>
			<Head>
				<title>Victor Olorunfemi - Fullstack Software Engineer</title>
				<meta
					name="description"
					content="Victor Olorunfemi is a Software Engineer with experience in Fullstack Software Engineering. He is a user centered Fullstack Software Engineer who is comfortable working
with JavaScript, React.js, and other various frontend web technologies to deliver and transform business ideas into an exceptional
scalable, accessible, responsive, and user friendly full stack web application following the Test Driven Development (TDD) and
Component Driven Development (CDD) Methodologies. Victor Olorunfemi is looking to levera Software Engineer with experience in Fullstack Software Engineering. A user centered Fullstack Software Engineer who is comfortable working
with JavaScript, React.js, and other various frontend web technologies to deliver and transform business ideas into an exceptional
scalable, accessible, responsive, and user friendly full stack web application following the Test Driven Development (TDD) and
Component Driven Development (CDD) Methodologies. I am looking to leverage my experience to solve interesting problems that delight end-users"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=yes"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header />

				<Summary
					content_one={<Designation />}
					content_three={<ShortIntro />}
					content_two={<Photo />}
				/>
			</main>
		</>
	);
}
