import IEntity from '../../../common/domain/entity/IEntity';

interface IPokemonResult extends IEntity {
  name: string;
  url: string;
}
export default IPokemonResult;
