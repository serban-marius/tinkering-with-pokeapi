import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  bar = 'Hello World!';

  getHello(): string {
    return this.bar;
  }
}

export default AppService;
