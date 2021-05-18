import IPokemonResponse from '../../../domain/entity/IPokemonResponse';
import PokemonResults from './PokemonResults';
declare class PokemonResponse implements IPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResults[];
}
export default PokemonResponse;
