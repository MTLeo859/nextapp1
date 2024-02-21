import { NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./about.module.css";

const inter = Inter({ subsets: ["latin"] });

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Acerca de</title>
        <meta name="description" content="Información sobre nuestra página web." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Acerca de</h1>
        <p className={styles.description}>
          Bienvenido a nuestra página web. Somos una compañía comprometida en brindar la mejor experiencia para nuestros
          usuarios.
        </p>
        <p className={styles.description}>
          Puedes <Link href="/contacto"><a>contactarnos</a></Link> si tienes alguna pregunta o comentario.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
