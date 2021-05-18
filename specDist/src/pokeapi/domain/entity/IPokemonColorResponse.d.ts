import IEntity from '../../../common/domain/entity/IEntity';
import IPokemonResult from './IPokemonResult';
interface IPokemonResponse extends IEntity {
    name: string;
    pokemon_species: IPokemonResult[];
}
export default IPokemonResponse;
