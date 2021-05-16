import IEntity from '../../../common/domain/entity/IEntity';
import IPokemonVarieties from './IPokemonVarieties';

interface IPokemonSpeciesInfo extends IEntity {
  name: string;
  varieties: IPokemonVarieties[];
}
export default IPokemonSpeciesInfo;
