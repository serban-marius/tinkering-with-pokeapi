import IPokemonBasicInfo from '../entity/IPokemonBasicInfo';
import IPokemonFindByNameResponse from '../entity/IPokemonFindByNameResponse';
import IPokemonResponse from '../entity/IPokemonResponse';
import IPokemonResult from '../entity/IPokemonResult';
import IPokemonSpeciesInfo from '../entity/IPokemonSpeciesInfo';
import IPokemonSpeciesResult from '../entity/IPokemonSpeciesResult';
import PokeApiProvider from '../../adapter/provider/PokeApiProvider';
declare class PokeApiService {
    private readonly pokeApiProvider;
    constructor(pokeApiProvider: PokeApiProvider);
    getAllPokemon(): Promise<IPokemonResponse>;
    getAllPokemonOfColorBasicInfo(color: string): Promise<IPokemonBasicInfo[]>;
    getAllPokemonByColor(color: string): Promise<IPokemonSpeciesResult[]>;
    pokemonSpeciesResultArrayToPokemonSpeciesInfoArrayTransformer(pokemonSpeciesResults: IPokemonSpeciesResult[]): Promise<IPokemonSpeciesInfo[]>;
    pokemonSpeciesResultToPokemonSpeciesInfoTransformer(pokemonResult: IPokemonSpeciesResult): Promise<IPokemonSpeciesInfo>;
    pokemonSpeciesInfoArrayToPokemonBasicInfoArrayTransformer(pokemonSpeciesInfo: IPokemonSpeciesInfo[]): Promise<IPokemonBasicInfo[]>;
    getAllPokemonByName(name: string): Promise<IPokemonResult[]>;
    getPokemonFindByNameResponseFromPokemonResultArray(pokemonResults: IPokemonResult[]): Promise<IPokemonFindByNameResponse>;
    pokemonResultToPokemonBasicInfoTransformer(pokemonResult: IPokemonResult): Promise<IPokemonBasicInfo>;
    sortPokemonBasicInfoByBaseExperience(pokemonBasicInfo: IPokemonBasicInfo[]): IPokemonBasicInfo[];
}
export default PokeApiService;
