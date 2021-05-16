import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import CommonService from '../../../common/domain/service/CommonService';
import GetPokemonByColorCommand from '../command/GetPokemonByColorCommand';
import ObjectsToCsv from 'objects-to-csv';
import PokeApiService from '../../domain/service/PokeApiService';

@CommandHandler(GetPokemonByColorCommand)
class GetPokemonByColorHandler implements ICommandHandler<GetPokemonByColorCommand> {
  public constructor(private readonly pokeApiService: PokeApiService, private readonly commonService: CommonService) {}

  public async execute(command: GetPokemonByColorCommand): Promise<ObjectsToCsv> {
    const pokemonSpecies = await this.pokeApiService.getSomePokemonByColor(
      this.commonService.removeSpecialCharactersAndNumbers(command.color),
    );
    const pokemonSpeciesInfo = await this.pokeApiService.getPokemonSpeciesInfoArrayFromPokemonSpeciesResultArray(
      pokemonSpecies,
    );
    const pokemonBasicInfo = await this.pokeApiService.getPokemonBasicInfoArrayFromPokemonSpeciesInfoArray(
      pokemonSpeciesInfo,
    );

    const pokemonBasicInfoSorted = pokemonBasicInfo.sort((a, b) => (a.baseExperience > b.baseExperience ? 1 : -1));
    return this.commonService.objectArrayToCsv(pokemonBasicInfoSorted);
  }
}

export default GetPokemonByColorHandler;
