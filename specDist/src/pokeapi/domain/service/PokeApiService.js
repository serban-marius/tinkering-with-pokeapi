"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const PokeApiProvider_1 = __importDefault(require("../../adapter/provider/PokeApiProvider"));
let PokeApiService = class PokeApiService {
    constructor(pokeApiProvider) {
        this.pokeApiProvider = pokeApiProvider;
    }
    async getAllPokemon() {
        return this.pokeApiProvider.getAllPokemon();
    }
    async getAllPokemonOfColorBasicInfo(color) {
        const pokemonSpecies = await this.getAllPokemonByColor(color);
        const pokemonSpeciesInfo = await this.pokemonSpeciesResultArrayToPokemonSpeciesInfoArrayTransformer(pokemonSpecies);
        return this.pokemonSpeciesInfoArrayToPokemonBasicInfoArrayTransformer(pokemonSpeciesInfo);
    }
    async getAllPokemonByColor(color) {
        return (await this.pokeApiProvider.getSomePokemonByColor(color)).pokemon_species;
    }
    async pokemonSpeciesResultArrayToPokemonSpeciesInfoArrayTransformer(pokemonSpeciesResults) {
        const speciesInfo = [];
        for (const pokemonSpeciesResult of pokemonSpeciesResults) {
            speciesInfo.push(await this.pokemonSpeciesResultToPokemonSpeciesInfoTransformer(pokemonSpeciesResult));
        }
        return speciesInfo;
    }
    async pokemonSpeciesResultToPokemonSpeciesInfoTransformer(pokemonResult) {
        return this.pokeApiProvider.getPokemonSpeciesInfo(pokemonResult);
    }
    async pokemonSpeciesInfoArrayToPokemonBasicInfoArrayTransformer(pokemonSpeciesInfo) {
        const pokemonBasicInfo = [];
        for (const pokemonSpecieInfo of pokemonSpeciesInfo) {
            for (const pokemonVariety of pokemonSpecieInfo.varieties) {
                pokemonBasicInfo.push(await this.pokemonResultToPokemonBasicInfoTransformer(pokemonVariety.pokemon));
            }
        }
        return pokemonBasicInfo;
    }
    async getAllPokemonByName(name) {
        const pokemons = (await this.getAllPokemon()).results;
        return pokemons.filter((value) => {
            return value.name.indexOf(name) !== -1;
        });
    }
    async getPokemonFindByNameResponseFromPokemonResultArray(pokemonResults) {
        const results = [];
        for (const pokemonResult of pokemonResults) {
            results.push(await this.pokemonResultToPokemonBasicInfoTransformer(pokemonResult));
        }
        return {
            count: results.length,
            results,
        };
    }
    async pokemonResultToPokemonBasicInfoTransformer(pokemonResult) {
        const pokemonInfo = await this.pokeApiProvider.getPokemonData(pokemonResult);
        return {
            baseExperience: pokemonInfo.base_experience,
            height: pokemonInfo.height,
            name: pokemonResult.name,
            weight: pokemonInfo.base_experience,
        };
    }
    sortPokemonBasicInfoByBaseExperience(pokemonBasicInfo) {
        return pokemonBasicInfo.sort((a, b) => (a.baseExperience > b.baseExperience ? 1 : -1));
    }
};
PokeApiService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [PokeApiProvider_1.default])
], PokeApiService);
exports.default = PokeApiService;
//# sourceMappingURL=PokeApiService.js.map