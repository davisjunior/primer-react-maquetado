import { useMediaQuery } from 'react-responsive'

const LG = 1100
const MD = 768
const SM = 414

export const useIsMobile = () => {
    return useMediaQuery({ query: `(max-width: ${SM}px)` })
}

export const useIsTablet = () => {
    return useMediaQuery({ query: `(max-width: ${MD}px)` })
}

export const useIsLarge = () => {
    return useMediaQuery({ query: `(max-width: ${LG}px)` })
}