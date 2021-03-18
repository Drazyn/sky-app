import styles from '../../styles/pages/quizz/QuizzInterface.module.css';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { QuizzContext } from '../../contexts/QuizzContext';
import { QuestionContext } from '../../contexts/QuestionContext';

export default function QuizzInterface() {

    const { totalQuestions, changeTotalQuestions } = useContext(QuizzContext);
    const { questions } = useContext(QuestionContext);

    useEffect(() => {
        changeTotalQuestions(questions.length);
    }, []);

    return (
        <div className={styles.quizzInterfaceContainer}>
            <div className={styles.pageTitleContainer}>
                <strong>Configurações</strong>
            </div>

            <div className={styles.configurationContainer}>
                <div>
                    <strong>Quantidade de questões</strong>
                    <strong>{totalQuestions}</strong>
                </div>
                <div>
                    <strong>Dificuldade</strong>
                    <strong>Barra do Piraí</strong>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <button><Link href="/quizz/play">Continuar</Link></button>
                <button><Link href="/">Retornar</Link></button>
            </div>
            <img className="SkyAppLogo" src="/logo-darkmode.png" alt="logo" />
        </div>
    );
}