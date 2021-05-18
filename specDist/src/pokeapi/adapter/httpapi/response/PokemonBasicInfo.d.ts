import IPokemonBasicInfo from '../../../domain/entity/IPokemonBasicInfo';
declare class PokemonBasicInfo implements IPokemonBasicInfo {
    baseExperience: number;
    height: number;
    name: string;
    weight: number;
}
export default PokemonBasicInfo;
