import { ApiProperty } from '@nestjs/swagger';
import IPokemonFindByNameResponse from '../../../domain/entity/IPokemonFindByNameResponse';
import PokemonBasicInfo from './PokemonBasicInfo';

class PokemonFindByNameResponse implements IPokemonFindByNameResponse {
  @ApiProperty({ description: 'Total Pokemon Found', example: '1' })
  count: number;

  @ApiProperty({
    description: 'Array of Pokemon with some basic info',
    example: '[{"baseExperience":112,"height":4,"name":"pikachu","weight":60}]',
    type: [PokemonBasicInfo],
  })
  results: PokemonBasicInfo[];
}
export default PokemonFindByNameResponse;
