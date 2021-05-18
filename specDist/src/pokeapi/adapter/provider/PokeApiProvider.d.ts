import { AxiosRequestConfig, AxiosResponse } from 'axios';
import IPokemonColorResponse from '../../domain/entity/IPokemonColorResponse';
import IPokemonInfo from '../../domain/entity/IPokemonInfo';
import IPokemonResponse from '../../domain/entity/IPokemonResponse';
import IPokemonResult from '../../domain/entity/IPokemonResult';
import IPokemonSpeciesInfo from '../../domain/entity/IPokemonSpeciesInfo';
declare class PokeApiProvider {
    private readonly pokeApiV2Url;
    get(urlConcat?: string, options?: AxiosRequestConfig): Promise<AxiosResponse>;
    getSomePokemonByColor(color: string): Promise<IPokemonColorResponse>;
    getPokemonSpeciesInfo(pokemonResults: IPokemonResult): Promise<IPokemonSpeciesInfo>;
    getSomePokemon(limit?: number, offset?: number): Promise<IPokemonResponse>;
    getPokemonData(pokemonResults: IPokemonResult): Promise<IPokemonInfo>;
    getAllPokemon(): Promise<IPokemonResponse>;
    getAvailablePokemonCount(): Promise<number>;
}
export default PokeApiProvider;
