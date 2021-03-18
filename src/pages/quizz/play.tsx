import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { QuizzContext } from '../../contexts/QuizzContext';
import { useRouter } from 'next/router';

import styles from '../../styles/pages/quizz/PlayQuizz.module.css';
import { QuestionContext } from '../../contexts/QuestionContext';

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

    const router = useRouter();

    const { increaseScore } = useContext(QuizzContext);
    const { questions } = useContext(QuestionContext);

    const [question, setQuestion] = useState<QuestionData>(sortQuestion(questions[0]));
    const [questionId, setQuestionId] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);

    function sortQuestion(questionInformation) {
        let copy = questionInformation;
        //copy.options.sort(() => Math.random() - 0.5);
        return copy;
    }

    function handleConfirmButton(event) {
        event.preventDefault();

        if (selectedAnswer == -1) {
            //alert("Você não selecionou resposta alguma!");
        } else {

            if (question.options[selectedAnswer].correct) {
                increaseScore();
            }

            //alert(`Você escolheu a resposta "${question.options[selectedAnswer].text}"!`);

            if (question.options[selectedAnswer].correct) {
                //alert("Você acertou a questão!");
            } else {
                //alert("Você errou a questão!");
            }

            event.target.reset();
            goNextQuestion();
        }

    }

    function handleNextButton(event) {
        //alert("Você pulou a resposta!");
        //event.target.reset();
        goNextQuestion();
    }

    function goNextQuestion() {

        if (questions.length == (questionId + 1)) {
            //alert(`Você finalizou todas as ${questions.length} questões.`);
            router.push("/quizz/endquizz");
            return;
        }

        setQuestion(sortQuestion(questions[questionId + 1]));
        setQuestionId(questionId + 1);
    }

    function handleChange(event) {
        let v = Number(event.target.value);

        //event.target.setChecked(false);
        //event.target.checked = false;
        //console.log(event);

        setSelectedAnswer((v - 1));
    }

    let questionNumber = 0;

    return (
        <div className={styles.playQuizzContainer}>

            <div className={styles.pageTitleContainer}>
                <strong>Questão {questionId + 1}</strong>
            </div>

            <div className={styles.questionContainer}>
                <p>{question.text}</p>
            </div>
            <form onSubmit={handleConfirmButton}>
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
                    <input type="reset" value="Pular" style={{ background: 'red' }} onClick={handleNextButton} />
                    <input type="submit" value="Confirmar" style={{ background: 'green' }} />
                </div>
            </form>

            <img className="SkyAppLogo" src="/logo-darkmode.png" alt="logo" />
        </div>
    );
}
