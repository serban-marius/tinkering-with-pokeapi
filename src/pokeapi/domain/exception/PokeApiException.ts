import {HttpException, HttpStatus} from '@nestjs/common';

class PokeApiException extends HttpException {
    constructor() {
        super('PokeApi URL not found.', HttpStatus.NOT_FOUND);
    }
}
export default PokeApiException;
