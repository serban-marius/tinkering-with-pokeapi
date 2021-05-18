import IEntity from '../../../common/domain/entity/IEntity';
import IPokemonResult from './IPokemonResult';
interface IPokemonVarieties extends IEntity {
    is_default: boolean;
    pokemon: IPokemonResult;
}
export default IPokemonVarieties;
