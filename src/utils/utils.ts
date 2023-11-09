import { StopLightState } from "../signals/signals";

export const getNextLightColor = (lightColor: StopLightState['color']) => {
    switch(lightColor) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
    }
}

export const getRandomLightDuration = (lightColor: StopLightState['color']) => {
    if (lightColor === 'yellow') return 2000

    return Math.floor(Math.random() * (6 - 4) + 4) * 1000
}