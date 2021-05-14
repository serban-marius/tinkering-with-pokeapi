import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import GetHelloCommand from '../command/GetHelloCommand';
import PokeApiService from '../../domain/service/PokeApiService';

@CommandHandler(GetHelloCommand)
class GetHelloHandler implements ICommandHandler<GetHelloCommand> {
  public constructor(private readonly pokeApiService: PokeApiService) {}

  public async execute(): Promise<string> {
    return this.pokeApiService.getHello();
  }
}

export default GetHelloHandler;
