import { Box, Typography, Skeleton } from '@mui/material'
import { useLoadingContext } from '../context/loading-context'

function Message({ messageText } : { messageText: string | null }) {
    const { isLoading } = useLoadingContext()
    return (
        <>
            <Box sx={{textAlign: 'center', background: '#202020', p: 2, borderRadius: 2}} >
                <Typography color={'#BB86FC'} fontWeight={'200'}>
                    {isLoading ? <Skeleton /> : messageText}
                </Typography>
            </Box>
        </>
    )
}

export default Message