import IEntity from '../../../common/domain/entity/IEntity';

interface IPokemonInfo extends IEntity {
  base_experience: number;
  weight: number;
  height: number;
}
export default IPokemonInfo;
