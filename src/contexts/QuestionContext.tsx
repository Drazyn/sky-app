import { createContext, ReactNode, useEffect, useState } from "react";
import questionsJson from '../questions.json';
import constellationData from '../constellationData.json';
import starsData from '../starsData.json';
import deepSkyObjectsData from '../deepSkyObjectsData.json';

interface QuestionContextData { /* Informação transmitida */
    questions: QuestionData[];
};

interface QuestionProviderProps {
    children: ReactNode;
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

interface StarData {
    name: string;
    bayerDesignation: string;
    apparentMagnitude: number;
    constellation: string;

    otherAsterisms?: string[];
}

interface DeepSkyObjectData {
    name: string;
    type: string;
    constellation: string;

    otherAsterisms?: string[];
    messierNumber?: number;
    newGeneralCatalogueNumber?: number;
}

interface AsterismData {
    name: string;
    deepSkyObjects: DeepSkyObjectData[];
    stars: StarData[];
}

export const QuestionContext = createContext({} as QuestionContextData);

export function QuestionContextProvider({ children }: QuestionProviderProps) {

    const constellations = constellationData as AsterismData[];
    const stars = starsData as StarData[];
    const deepSkyObjects = deepSkyObjectsData as DeepSkyObjectData[];

    const [questions, setQuestions] = useState<QuestionData[]>(questionsJson);

    const deepSkyObjectsTypeList = [] as string[];

    function getConstellationByName(constellationName: string): AsterismData {
        return constellations.find(element => (element.name == constellationName));
    }

    useEffect(() => { /* Esse é o inicializador, que constrói o array constellations */
        stars.map(star => {
            const constellation = getConstellationByName(star.constellation);

            if (!constellation.stars.find(element => element.name == star.name)) {
                /* Adicionar apenas se não tiver antes */
                constellation.stars.push(star);
            }
        });

        deepSkyObjects.map(deepSkyObject => {
            const constellation = getConstellationByName(deepSkyObject.constellation);
            constellation.deepSkyObjects.push(deepSkyObject);

            if (!constellation.deepSkyObjects.find(element => element.name == deepSkyObject.name)) {
                /* Adicionar apenas se não tiver antes */
                constellation.deepSkyObjects.push(deepSkyObject);
            }

            if (!deepSkyObjectsTypeList.find(item => item == deepSkyObject.type)) {
                deepSkyObjectsTypeList.push(deepSkyObject.type);
            }

        });

        let sample = [] as QuestionData[];

        sample.push(getQuestionFirstTemplateData());
        sample.push(getQuestionSecondTemplateData());
        sample.push(getQuestionThirdTemplateData());
        sample.push(getQuestionFourthTemplateData());

        setQuestions(sample);

    }, []);

    function getDeepSkyObjectIdentification(deepSkyObject: DeepSkyObjectData): string {
        return (deepSkyObject.messierNumber ? `M${deepSkyObject.messierNumber}` : `NGC${deepSkyObject.newGeneralCatalogueNumber}`);
    }

    function getQuestionFirstTemplateData(): QuestionData {
        let possibleConstellations = constellations.filter(item => {
            return (item.stars.length > 0);
        }) as AsterismData[];

        let choosedConstellation = possibleConstellations[Math.floor(Math.random() * possibleConstellations.length)] as AsterismData;

        let choosedStars = choosedConstellation.stars as StarData[];

        let brighestStar = {
            apparentMagnitude: 60
        } as StarData;

        stars.map(star => {
            if (star.apparentMagnitude < brighestStar.apparentMagnitude) {
                brighestStar = star;
            }
        });

        let options = [
            { text: brighestStar.name, correct: true }
        ] as Answers[];

        choosedStars.sort(() => Math.random() - 0.5).map(star => {
            if (options.length < 5 && star.name != brighestStar.name) {
                options.push({ text: star.name, correct: false });
            }
        });

        let question = {
            text: `Uma das constelações que estará visível para Você será ${choosedConstellation.name}. Qual é a estrela mais brilhante dessa constelação?`,
            options,
        } as QuestionData;

        return question;
    }

    function getQuestionSecondTemplateData(): QuestionData {
        let choosedConstellation = constellations[Math.floor(Math.random() * constellations.length)] as AsterismData;

        let choosedDeepSkyObject = choosedConstellation.deepSkyObjects[Math.floor(Math.random() * choosedConstellation.deepSkyObjects.length)];

        let options = [
            { text: getDeepSkyObjectIdentification(choosedDeepSkyObject), correct: true }
        ] as Answers[];

        deepSkyObjects.sort(() => Math.random() - 0.5).map(deepSkyObject => {
            if (options.length < 5 && deepSkyObject.constellation != choosedConstellation.name) {
                options.push({ text: getDeepSkyObjectIdentification(deepSkyObject), correct: false });
            }
        });

        let question = {
            text: `Qual dos seguintes objetos messier está na constelação de ${choosedConstellation.name}?`,
            options,
        } as QuestionData;

        return question;
    }

    function getQuestionThirdTemplateData(): QuestionData {

        let choosedDeepSkyObject = deepSkyObjects[Math.floor(Math.random() * deepSkyObjects.length)];

        let options = [
            { text: choosedDeepSkyObject.type, correct: true }
        ] as Answers[];

        deepSkyObjectsTypeList.sort(() => Math.random() - 0.5).map(item => {
            if (options.length < 5 && item != choosedDeepSkyObject.type) {
                options.push({ text: item, correct: false });
            }
        });

        let question = {
            text: `O que é o objeto de céu profundo ${getDeepSkyObjectIdentification(choosedDeepSkyObject)}`,
            options,
        } as QuestionData;

        return question;
    }

    function getQuestionFourthTemplateData(): QuestionData {

        let possibleConstellations = constellations.filter(item => {
            return (item.deepSkyObjects.length > 0);
        }) as AsterismData[];

        let choosedConstellation = possibleConstellations[Math.floor(Math.random() * possibleConstellations.length)] as AsterismData;

        let otherDeepSkyObjects = deepSkyObjects.filter(deepSkyObject => deepSkyObject.constellation != choosedConstellation.name).sort(() => Math.random() - 0.5);

        let options = [
            { text: getDeepSkyObjectIdentification(otherDeepSkyObjects[0]), correct: true }
        ] as Answers[];

        choosedConstellation.deepSkyObjects.sort(() => Math.random() - 0.5).map(deepSkyObject => {
            if (options.length < 5) {
                options.push({ text: getDeepSkyObjectIdentification(deepSkyObject), correct: false });
            }
        });

        let question = {
            text: `Qual dos seguintes objetos de céu profundo NÃO estão na constelação ${choosedConstellation.name}?`,
            options,
        } as QuestionData;

        return question;
    }

    return (
        <QuestionContext.Provider
            value={
                {
                    questions
                }
            }
        >
            {children}
        </QuestionContext.Provider>
    );
}