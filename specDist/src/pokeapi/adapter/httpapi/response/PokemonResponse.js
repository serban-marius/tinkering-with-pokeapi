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
const PokemonResults_1 = __importDefault(require("./PokemonResults"));
class PokemonResponse {
}
__decorate([
    swagger_1.ApiProperty({ description: 'Total Pokemon Count', example: '567' }),
    __metadata("design:type", Number)
], PokemonResponse.prototype, "count", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Next Pokemon Page URL',
        example: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
    }),
    __metadata("design:type", String)
], PokemonResponse.prototype, "next", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Previous Pokemon Page URL',
        example: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    }),
    __metadata("design:type", String)
], PokemonResponse.prototype, "previous", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Array of Pokemon',
        example: '[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}]',
        type: [PokemonResults_1.default],
    }),
    __metadata("design:type", Array)
], PokemonResponse.prototype, "results", void 0);
exports.default = PokemonResponse;
//# sourceMappingURL=PokemonResponse.js.map