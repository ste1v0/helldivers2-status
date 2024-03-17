import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Header from '../components/Header'
import Message from '../components/Message'
import Hero from '../components/Hero'
import Campaign from '../components/Campaign'
import fetchMessage from '../api/fetchMessage'
import { useLoadingContext } from '../context/loading-context'

function App() {

	const [ message, setMessage ] = useState<string | null>(null)
	const { setIsLoading } = useLoadingContext()

	useEffect(() => {
		setIsLoading(true)
		fetchMessage()
			.then(data => setMessage(data))
			.catch(error => console.log(error))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			<Container maxWidth='md' sx={{margin: '2rem auto'}}>
				<Header>
					<Message messageText={message} />
				</Header>
				<Hero>
					<Campaign />
				</Hero>
			</Container>
		</>
  )
}

export default App
