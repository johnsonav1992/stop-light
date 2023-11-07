import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const LightHousing = ({children}: Props) => {
    return (
        <div 
            style={{
                borderRadius: '2rem'
                , backgroundColor: 'black'
                , padding: '2rem'
                , display: 'flex'
                , alignItems: 'center'
                , flexDirection: 'column'
                , gap: '.5rem'
            }}
        >
            {children}
        </div>
    )
}
