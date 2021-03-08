import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/pages/Home.module.css';

/*export default function Home2() {
	return (
		<div className="homeContainer">
			<div className="menu">
				<a href="#contactUs">Start now</a>
				<a href="#aboutUs">About Us</a>
				<a href="#contactUs">Contact Us</a>
				<a href="#contribute">Contribute</a>
			</div>
			<div id="startNow" className="startNow">
				<img src="/logo.png" alt="logo" />
				<div>
					<p>VocÃª quer reconhecer as estrelas do cÃ©u? Distinguir as constelaÃ§Ãµes? Ou atÃ© mesmo encontrar os objetos de cÃ©u profundo como nebulosas, galÃ¡xias e aglomerados?Treine suas habilidades de reconhecimento de cÃ©u com o Sky App!</p>
					<button type="button">ComeÃ§ar agora</button>
				</div>
			</div>
			<div id="aboutUs" className="aboutUs">
				<h1>Sobre NÃ³s</h1>
				<div>
					<p>Os estudantes Gabriel Lucena e Bernardo Papa desenvolveram o Sky App diante da necessidade de estudar o reconhecimento do cÃ©u estrelado durante o processo de seleÃ§Ã£o para as olimpÃ­adas internacionais de astronomia, astrofÃ­sica e astronÃ¡utica.</p>
					<div>
						<img src="https://i.pinimg.com/originals/71/1e/f7/711ef72cd86faa5e489ce9c908f27721.jpg" alt="Gabriel" />
						<img src="https://i.pinimg.com/originals/df/19/14/df19146777544b82d08e06d3dd102df4.jpg" alt="Bernardo" />
					</div>
				</div>
			</div>
			<div id="contactUs" className="contactUs">
				<h1>Contate-nos</h1>
				<div>
					<div className="network">
						imagem
			<p>texto</p>
					</div>
					<div className="network">
						imagem
			<p>texto</p>
					</div>
				</div>
			</div>
			<div id="contribute" className="contribute">
				<h1>Quer ajudar o projeto?</h1>
				<div>
					<div>
						<p>Texto</p>
						<button></button>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}*/

export default function Home() {
	return (
		<>
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
					<img src="/logo.png" alt="" />
					<div>
						<p>Você quer reconhecer as estrelas do céu? Distinguir as constelações? Ou até mesmo encontrar os objetos de céu profundo como nebulosas, galáxias e aglomerados?Treine suas habilidades de reconhecimento de céu com o Sky App!</p>
						<button>Start Now</button>
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
						<img src="https://www.vhv.rs/dpng/d/464-4644573_github-logo-png-github-transparent-png.png" alt="github" />
					</div>
				</div>
			</div>
		</>
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