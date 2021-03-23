import { createContext, ReactNode, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

interface PlanetaryProviderProps {
    children: ReactNode;
};

interface PlanetaryContextData {

};

interface ObservadorData {
    latitude: number;
    longitude: number;
    sideralTime: number;
}


export const PlanetaryContext = createContext({} as PlanetaryContextData);

export function PlanetaryContextProvider({ children }: PlanetaryProviderProps) {

    const { constellations, stars, deepSkyObjects } = useContext(QuestionContext);

    function getVisibleStars(observador: ObservadorData) {
        let visibleStars = stars.filter(star => {
            let H = observador.sideralTime - star.rightAscension;
            let z = Math.acos(Math.sin(observador.latitude) * Math.sin(star.declination) + Math.cos(observador.latitude) * Math.cos(star.declination) * Math.cos(H));

            return (2 * z <= Math.acos(-1));
        });
        return visibleStars;
    }

    function getVisibleDeepSkyObjects(observador: ObservadorData) {
        let visibleDeepSkyObjects = deepSkyObjects.filter(deepSkyObject => {
            let H = observador.sideralTime - deepSkyObject.rightAscension;
            let z = Math.acos(Math.sin(observador.latitude) * Math.sin(deepSkyObject.declination) + Math.cos(observador.latitude) * Math.cos(deepSkyObject.declination) * Math.cos(H));

            return (2 * z <= Math.acos(-1));
        });
        return visibleDeepSkyObjects;
    }

    return (
        <PlanetaryContext.Provider
            value={
                {

                }
            }
        >
            {children}
        </PlanetaryContext.Provider>
    );
}