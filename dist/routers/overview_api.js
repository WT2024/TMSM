"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const OverviewInfo = {
        name: os_1.default.hostname(),
        version: os_1.default.version(),
        nowUser: {
            userId: 1,
            userName: 'admin',
            userType: 'admin',
            password: 'admin',
        },
        cpus: os_1.default.cpus(),
        totalMem: (os_1.default.totalmem() / 1024 / 1024 / 1024).toFixed(2) + "GB",
        usedMem: ((os_1.default.totalmem() - os_1.default.freemem()) / 1024 / 1024 / 1024).toFixed(2) + "GB",
        application: [
            {
                name: 'test',
                type: 'test',
                flag: 'test'
            }
        ]
    };
    ctx.body = OverviewInfo;
}));
exports.default = router;
