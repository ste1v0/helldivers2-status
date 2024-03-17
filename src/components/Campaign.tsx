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
    const [toggleLiberation, setToggleLiberation] = useState(false)

    function handleChooseLiberation() {
        setStatus([])
        setToggleLiberation(true)
    }

    function handleChooseCampaign() {
        setStatus([])
        setToggleLiberation(false)
    }

    useEffect(() => {
        setIsLoading(true)
        const type = toggleLiberation ? 'planet_status' : 'campaigns'
        fetchStatus()
            .then(data => setStatus(data[type]))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [toggleLiberation])

    return (
        <>
        <Stack direction='row' gap={3} pt={'2rem'} sx={{justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Typography onClick={handleChooseCampaign} variant='h5' color={'#E0E0E0'} fontWeight={'400'} sx={{opacity: toggleLiberation ? 0.5 : 1, borderBottom: toggleLiberation ? '1px dashed #E0E0E0' : 'none', cursor: 'pointer'}}>
                Campaigns
            </Typography>
            <Typography onClick={handleChooseLiberation} variant='h5' color={'#E0E0E0'} fontWeight={'400'} sx={{opacity: toggleLiberation ? 1 : 0.5, borderBottom: toggleLiberation ? 'none' : '1px dashed #E0E0E0', cursor: 'pointer'}}>
                Liberation
            </Typography>
        </Stack>
        <Stack direction='row' gap={3} sx={{justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', paddingTop: '2rem'}}>
            {status.length === 0 
                ? <>
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                    <CampaignItem id={null} planetName={null} initialOwner={null} />
                </>
                : toggleLiberation 
                    ? status.filter(e => e.liberation > 0 && e.liberation < 100).sort((a, b) => b.players - a.players).map(e => {
                        return (
                            <CampaignItem key={e.id} id={e.id} liberation={e.liberation} players={e.players} planetName={e.planet.name} initialOwner={e.planet.initial_owner} />
                        )
                    })
                    : status.map(e => {
                        return (
                            <CampaignItem key={e.id} id={e.id} planetName={e.planet.name} initialOwner={e.planet.initial_owner} />
                        )
            })}
        </Stack>
        </>
    )
}

export default Campaign