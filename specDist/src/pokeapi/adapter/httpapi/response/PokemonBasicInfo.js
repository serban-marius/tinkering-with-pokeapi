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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class PokemonBasicInfo {
}
__decorate([
    swagger_1.ApiProperty({ description: 'Pokemon Basic Experience', example: '112' }),
    __metadata("design:type", Number)
], PokemonBasicInfo.prototype, "baseExperience", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'Pokemon Height', example: '4' }),
    __metadata("design:type", Number)
], PokemonBasicInfo.prototype, "height", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'Pokemon Name', example: 'pikachu' }),
    __metadata("design:type", String)
], PokemonBasicInfo.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'Pokemon Weight', example: '60' }),
    __metadata("design:type", Number)
], PokemonBasicInfo.prototype, "weight", void 0);
exports.default = PokemonBasicInfo;
//# sourceMappingURL=PokemonBasicInfo.js.map