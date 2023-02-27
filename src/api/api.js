import axios from 'axios';

export let api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})