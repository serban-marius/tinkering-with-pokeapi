import IPokemonBasicInfo from '../entity/IPokemonBasicInfo';
import IPokemonFindByNameResponse from '../entity/IPokemonFindByNameResponse';
import IPokemonResponse from '../entity/IPokemonResponse';
import IPokemonResult from '../entity/IPokemonResult';
import IPokemonSpeciesInfo from '../entity/IPokemonSpeciesInfo';
import IPokemonSpeciesResult from '../entity/IPokemonSpeciesResult';
import { Injectable } from '@nestjs/common';
import PokeApiProvider from '../../adapter/provider/PokeApiProvider';

@Injectable()
class PokeApiService {
  public constructor(private readonly pokeApiProvider: PokeApiProvider) {}

  public async getAllPokemon(): Promise<IPokemonResponse> {
    return this.pokeApiProvider.getAllPokemon();
  }

  public async getSomePokemonByColor(color: string): Promise<IPokemonSpeciesResult[]> {
    return (await this.pokeApiProvider.getSomePokemonByColor(color)).pokemon_species;
  }

  public async getPokemonSpeciesInfoArrayFromPokemonSpeciesResultArray(
    pokemonSpeciesResults: IPokemonSpeciesResult[],
  ): Promise<IPokemonSpeciesInfo[]> {
    const speciesInfo: IPokemonSpeciesInfo[] = [];
    for (const pokemonSpeciesResult of pokemonSpeciesResults) {
      speciesInfo.push(await this.getPokemonSpeciesInfoFromPokemonSpeciesResult(pokemonSpeciesResult));
    }
    return speciesInfo;
  }

  public async getPokemonSpeciesInfoFromPokemonSpeciesResult(
    pokemonResult: IPokemonSpeciesResult,
  ): Promise<IPokemonSpeciesInfo> {
    return this.pokeApiProvider.getPokemonSpeciesData(pokemonResult);
  }

  public async getPokemonBasicInfoArrayFromPokemonSpeciesInfoArray(
    pokemonSpeciesInfo: IPokemonSpeciesInfo[],
  ): Promise<IPokemonBasicInfo[]> {
    const pokemonBasicInfo: IPokemonBasicInfo[] = [];
    for (const pokemonSpecieInfo of pokemonSpeciesInfo) {
      for (const pokemonVariety of pokemonSpecieInfo.varieties) {
        pokemonBasicInfo.push(await this.getPokemonBasicInfoByPokemonResult(pokemonVariety.pokemon));
      }
    }
    return pokemonBasicInfo;
  }

  public async getPokemonByName(name: string): Promise<IPokemonResult[]> {
    const pokemons = (await this.getAllPokemon()).results;
    return pokemons.filter((value) => {
      return value.name.indexOf(name) !== -1;
    });
  }

  public async getPokemonFindByNameResponseFromPokemonResult(
    pokemonResults: IPokemonResult[],
  ): Promise<IPokemonFindByNameResponse> {
    const results: IPokemonBasicInfo[] = [];
    for (const pokemonResult of pokemonResults) {
      results.push(await this.getPokemonBasicInfoByPokemonResult(pokemonResult));
    }
    return {
      count: results.length,
      results,
    };
  }

  public async getPokemonBasicInfoByPokemonResult(pokemonResult: IPokemonResult): Promise<IPokemonBasicInfo> {
    const pokemonInfo = await this.pokeApiProvider.getPokemonData(pokemonResult);
    return {
      baseExperience: pokemonInfo.base_experience,
      height: pokemonInfo.height,
      name: pokemonResult.name,
      weight: pokemonInfo.base_experience,
    };
  }

  public async getCsvResponseFromPokemonBasicInfo(
    pokemonResults: IPokemonBasicInfo[],
  ): Promise<IPokemonFindByNameResponse> {
    return {
      count: pokemonResults.length,
      results: pokemonResults,
    };
  }
}

export default PokeApiService;
