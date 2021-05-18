import { ICommand } from '@nestjs/cqrs';
declare class GetPokemonByColorCommand implements ICommand {
    readonly color: string;
    constructor(color: string);
}
export default GetPokemonByColorCommand;
