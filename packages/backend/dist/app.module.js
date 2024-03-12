"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const item_controller_1 = require("./item/item.controller");
const item_service_1 = require("./item/item.service");
const item_module_1 = require("./item/item.module");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("./item/entities/item.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            item_module_1.ItemModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                database: 'feedlify',
                entities: [item_entity_1.Item],
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController, item_controller_1.ItemController],
        providers: [app_service_1.AppService, item_service_1.ItemService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map