import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import GetAllPokemonCommand from '../command/GetAllPokemonCommand';
import IPokemonResponse from '../../domain/entity/IPokemonResponse';
import PokeApiService from '../../domain/service/PokeApiService';

@CommandHandler(GetAllPokemonCommand)
class GetAllPokemonHandler implements ICommandHandler<GetAllPokemonCommand> {
  public constructor(private readonly pokeApiService: PokeApiService) {}

  public async execute(): Promise<IPokemonResponse> {
    return this.pokeApiService.getAllPokemon();
  }
}

export default GetAllPokemonHandler;
