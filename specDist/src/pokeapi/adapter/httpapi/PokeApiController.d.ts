import { CommandBus } from '@nestjs/cqrs';
import IFindByNameRequest from './request/IFindByNameRequest';
import ObjectsToCsv from 'objects-to-csv';
import PokemonFindByNameResponse from './response/PokemonFindByNameResponse';
import PokemonResponse from './response/PokemonResponse';
declare class PokeApiController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    getAllPokemon(): Promise<PokemonResponse>;
    getPokemonByName(findByNameBody: IFindByNameRequest): Promise<PokemonFindByNameResponse>;
    getPokemonByColor(color: string, res: any): Promise<ObjectsToCsv>;
}
export default PokeApiController;
