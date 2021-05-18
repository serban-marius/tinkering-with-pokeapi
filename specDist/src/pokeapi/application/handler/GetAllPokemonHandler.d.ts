import { ICommandHandler } from '@nestjs/cqrs';
import GetAllPokemonCommand from '../command/GetAllPokemonCommand';
import IPokemonResponse from '../../domain/entity/IPokemonResponse';
import PokeApiService from '../../domain/service/PokeApiService';
declare class GetAllPokemonHandler implements ICommandHandler<GetAllPokemonCommand> {
    private readonly pokeApiService;
    constructor(pokeApiService: PokeApiService);
    execute(): Promise<IPokemonResponse>;
}
export default GetAllPokemonHandler;
