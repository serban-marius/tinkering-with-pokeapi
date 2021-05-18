"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class PokeApiException extends common_1.HttpException {
    constructor() {
        super('PokeApi URL not found.', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.default = PokeApiException;
//# sourceMappingURL=PokeApiException.js.map