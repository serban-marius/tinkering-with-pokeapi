"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const AppModule_1 = __importDefault(require("./AppModule"));
const core_1 = require("@nestjs/core");
const PokeApiModule_1 = __importDefault(require("./pokeapi/adapter/injector/PokeApiModule"));
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
function initSwagger(app) {
    if (process.env.ENABLE_SWAGGER_DOCS === 'true') {
        app.use('/api-docs', express_basic_auth_1.default({
            challenge: true,
            users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASS },
        }));
        const options = new swagger_1.DocumentBuilder().setTitle('tinkering-with-pokeapi').build();
        const document = swagger_1.SwaggerModule.createDocument(app, options, {
            include: [AppModule_1.default, PokeApiModule_1.default],
        });
        swagger_1.SwaggerModule.setup('/api-docs', app, document);
    }
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule_1.default);
    initSwagger(app);
    await app.listen(process.env.APPLICATION_PORT || 3005);
}
bootstrap();
//# sourceMappingURL=main.js.map