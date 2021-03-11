import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';

import styles from '../../styles/pages/quizz/PlayQuizz.module.css';

interface Answers {
    text: string;
    correct: boolean;
}

interface QuestionData {
    text: string;
    options: Answers[];
    sorted?: boolean;
}

function QuizzAnswers() {

}

export default function PlayQuizz() {

    const questionSample = {
        text: "ONE Uma das constelações que estará visível para Você será Órion. Qual é a estrela mais brilhante dessa constelação?",
        options: [
            { text: "Sirius", correct: false },
            { text: "Beteugeulse", correct: false },
            { text: "Bellatrix", correct: false },
            { text: "Rigel", correct: true },
            { text: "Procyon", correct: false },
        ],
    } as QuestionData;

    const questions = [
        {
            text: "Uma das constelações que estará visível para Você será Órion. Qual é a estrela mais brilhante dessa constelação?",
            options: [
                { text: "Sirius", correct: false },
                { text: "Beteugeulse", correct: false },
                { text: "Bellatrix", correct: false },
                { text: "Rigel", correct: true },
                { text: "Procyon", correct: false },
            ],
        },
        {
            text: "Qual dos seguintes objetos messier está na constelação de Hercules?",
            options: [
                { text: "M13", correct: true },
                { text: "M31", correct: false },
                { text: "M42", correct: false },
                { text: "M57", correct: false },
                { text: "M83", correct: false },
            ],
        },
        {
            text: "O que é M57?",
            options: [
                { text: "Um aglomerado globular", correct: false },
                { text: "Uma galáxia espiral", correct: false },
                { text: "Uma nebulosa planetária", correct: true },
                { text: "Um aglomerado aberto", correct: false },
                { text: "Um berçário de estrelas", correct: false },
            ],
        },
        {
            text: "Qual dos seguintes objetos messier NÃO está na constelação Auriga?",
            options: [
                { text: "M35", correct: true },
                { text: "M36", correct: false },
                { text: "M37", correct: false },
                { text: "M38", correct: false },
                { text: "IC 410", correct: false },
            ],
        },
    ] as QuestionData[];

    const [question, setQuestion] = useState<QuestionData>(sortQuestion(questions[0]));
    const [questionId, setQuestionId] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
    const [scores, setScores] = useState<number>(0);

    //const [scores, setScores] = useState<number>(0);

    function sortQuestion(questionInformation) {
        let copy = questionInformation;
        //copy.options.sort(() => Math.random() - 0.5);
        return copy;
    }

    function clearOptions() {

    }

    function handleConfirmButton() {
        if (selectedAnswer == -1) {
            alert("Você não selecionou resposta alguma!");
        } else {

            if (question.options[selectedAnswer].correct)
                setScores((scores + 1));

            alert(`Você escolheu a resposta "${question.options[selectedAnswer].text}"!`);

            if (question.options[selectedAnswer].correct) {
                alert("Você acertou a questão!");
            } else {
                alert("Você errou a questão!");
            }

            clearOptions()
            goNextQuestion();
        }

    }

    function handleNextButton() {
        alert("Você pulou a resposta!");
        clearOptions()
        goNextQuestion();
    }

    function goNextQuestion() {

        if (questions.length == (questionId + 1)) {
            alert(`Você finalizou todas as ${questions.length} questões.`);
            return;
        }

        setQuestion(sortQuestion(questions[questionId + 1]));
        setQuestionId(questionId + 1);
    }

    function handleChange(event) {
        let v = Number(event.target.value);

        //event.target.setChecked(false);

        console.log(event);

        setSelectedAnswer((v - 1));
    }

    let questionNumber = 0;

    return (
        <div className={styles.playQuizzContainer}>

            <div className={styles.pageTitleContainer}>
                <strong>questão {questionId + 1}</strong>
            </div>

            <div className={styles.pageTitleContainer} style={{ background: 'white' }}>
                <strong>Você possui {scores}/{questions.length} pontos!</strong>
            </div>

            <div className={styles.questionContainer}>
                <p>{question.text}</p>
            </div>

            <div className={styles.answersContainer}>
                {question.options.map(value => {
                    questionNumber = questionNumber + 1;
                    return (
                        <div key={`key${questionNumber}`}>
                            <input type="radio" name={`question-${questionId}-answers`} id={`question-${questionId}-answers-${questionNumber}`} value={`${questionNumber}`} onChange={handleChange} />
                            <label htmlFor={`question-${questionId}-answers-${questionNumber}`}>{value.text}</label>
                        </div>
                    );
                })}
            </div>

            <div className={styles.buttonsContainer}>
                <button style={{ background: 'red' }} onClick={handleNextButton}>Pular</button>
                <button style={{ background: 'green' }} onClick={handleConfirmButton}>Confirmar</button>
            </div>
            <img src="/logo-darkmode.png" alt="logo" />
        </div>
    );
}
