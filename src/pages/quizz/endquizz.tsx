import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { QuizzContext } from '../../contexts/QuizzContext';
import styles from '../../styles/pages/quizz/EndQuizz.module.css';

export default function EndQuizz() {

    const { questions, scores } = useContext(QuizzContext);

    /*const [percent, setPercent] = useState(0);

    useEffect(() => {
        setPercent((scores / questions.length) * 100);
    }, [scores, questions]);*/

    return (
        <div className={styles.endQuizzContainer}>
            <div className={styles.pageTitleContainer}>
                <strong>Fim do desafio</strong>
            </div>

            <div className={styles.mainContent}>
                Woow, parabéns, você finalizou o desafio pontuando {scores} de {questions.length}!
            </div>

            <button><Link href="/">Voltar para página principal</Link></button>

            <img className="SkyAppLogo" src="/logo-darkmode.png" alt="logo" />
        </div>
    );
}