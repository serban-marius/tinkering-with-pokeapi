import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';
import GetHelloCommand from '../../application/command/GetHelloCommand';

@Controller()
class PokeApiController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiTags('Basic Get Method')
  @Get()
  public async getHello(): Promise<string> {
    return this.commandBus.execute(new GetHelloCommand());
  }
}

export default PokeApiController;
