function fetchStatus() {
    return fetch('https://helldivers-2.fly.dev/api/801/status')
        .then(res => {
            if (!res.ok) {
                throw new Error('Something is wrong with the API')
            }
            return res.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}

export default fetchStatus