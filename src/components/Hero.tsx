import { Stack } from '@mui/material'

function Hero({children} : ({children : React.ReactNode})) {
    return (
        <Stack spacing={2} sx={{justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            {children}
        </Stack>
    )
}

export default Hero