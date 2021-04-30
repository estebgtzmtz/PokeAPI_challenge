import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

const service = axios.create({ baseURL })

export const getPokemonsList = async(offset = 0) => {
    return await service.get(`/pokemon?limit=5&offset=${offset}`);
}

export const getPokemonDetails = async(id = 0) => {
    return await service.get(`/pokemon/${id}`)
}

export const getAbilities = async(id = 0) => {
    return await service.get(`/ability/${id}`)
}