import { CqrsModule, ICommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { Module, Provider } from '@nestjs/common';
import GetHelloHandler from '../../application/handler/GetHelloHandler';
import PokeApiController from '../httpapi/PokeApiController';
import PokeApiService from '../../domain/service/PokeApiService';

const commandHandlers: Provider<ICommandHandler>[] = [GetHelloHandler];
const queryHandlers: Provider<IQueryHandler>[] = [];
@Module({
  controllers: [PokeApiController],
  exports: [PokeApiService],
  imports: [PokeApiModule, CqrsModule],
  providers: [PokeApiService, ...queryHandlers, ...commandHandlers],
})
export class PokeApiModule {}
