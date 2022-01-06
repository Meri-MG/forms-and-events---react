import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qow5arV2TN8lu6940IZ2GDjDEq5MCdiYVJAgrU_6SMA'
  }
})