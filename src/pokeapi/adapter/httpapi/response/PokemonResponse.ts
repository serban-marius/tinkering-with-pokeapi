import { ApiProperty } from '@nestjs/swagger';
import IPokemonResponse from '../../../domain/entity/IPokemonResponse';
import PokemonResults from './PokemonResults';

class PokemonResponse implements IPokemonResponse {
  @ApiProperty({ description: 'Total Pokemon Count', example: '567' })
  count: number;

  @ApiProperty({
    description: 'Next Pokemon Page URL',
    example: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
  })
  next: string | null;

  @ApiProperty({
    description: 'Previous Pokemon Page URL',
    example: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
  })
  previous: string | null;

  @ApiProperty({
    description: 'Array of Pokemon',
    example: '[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}]',
    type: [PokemonResults],
  })
  results: PokemonResults[];
}

export default PokemonResponse;
