import { ICommandHandler } from '@nestjs/cqrs';
import CommonService from '../../../common/domain/service/CommonService';
import GetPokemonByNameCommand from '../command/GetPokemonByNameCommand';
import IPokemonFindByNameResponse from '../../domain/entity/IPokemonFindByNameResponse';
import PokeApiService from '../../domain/service/PokeApiService';
declare class GetPokemonByNameHandler implements ICommandHandler<GetPokemonByNameCommand> {
    private readonly pokeApiService;
    private readonly commonService;
    constructor(pokeApiService: PokeApiService, commonService: CommonService);
    execute(command: GetPokemonByNameCommand): Promise<IPokemonFindByNameResponse>;
}
export default GetPokemonByNameHandler;
