import { ICommand } from '@nestjs/cqrs';

class GetAllPokemonCommand implements ICommand {}

export default GetAllPokemonCommand;
