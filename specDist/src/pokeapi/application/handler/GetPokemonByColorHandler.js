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
const CommonService_1 = __importDefault(require("../../../common/domain/service/CommonService"));
const GetPokemonByColorCommand_1 = __importDefault(require("../command/GetPokemonByColorCommand"));
const PokeApiService_1 = __importDefault(require("../../domain/service/PokeApiService"));
let GetPokemonByColorHandler = class GetPokemonByColorHandler {
    constructor(pokeApiService, commonService) {
        this.pokeApiService = pokeApiService;
        this.commonService = commonService;
    }
    async execute(command) {
        const allPokemonOfColorBasicInfo = await this.pokeApiService.getAllPokemonOfColorBasicInfo(this.commonService.removeSpecialCharactersAndNumbers(command.color));
        return this.commonService.objectArrayToCsv(this.pokeApiService.sortPokemonBasicInfoByBaseExperience(allPokemonOfColorBasicInfo));
    }
};
GetPokemonByColorHandler = __decorate([
    cqrs_1.CommandHandler(GetPokemonByColorCommand_1.default),
    __metadata("design:paramtypes", [PokeApiService_1.default, CommonService_1.default])
], GetPokemonByColorHandler);
exports.default = GetPokemonByColorHandler;
//# sourceMappingURL=GetPokemonByColorHandler.js.map