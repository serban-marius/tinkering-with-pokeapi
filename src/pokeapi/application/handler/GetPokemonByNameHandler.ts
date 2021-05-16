import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import CommonService from '../../../common/domain/service/CommonService';
import GetPokemonByNameCommand from '../command/GetPokemonByNameCommand';
import IPokemonFindByNameResponse from '../../domain/entity/IPokemonFindByNameResponse';
import PokeApiService from '../../domain/service/PokeApiService';

@CommandHandler(GetPokemonByNameCommand)
class GetPokemonByNameHandler implements ICommandHandler<GetPokemonByNameCommand> {
  public constructor(private readonly pokeApiService: PokeApiService, private readonly commonService: CommonService) {}

  public async execute(command: GetPokemonByNameCommand): Promise<IPokemonFindByNameResponse> {
    const pokemonResults = await this.pokeApiService.getPokemonByName(
      this.commonService.removeSpecialCharactersAndNumbers(command.name),
    );
    return this.pokeApiService.getPokemonFindByNameResponseFromPokemonResult(pokemonResults);
  }
}

export default GetPokemonByNameHandler;
