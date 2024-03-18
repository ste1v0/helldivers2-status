import { Stack, Typography } from '@mui/material'
import fetchStatus from '../api/fetchStatus'
import { useEffect, useState } from 'react'
import { useLoadingContext } from '../context/loading-context'
import CampaignItem from './Campaign-Item'

type StatusType = {
    id: number,
    liberation: number,
    players: number,
    planet: {
        name: string,
        initial_owner: string
    }
}

function Campaign() {
    const { setIsLoading } = useLoadingContext()
    const [status, setStatus] = useState<StatusType[]>([])

    useEffect(() => {
        setIsLoading(true)
        fetchStatus()
            .then(data => setStatus(data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
        <Stack direction='row' gap={5} pt={'2rem'} sx={{justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Typography variant='h5' color={'#E0E0E0'} fontWeight={'400'}>
                Activity
            </Typography>
        </Stack>
        <Stack direction='row' gap={5} sx={{justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', paddingTop: '2rem'}}>
            {status.length === 0 
                ? <>
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                </>
                : status.filter(e => e.players > 0).sort((a, b) => b.players - a.players).map(e => {
                        return (
                            <CampaignItem key={e.id} id={e.id} liberation={e.liberation} players={e.players} planetName={e.planet.name} initialOwner={e.planet.initial_owner} />
                        )
                    })
            }
        </Stack>
        </>
    )
}

export default Campaign