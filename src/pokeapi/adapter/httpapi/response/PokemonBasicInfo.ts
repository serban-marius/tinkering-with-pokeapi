import { ApiProperty } from '@nestjs/swagger';
import IPokemonBasicInfo from '../../../domain/entity/IPokemonBasicInfo';

class PokemonBasicInfo implements IPokemonBasicInfo {
  @ApiProperty({ description: 'Pokemon Basic Experience', example: '112' })
  baseExperience: number;

  @ApiProperty({ description: 'Pokemon Height', example: '4' })
  height: number;

  @ApiProperty({ description: 'Pokemon Name', example: 'pikachu' })
  name: string;

  @ApiProperty({ description: 'Pokemon Weight', example: '60' })
  weight: number;
}
export default PokemonBasicInfo;
