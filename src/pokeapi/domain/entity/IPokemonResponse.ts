import IEntity from '../../../common/domain/entity/IEntity';
import IPokemonResult from './IPokemonResult';

interface IPokemonResponse extends IEntity {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResult[];
}
export default IPokemonResponse;
