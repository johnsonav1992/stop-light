// Libraries
import { effect } from '@preact/signals-react'

// Components
import { LightHousing } from '../LightHousing/LightHousing'
import { Light } from '../Light/Light'
import { LightPole } from '../LightPole/LightPole'

// Signals
import { 
    StopLightState
    , currentLightState
} from '../../signals/signals'

// Utils
import { getNextLightColor, getRandomLightDuration } from '../../utils/utils'

effect(() => {
    const timeoutId = setTimeout(() => {
        const nextLightColor = getNextLightColor(currentLightState.value.color)
        const nextLightDuration = getRandomLightDuration(nextLightColor)

        currentLightState.value = { 
            color: nextLightColor
            , duration: nextLightDuration
        }
    }, currentLightState.value.duration)

    return () => clearTimeout(timeoutId)
})

export const StopLight = () => {
    const lightColors: StopLightState['color'][] = ['red', 'yellow', 'green'];
    const isDisabled = (color: StopLightState['color']) => currentLightState.value.color !== color
    
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
