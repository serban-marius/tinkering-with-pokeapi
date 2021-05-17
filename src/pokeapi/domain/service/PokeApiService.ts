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

  public async getAllPokemonOfColorBasicInfo(color: string): Promise<IPokemonBasicInfo[]> {
    const pokemonSpecies = await this.getAllPokemonByColor(color);
    const pokemonSpeciesInfo = await this.pokemonSpeciesResultArrayToPokemonSpeciesInfoArrayTransformer(pokemonSpecies);
    return this.pokemonSpeciesInfoArrayToPokemonBasicInfoArrayTransformer(pokemonSpeciesInfo);
  }

  public async getAllPokemonByColor(color: string): Promise<IPokemonSpeciesResult[]> {
    return (await this.pokeApiProvider.getSomePokemonByColor(color)).pokemon_species;
  }

  public async pokemonSpeciesResultArrayToPokemonSpeciesInfoArrayTransformer(
    pokemonSpeciesResults: IPokemonSpeciesResult[],
  ): Promise<IPokemonSpeciesInfo[]> {
    const speciesInfo: IPokemonSpeciesInfo[] = [];
    for (const pokemonSpeciesResult of pokemonSpeciesResults) {
      speciesInfo.push(await this.pokemonSpeciesResultToPokemonSpeciesInfoTransformer(pokemonSpeciesResult));
    }
    return speciesInfo;
  }

  public async pokemonSpeciesResultToPokemonSpeciesInfoTransformer(
    pokemonResult: IPokemonSpeciesResult,
  ): Promise<IPokemonSpeciesInfo> {
    return this.pokeApiProvider.getPokemonSpeciesInfo(pokemonResult);
  }

  public async pokemonSpeciesInfoArrayToPokemonBasicInfoArrayTransformer(
    pokemonSpeciesInfo: IPokemonSpeciesInfo[],
  ): Promise<IPokemonBasicInfo[]> {
    const pokemonBasicInfo: IPokemonBasicInfo[] = [];
    for (const pokemonSpecieInfo of pokemonSpeciesInfo) {
      for (const pokemonVariety of pokemonSpecieInfo.varieties) {
        pokemonBasicInfo.push(await this.pokemonResultToPokemonBasicInfoTransformer(pokemonVariety.pokemon));
      }
    }
    return pokemonBasicInfo;
  }

  public async getAllPokemonByName(name: string): Promise<IPokemonResult[]> {
    const pokemons = (await this.getAllPokemon()).results;
    return pokemons.filter((value) => {
      return value.name.indexOf(name) !== -1;
    });
  }

  public async getPokemonFindByNameResponseFromPokemonResultArray(
    pokemonResults: IPokemonResult[],
  ): Promise<IPokemonFindByNameResponse> {
    const results: IPokemonBasicInfo[] = [];
    for (const pokemonResult of pokemonResults) {
      results.push(await this.pokemonResultToPokemonBasicInfoTransformer(pokemonResult));
    }
    return {
      count: results.length,
      results,
    };
  }

  public async pokemonResultToPokemonBasicInfoTransformer(pokemonResult: IPokemonResult): Promise<IPokemonBasicInfo> {
    const pokemonInfo = await this.pokeApiProvider.getPokemonData(pokemonResult);
    return {
      baseExperience: pokemonInfo.base_experience,
      height: pokemonInfo.height,
      name: pokemonResult.name,
      weight: pokemonInfo.base_experience,
    };
  }

  public sortPokemonBasicInfoByBaseExperience(pokemonBasicInfo: IPokemonBasicInfo[]): IPokemonBasicInfo[] {
    return pokemonBasicInfo.sort((a, b) => (a.baseExperience > b.baseExperience ? 1 : -1));
  }
}

export default PokeApiService;
