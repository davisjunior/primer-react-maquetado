import { useMediaQuery } from 'react-responsive'

const MD = 768
const SM = 414

export const useIsMobile = () => {
    return useMediaQuery({ query: `(max-width: ${SM}px)` })
}

export const useIsTablet = () => {
    return useMediaQuery({ query: `(max-width: ${MD}px)` })
}