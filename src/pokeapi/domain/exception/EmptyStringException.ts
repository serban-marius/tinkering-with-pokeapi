import { HttpException, HttpStatus } from '@nestjs/common';

class PokeApiException extends HttpException {
  constructor() {
    super('Empty string given.', HttpStatus.BAD_REQUEST);
  }
}
export default PokeApiException;
