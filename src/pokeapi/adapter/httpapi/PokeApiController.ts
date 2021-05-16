import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiProduces, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import GetAllPokemonCommand from '../../application/command/GetAllPokemonCommand';
import GetPokemonByColorCommand from '../../application/command/GetPokemonByColorCommand';
import GetPokemonByNameCommand from '../../application/command/GetPokemonByNameCommand';
import IFindByNameRequest from './request/IFindByNameRequest';
import ObjectsToCsv from 'objects-to-csv';
import PokemonFindByNameResponse from './response/PokemonFindByNameResponse';
import PokemonResponse from './response/PokemonResponse';

@ApiTags('PokeApi Controller')
@Controller('pokemon')
class PokeApiController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ description: 'Returns all available Pokemon.', summary: 'Get All Pokemon' })
  @ApiProduces('application/json')
  @ApiOkResponse({ type: PokemonResponse })
  @Get('all')
  public async getAllPokemon(): Promise<PokemonResponse> {
    return this.commandBus.execute(new GetAllPokemonCommand());
  }

  @ApiOperation({ description: 'Returns Pokemon by name search.', summary: 'Get Pokemon by Name' })
  @ApiProduces('application/json')
  @ApiBody({
    schema: {
      default: 'Pokemon Name to Search',
      example: '{"name":"pikachu"}',
      title: 'Pokemon name',
      type: 'json',
    },
  })
  @ApiOkResponse({ type: PokemonFindByNameResponse })
  @Post('findByName')
  public async getPokemonByName(@Body() findByNameBody: IFindByNameRequest): Promise<PokemonFindByNameResponse> {
    return this.commandBus.execute(new GetPokemonByNameCommand(findByNameBody.name));
  }

  @ApiOperation({ description: 'Returns Pokemons by colour search.', summary: 'Get Pokemons by Name' })
  @ApiProduces('text/csv')
  @ApiParam({
    name: 'color',
    schema: {
      default: 'Pokemon Color to Search',
      example: 'yellow',
      title: 'Pokemon color',
      type: 'string',
    },
  })
  @ApiOkResponse({ type: ObjectsToCsv })
  @Get('csv/:color')
  // @ts-ignore TODO: Find solution for this.
  public async getPokemonByColor(@Param('color') color: string, @Res() res): Promise<ObjectsToCsv> {
    const csv = await this.commandBus.execute(new GetPokemonByColorCommand(color));
    await csv.toDisk('/app/dist/test.csv');
    return res.sendFile('/app/dist/test.csv');
  }
}
export default PokeApiController;
