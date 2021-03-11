import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/pages/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Início | Sky App</title>
			</Head>

			<div className={styles.menu}>
				<a href="#startNow">Início</a>
				<a href="#contactUs">Sobre nós</a>
				<a href="#contributeWithUs">Contribua</a>
			</div>

			<div id="startNow" className={styles.startNow}>
				<img src="/logo.png" alt="logo" />
				<div>
					<p>Você quer reconhecer as estrelas do céu? Distinguir as constelações? Ou até mesmo encontrar os objetos de céu profundo como nebulosas, galáxias e aglomerados?Treine suas habilidades de reconhecimento de céu com o Sky App!</p>
					<button>
						<Link href="/quizz">Start Now</Link>
					</button>
				</div>
			</div>

			<div id="aboutUs" className={styles.aboutUs}>
				<h1>Sobre nós</h1>
				<div>
					<p>Os estudantes Gabriel Lucena e Bernardo Papa desenvolveram o Sky App diante da necessidade de estudar o reconhecimento do céu estrelado durante o processo de seleção para as olimpíadas internacionais de astronomia, astrofísica e astronáutica.</p>
					<div className={styles.profiles}>
						<img src="https://github.com/drazyn.png" alt="" />
						<img src="https://github.com/BerPapaSeg.png" alt="" />
					</div>
				</div>
			</div>

			<div id="contactUs" className={styles.contactUs}>
				<h1>Contate-nos</h1>
				<div>
					<div className={styles.network}>
						<img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" alt="instagram" />
						<strong>@_skyapp</strong>
					</div>
					<div className={styles.network}>
						<img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png" alt="gmail" />
						<strong>skyapp-contato@gmail</strong>
					</div>
				</div>
			</div>

			<div id="contributeWithUs" className={styles.contributeWithUs}>
				<h1>Quer ajudar o projeto?</h1>
				<div>
					<div>
						<p>
							O Sky App é um projeto de código aberto disponibilizado no github. Você quer contribuir com o projeto? Use o nosso GitHub para contribuir com features ou correções.
						</p>
						<button>
							Ajudar agora!
						</button>
					</div>
					<img src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png" alt="github" />
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	/* Esse código será o back-end do next-js // Não o back-end do projeto!
	Nessa parte usaremos uso dos cookies
	*/
	return {
		props: {

		}
	};
}