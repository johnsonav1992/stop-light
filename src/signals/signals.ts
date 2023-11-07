import { signal } from "@preact/signals-react";

export type StopLightState = {
    color: 'green' | 'yellow' | 'red';
    duration: number;
}

export const currentLightState = signal<StopLightState>({
    color: 'red'
    , duration: 1000
})