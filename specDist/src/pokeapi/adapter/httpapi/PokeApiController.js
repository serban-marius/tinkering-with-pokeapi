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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const GetAllPokemonCommand_1 = __importDefault(require("../../application/command/GetAllPokemonCommand"));
const GetPokemonByColorCommand_1 = __importDefault(require("../../application/command/GetPokemonByColorCommand"));
const GetPokemonByNameCommand_1 = __importDefault(require("../../application/command/GetPokemonByNameCommand"));
const PokemonFindByNameResponse_1 = __importDefault(require("./response/PokemonFindByNameResponse"));
const PokemonResponse_1 = __importDefault(require("./response/PokemonResponse"));
let PokeApiController = class PokeApiController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async getAllPokemon() {
        return this.commandBus.execute(new GetAllPokemonCommand_1.default());
    }
    async getPokemonByName(findByNameBody) {
        return this.commandBus.execute(new GetPokemonByNameCommand_1.default(findByNameBody.name));
    }
    async getPokemonByColor(color, res) {
        const csv = await this.commandBus.execute(new GetPokemonByColorCommand_1.default(color));
        await csv.toDisk('/app/dist/test.csv');
        return res.sendFile('/app/dist/test.csv');
    }
};
__decorate([
    swagger_1.ApiOperation({ description: 'Returns all available Pokemon.', summary: 'Get All Pokemon' }),
    swagger_1.ApiProduces('application/json'),
    swagger_1.ApiOkResponse({ type: PokemonResponse_1.default }),
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PokeApiController.prototype, "getAllPokemon", null);
__decorate([
    swagger_1.ApiOperation({ description: 'Returns Pokemon by name search.', summary: 'Get Pokemon by Name' }),
    swagger_1.ApiProduces('application/json'),
    swagger_1.ApiBody({
        schema: {
            default: 'Pokemon Name to Search',
            example: '{"name":"pikachu"}',
            title: 'Pokemon name',
            type: 'json',
        },
    }),
    swagger_1.ApiOkResponse({ type: PokemonFindByNameResponse_1.default }),
    common_1.Post('findByName'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PokeApiController.prototype, "getPokemonByName", null);
__decorate([
    swagger_1.ApiOperation({ description: 'Returns Pokemons by colour search.', summary: 'Get Pokemons by Name' }),
    swagger_1.ApiParam({
        name: 'color',
        schema: {
            default: 'Pokemon Color to Search',
            example: 'yellow',
            title: 'Pokemon color',
            type: 'string',
        },
    }),
    swagger_1.ApiOkResponse({
        description: 'Returns a CSV file with a list of All Pokemons of a color order by base_experience.',
        type: 'text/csv',
    }),
    common_1.Get('csv/:color'),
    __param(0, common_1.Param('color')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PokeApiController.prototype, "getPokemonByColor", null);
PokeApiController = __decorate([
    swagger_1.ApiTags('PokeApi Controller'),
    common_1.Controller('pokemon'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], PokeApiController);
exports.default = PokeApiController;
//# sourceMappingURL=PokeApiController.js.map