"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonModule_1 = __importDefault(require("../../adapter/injector/CommonModule"));
describe('Common Module tests', () => {
    it('must be initializable', async (done) => {
        expect(() => new CommonModule_1.default()).not.toThrowError();
        done();
    });
});
//# sourceMappingURL=CommonService.spec.js.map