import { Module } from '@nestjs/common';
import PokeApiModule from './pokeapi/adapter/injector/PokeApiModule';

@Module({
  controllers: [],
  imports: [PokeApiModule],
  providers: [],
})
class AppModule {}

export default AppModule;
