import { signal } from "@preact/signals-react";

export type StopLight = {
    color: 'green' | 'yellow' | 'red';
    duration: number;
}

export const currentLight = signal<StopLight>({
    color: 'red'
    , duration: 1000
})