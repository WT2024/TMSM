"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const overview_api_1 = __importDefault(require("./overview_api"));
const users_api_1 = __importDefault(require("./users_api"));
const router = new koa_router_1.default({ prefix: '/api' });
router.use(overview_api_1.default.routes()).use(overview_api_1.default.allowedMethods());
router.use(users_api_1.default.routes()).use(users_api_1.default.allowedMethods());
exports.default = router;
