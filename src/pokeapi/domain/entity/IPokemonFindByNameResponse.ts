import IEntity from '../../../common/domain/entity/IEntity';
import IPokemonBasicInfo from './IPokemonBasicInfo';

interface IPokemonFindByNameResponse extends IEntity {
  count: number;
  results: IPokemonBasicInfo[];
}
export default IPokemonFindByNameResponse;
