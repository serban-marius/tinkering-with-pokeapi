import { ICommand } from '@nestjs/cqrs';
declare class GetPokemonByNameCommand implements ICommand {
    readonly name: string;
    constructor(name: string);
}
export default GetPokemonByNameCommand;
