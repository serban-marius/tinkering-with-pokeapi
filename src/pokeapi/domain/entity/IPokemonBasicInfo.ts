import IEntity from '../../../common/domain/entity/IEntity';

interface IPokemonBasicInfo extends IEntity {
  baseExperience: number;
  height: number;
  name: string;
  weight: number;
}
export default IPokemonBasicInfo;
