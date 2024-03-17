function fetchMessage() {
    return fetch('https://helldivers-2.fly.dev/api/801/feed')
        .then(res => {
            if (!res.ok) {
                throw new Error('Something is wrong with the API')
            }
            return res.json()
        })
        .then(data => {
            return data[data.length - 1].message.en || 'Dispatch message appears to be null'
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}

export default fetchMessage