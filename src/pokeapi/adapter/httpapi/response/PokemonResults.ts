import { ApiProperty } from '@nestjs/swagger';
import IPokemonResult from '../../../domain/entity/IPokemonResult';

class PokemonResults implements IPokemonResult {
  @ApiProperty({ description: 'Pokemon Name', example: 'bulbasaur' })
  name: string;

  @ApiProperty({
    description: 'Pokemon Page URL',
    example: 'https://pokeapi.co/api/v2/pokemon/1/',
  })
  url: string;
}

export default PokemonResults;
