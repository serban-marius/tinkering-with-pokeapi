import { Injectable } from '@nestjs/common';

@Injectable()
class PokeApiService {
  bar = 'Hello World!';

  getHello(): string {
    return this.bar;
  }
}

export default PokeApiService;
