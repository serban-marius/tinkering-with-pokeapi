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
const cqrs_1 = require("@nestjs/cqrs");
const GetAllPokemonCommand_1 = __importDefault(require("../command/GetAllPokemonCommand"));
const PokeApiService_1 = __importDefault(require("../../domain/service/PokeApiService"));
let GetAllPokemonHandler = class GetAllPokemonHandler {
    constructor(pokeApiService) {
        this.pokeApiService = pokeApiService;
    }
    async execute() {
        return this.pokeApiService.getAllPokemon();
    }
};
GetAllPokemonHandler = __decorate([
    cqrs_1.CommandHandler(GetAllPokemonCommand_1.default),
    __metadata("design:paramtypes", [PokeApiService_1.default])
], GetAllPokemonHandler);
exports.default = GetAllPokemonHandler;
//# sourceMappingURL=GetAllPokemonHandler.js.map