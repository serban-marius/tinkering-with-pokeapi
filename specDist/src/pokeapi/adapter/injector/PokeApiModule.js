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
var PokeApiModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const CommonModule_1 = __importDefault(require("../../../common/adapter/injector/CommonModule"));
const GetAllPokemonHandler_1 = __importDefault(require("../../application/handler/GetAllPokemonHandler"));
const GetPokemonByColorHandler_1 = __importDefault(require("../../application/handler/GetPokemonByColorHandler"));
const GetPokemonByNameHandler_1 = __importDefault(require("../../application/handler/GetPokemonByNameHandler"));
const PokeApiController_1 = __importDefault(require("../httpapi/PokeApiController"));
const PokeApiProvider_1 = __importDefault(require("../provider/PokeApiProvider"));
const PokeApiService_1 = __importDefault(require("../../domain/service/PokeApiService"));
const commandHandlers = [
    GetAllPokemonHandler_1.default,
    GetPokemonByNameHandler_1.default,
    GetPokemonByColorHandler_1.default,
];
const queryHandlers = [];
let PokeApiModule = PokeApiModule_1 = class PokeApiModule {
};
PokeApiModule = PokeApiModule_1 = __decorate([
    common_1.Module({
        controllers: [PokeApiController_1.default],
        exports: [PokeApiService_1.default],
        imports: [cqrs_1.CqrsModule, common_1.forwardRef(() => PokeApiModule_1), CommonModule_1.default],
        providers: [PokeApiService_1.default, PokeApiProvider_1.default, ...queryHandlers, ...commandHandlers],
    })
], PokeApiModule);
exports.default = PokeApiModule;
//# sourceMappingURL=PokeApiModule.js.map