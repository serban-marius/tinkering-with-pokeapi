import { CqrsModule, ICommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { Module, Provider, forwardRef } from '@nestjs/common';
import CommonModule from '../../../common/adapter/injector/CommonModule';
import GetAllPokemonHandler from '../../application/handler/GetAllPokemonHandler';
import GetPokemonByColorHandler from '../../application/handler/GetPokemonByColorHandler';
import GetPokemonByNameHandler from '../../application/handler/GetPokemonByNameHandler';
import PokeApiController from '../httpapi/PokeApiController';
import PokeApiProvider from '../provider/PokeApiProvider';
import PokeApiService from '../../domain/service/PokeApiService';

const commandHandlers: Provider<ICommandHandler>[] = [
  GetAllPokemonHandler,
  GetPokemonByNameHandler,
  GetPokemonByColorHandler,
];
const queryHandlers: Provider<IQueryHandler>[] = [];
@Module({
  controllers: [PokeApiController],
  exports: [PokeApiService],
  imports: [CqrsModule, forwardRef(() => PokeApiModule), CommonModule],
  providers: [PokeApiService, PokeApiProvider, ...queryHandlers, ...commandHandlers],
})
class PokeApiModule {}

export default PokeApiModule;
