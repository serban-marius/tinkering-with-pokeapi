"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyStringException_1 = __importDefault(require("../../../pokeapi/domain/exception/EmptyStringException"));
const common_1 = require("@nestjs/common");
const objects_to_csv_1 = __importDefault(require("objects-to-csv"));
let CommonService = class CommonService {
    constructor() {
        this.matchNonAlphabeticCharactersRegex = /[^a-zA-Z]+/g;
    }
    removeSpecialCharactersAndNumbers(originalString) {
        const resultString = this.removeFromString(originalString, this.matchNonAlphabeticCharactersRegex);
        if (resultString === '') {
            throw new EmptyStringException_1.default();
        }
        return resultString;
    }
    removeFromString(originalString, whatToRemove, replaceWith = '') {
        return originalString.toLowerCase().replace(whatToRemove, replaceWith);
    }
    objectArrayToCsv(objectArray) {
        return new objects_to_csv_1.default(objectArray);
    }
};
CommonService = __decorate([
    common_1.Injectable()
], CommonService);
exports.default = CommonService;
//# sourceMappingURL=CommonService.js.map