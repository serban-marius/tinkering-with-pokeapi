import { ICommand } from '@nestjs/cqrs';

class GetPokemonByNameCommand implements ICommand {
  public constructor(public readonly name: string) {}
}
export default GetPokemonByNameCommand;
