import { createContext, ReactNode, useContext, useState } from 'react';

interface QuizzProviderProps /* Essa é a informação INICIAL */ {
    children: ReactNode;
};

interface QuizzContextData { /* Essa é a informação transmitida */
    totalQuestions: number;
    changeTotalQuestions: (number) => void;
    increaseScore: () => void;
    scores: number;
};

export const QuizzContext = createContext({} as QuizzContextData);

export function QuizzContextProvider({ children }: QuizzProviderProps) {

    const [totalQuestions, setTotalQuestions] = useState(1);

    const [scores, setScores] = useState(0);

    function changeTotalQuestions(value) {
        setTotalQuestions(value);
    }

    function increaseScore() {
        setScores(scores + 1);
    }

    return (
        <QuizzContext.Provider
            value={
                {
                    totalQuestions,
                    changeTotalQuestions,
                    scores,
                    increaseScore
                }
            }
        >
            {children}
        </QuizzContext.Provider>
    );
}