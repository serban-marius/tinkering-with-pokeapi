import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import IPokemonColorResponse from '../../domain/entity/IPokemonColorResponse';
import IPokemonInfo from '../../domain/entity/IPokemonInfo';
import IPokemonResponse from '../../domain/entity/IPokemonResponse';
import IPokemonResult from '../../domain/entity/IPokemonResult';
import IPokemonSpeciesInfo from '../../domain/entity/IPokemonSpeciesInfo';

class PokeApiProvider {
  private readonly pokeApiV2Url = 'https://pokeapi.co/api/v2/';

  public async get(urlConcat?: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(this.pokeApiV2Url + urlConcat, options);
  }

  public async getSomePokemonByColor(color: string): Promise<IPokemonColorResponse> {
    return (await this.get('pokemon-color/' + color)).data;
  }

  public async getPokemonSpeciesInfo(pokemonResults: IPokemonResult): Promise<IPokemonSpeciesInfo> {
    return (await this.get('pokemon-species/' + pokemonResults.name)).data;
  }

  public async getSomePokemon(limit?: number, offset?: number): Promise<IPokemonResponse> {
    const options = {
      params: {
        limit,
        offset,
      },
    };
    return (await this.get('pokemon/', options)).data;
  }

  public async getPokemonData(pokemonResults: IPokemonResult): Promise<IPokemonInfo> {
    return (await this.get('pokemon/' + pokemonResults.name)).data;
  }

  public async getAllPokemon(): Promise<IPokemonResponse> {
    return this.getSomePokemon(await this.getAvailablePokemonCount());
  }

  public async getAvailablePokemonCount(): Promise<number> {
    return (await this.getSomePokemon()).count;
  }
}
export default PokeApiProvider;
