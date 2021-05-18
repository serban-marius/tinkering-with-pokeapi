"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const PokemonBasicInfo_1 = __importDefault(require("./PokemonBasicInfo"));
class PokemonFindByNameResponse {
}
__decorate([
    swagger_1.ApiProperty({ description: 'Total Pokemon Found', example: '1' }),
    __metadata("design:type", Number)
], PokemonFindByNameResponse.prototype, "count", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Array of Pokemon with some basic info',
        example: '[{"baseExperience":112,"height":4,"name":"pikachu","weight":60}]',
        type: [PokemonBasicInfo_1.default],
    }),
    __metadata("design:type", Array)
], PokemonFindByNameResponse.prototype, "results", void 0);
exports.default = PokemonFindByNameResponse;
//# sourceMappingURL=PokemonFindByNameResponse.js.map