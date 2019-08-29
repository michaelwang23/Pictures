import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID a5d429405c1b4bd99c2f01454625cb5956fed72e5138e4a93ca1b96acd781346'
  }
})
