import { Typography, Skeleton, Card, CardContent, Box } from '@mui/material'
import { useLoadingContext } from '../context/loading-context'
import { internationalize } from '../utils'

function CampaignItem({ index, planetName, initialOwner, liberation, players } : { index: number, key?: number | null, liberation? : number, players? : number, planetName: string | null, initialOwner: string | null }) {

    const initialOwnerColor = initialOwner === 'Automaton' ? '#DA3941' : initialOwner === 'Humans' ? 'lightblue' : initialOwner === 'Terminids' ? '#B8B711' : 'none'
    const { isLoading } = useLoadingContext()

    return (
        <Card key={index} sx={{ minWidth: 245, background: '#202020', ":hover": { transition: 'all 0.3s', transform: 'scale(1.05)' }, boxShadow: `3px 0px ${initialOwnerColor}`, borderRadius: 0, position: 'relative'}}>
            <CardContent>
                <Typography color={'#9B9B9B'} fontWeight={'200'} sx={{ fontSize: 14 }} gutterBottom>
                    {!isLoading ? 'Planet' : <Skeleton width={'4rem'} />}
                </Typography>
                <Typography variant="h5" color={'#F5F5F5'} fontWeight={'400'} component="div" gutterBottom>
                    {!isLoading ? planetName : <Skeleton width={'12rem'}/>}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color={'#9B9B9B'} fontWeight={'200'} gutterBottom>
                    {!isLoading 
                            ? initialOwner === 'Automaton' 
                                ?  '🤖'
                                : initialOwner === 'Humans'
                                    ? '👤'
                                    : '🐛'
                        : <Skeleton width={'4rem'}/>
                    }
                </Typography>
                    {!isLoading && liberation || liberation === 0
                        ? <>
                            <Typography color={'#FFF'} fontWeight={'200'} sx={{ fontSize: 14, mb: 0.5}}>
                                Liberation: {liberation === 100 || liberation === 0 ? `${Math.ceil(liberation)}%` : `${liberation?.toFixed(2)}%`}
                            </Typography>
                            <Box component='div' sx={{backgroundColor: '#FFF', position: 'relative', width: '100%', height: 20, mb: 2, zIndex: 999}}>
                                <Box component={'div'} sx={{backgroundColor: '#BB86FC', position: 'absolute', width: `${Math.ceil(liberation)}%`, height: '100%'}} />
                            </Box>
                        </>
                        : <Skeleton width={'4rem'} />
                    }
                        <Typography color={'#9B9B9B'} fontWeight={'200'} sx={{ fontSize: 14 }} gutterBottom>
                            {!isLoading && players ? `Players: ${internationalize(players)}` : <Skeleton width={'4rem'} />}
                        </Typography>
            </CardContent>
            <Typography sx={{position: 'absolute', right: '0.8rem', bottom: '0.1rem', fontSize: '2rem', color: 'white', opacity: 0.1}}>{index + 1}</Typography>
        </Card>
    )
}

export default CampaignItem