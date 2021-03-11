import styles from '../../styles/pages/quizz/QuizzInterface.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function QuizzInterface() {
    return (
        <div className={styles.quizzInterfaceContainer}>
            <div className={styles.pageTitleContainer}>
                <strong>Configurações</strong>
            </div>

            <div className={styles.configurationContainer}>
                <div>
                    <strong>Quantidade de questões</strong>
                    <strong>3</strong>
                </div>
                <div>
                    <strong>Dificuldade</strong>
                    <strong>Barra do Piraí</strong>
                </div>
            </div>

            <button><Link href="/quizz/play">Continuar</Link></button>

            <img src="/logo-darkmode.png" alt="logo" />
        </div>
    );
}