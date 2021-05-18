import { HttpException } from '@nestjs/common';
declare class PokeApiException extends HttpException {
    constructor();
}
export default PokeApiException;
