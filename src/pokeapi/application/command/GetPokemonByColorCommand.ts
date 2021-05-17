import { ICommand } from '@nestjs/cqrs';

class GetPokemonByColorCommand implements ICommand {
  public constructor(public readonly color: string) {}
}
export default GetPokemonByColorCommand;
