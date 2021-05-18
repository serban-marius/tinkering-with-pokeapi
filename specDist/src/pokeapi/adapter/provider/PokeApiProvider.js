"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const PokeApiException_1 = __importDefault(require("../../domain/exception/PokeApiException"));
class PokeApiProvider {
    constructor() {
        this.pokeApiV2Url = 'https://pokeapi.co/api/v2/';
    }
    async get(urlConcat, options) {
        try {
            return await axios_1.default.get(this.pokeApiV2Url + urlConcat, options);
        }
        catch (e) {
            throw new PokeApiException_1.default();
        }
    }
    async getSomePokemonByColor(color) {
        return (await this.get('pokemon-color/' + color)).data;
    }
    async getPokemonSpeciesInfo(pokemonResults) {
        return (await this.get('pokemon-species/' + pokemonResults.name)).data;
    }
    async getSomePokemon(limit, offset) {
        const options = {
            params: {
                limit,
                offset,
            },
        };
        return (await this.get('pokemon/', options)).data;
    }
    async getPokemonData(pokemonResults) {
        return (await this.get('pokemon/' + pokemonResults.name)).data;
    }
    async getAllPokemon() {
        return this.getSomePokemon(await this.getAvailablePokemonCount());
    }
    async getAvailablePokemonCount() {
        return (await this.getSomePokemon()).count;
    }
}
exports.default = PokeApiProvider;
//# sourceMappingURL=PokeApiProvider.js.map