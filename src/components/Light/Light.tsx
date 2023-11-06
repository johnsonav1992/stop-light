import { StopLight } from "../../state/state"

type Props = {
    color: StopLight['color']
    disabled?: boolean;
}

const Light = ({
    color
    , disabled
}: Props) => {
    return (
        <div style={{
            height: '8rem'
            , width: '8rem'
            , borderRadius: '50%'
            , backgroundColor: color
            , opacity: disabled ? 0.5 : 1
            , boxShadow: !disabled ? `0 0 4rem .8rem ${color}` : undefined
        }} />
    )
}

export default Light