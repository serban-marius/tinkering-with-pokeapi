import { ICommandHandler } from '@nestjs/cqrs';
import CommonService from '../../../common/domain/service/CommonService';
import GetPokemonByColorCommand from '../command/GetPokemonByColorCommand';
import ObjectsToCsv from 'objects-to-csv';
import PokeApiService from '../../domain/service/PokeApiService';
declare class GetPokemonByColorHandler implements ICommandHandler<GetPokemonByColorCommand> {
    private readonly pokeApiService;
    private readonly commonService;
    constructor(pokeApiService: PokeApiService, commonService: CommonService);
    execute(command: GetPokemonByColorCommand): Promise<ObjectsToCsv>;
}
export default GetPokemonByColorHandler;
