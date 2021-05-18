"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class PokeApiException extends common_1.HttpException {
    constructor() {
        super('Empty string given.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.default = PokeApiException;
//# sourceMappingURL=EmptyStringException.js.map