import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-nuhcho-4c8999d4a49e.herokuapp.com'
})


export default instance