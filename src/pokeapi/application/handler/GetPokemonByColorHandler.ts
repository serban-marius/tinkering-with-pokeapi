import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import CommonService from '../../../common/domain/service/CommonService';
import GetPokemonByColorCommand from '../command/GetPokemonByColorCommand';
import ObjectsToCsv from 'objects-to-csv';
import PokeApiService from '../../domain/service/PokeApiService';

@CommandHandler(GetPokemonByColorCommand)
class GetPokemonByColorHandler implements ICommandHandler<GetPokemonByColorCommand> {
  public constructor(private readonly pokeApiService: PokeApiService, private readonly commonService: CommonService) {}

  public async execute(command: GetPokemonByColorCommand): Promise<ObjectsToCsv> {
    const allPokemonOfColorBasicInfo = await this.pokeApiService.getAllPokemonOfColorBasicInfo(
      this.commonService.removeSpecialCharactersAndNumbers(command.color),
    );

    return this.commonService.objectArrayToCsv(
      this.pokeApiService.sortPokemonBasicInfoByBaseExperience(allPokemonOfColorBasicInfo),
    );
  }
}

export default GetPokemonByColorHandler;
