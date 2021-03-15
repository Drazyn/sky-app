import { createContext, ReactNode, useContext, useState } from 'react';
import questionsJson from '../questions.json';

interface QuizzProviderProps /* Essa é a informação INICIAL */ {
    children: ReactNode;
};

interface QuizzContextData { /* Essa é a informação transmitida */
    totalQuestions: number;
    changeTotalQuestions: (number) => void;
    increaseScore: () => void;
    questions: QuestionData[];
    scores: number;
};

interface Answers {
    text: string;
    correct: boolean;
}

interface QuestionData {
    text: string;
    options: Answers[];
    sorted?: boolean;
}

export const QuizzContext = createContext({} as QuizzContextData);

export function QuizzContextProvider({ children }: QuizzProviderProps) {

    const [totalQuestions, setTotalQuestions] = useState(1);

    const [scores, setScores] = useState(0);

    const questions = questionsJson as QuestionData[];

    function changeTotalQuestions(value) {
        setTotalQuestions(value);
    }

    function increaseScore() {
        if (scores < questions.length) {
            setScores(scores + 1);
        }
    }

    return (
        <QuizzContext.Provider
            value={
                {
                    totalQuestions,
                    changeTotalQuestions,
                    questions,
                    scores,
                    increaseScore
                }
            }
        >
            {children}
        </QuizzContext.Provider>
    );
}