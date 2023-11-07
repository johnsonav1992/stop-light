
// Components
import { LightHousing } from '../LightHousing/LightHousing'
import { Light } from '../Light/Light'
import { LightPole } from '../LightPole/LightPole'

// Signals
import { 
    StopLightState
    , currentLightState
 } from '../../signals/signals'
import { effect } from '@preact/signals-react'

export const StopLight = () => {
    const lightColors: StopLightState['color'][] = ['red', 'yellow', 'green'];
    const isDisabled = (color: StopLightState['color']) => currentLightState.value.color !== color

    effect(() => {
        const i = setInterval(() => {
            const randomColorIndex = Math.floor(Math.random() * lightColors.length)
            currentLightState.value = { color: lightColors[randomColorIndex], duration: 2000}
        }, currentLightState.value.duration)

        return () => {
            clearInterval(i)
        }
    })
    
    return (
        <>
            <LightHousing>
                {
                    lightColors.map(lightColor => (
                        <Light 
                            key={lightColor} 
                            color={lightColor} 
                            disabled={isDisabled(lightColor)}
                        />
                    ))
                }
            </LightHousing>
            <LightPole />
        </>
    )
}
