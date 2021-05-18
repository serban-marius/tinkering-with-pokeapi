import IPokemonFindByNameResponse from '../../../domain/entity/IPokemonFindByNameResponse';
import PokemonBasicInfo from './PokemonBasicInfo';
declare class PokemonFindByNameResponse implements IPokemonFindByNameResponse {
    count: number;
    results: PokemonBasicInfo[];
}
export default PokemonFindByNameResponse;
