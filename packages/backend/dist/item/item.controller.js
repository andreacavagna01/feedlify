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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const update_item_dto_1 = require("./dto/update-item.dto");
const typeorm_1 = require("typeorm");
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async create(createItemDto) {
        const item = await this.itemService.create(createItemDto);
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
        };
    }
    async findAll() {
        const items = await this.itemService.findAll();
        const itemsDto = [];
        items.forEach((item) => {
            itemsDto.push({
                description: item.description,
                id: item.id,
                name: item.name,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            });
        });
        return itemsDto;
    }
    async findOne(id) {
        try {
            const item = await this.itemService.findOne(id);
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            };
        }
        catch (e) {
            if (e instanceof typeorm_1.QueryFailedError) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `The Item with id: ${id} is not found`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: e,
                });
            }
            else {
                throw e;
            }
        }
    }
    async update(id, updateItemDto) {
        try {
            await this.itemService.update(id, updateItemDto);
            return this.itemService.findOne(id);
        }
        catch (e) {
            if (e instanceof typeorm_1.QueryFailedError) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `The Item with id: ${id} is not found`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: e,
                });
            }
            else {
                throw e;
            }
        }
    }
    remove(id) {
        try {
            return this.itemService.remove(id);
        }
        catch (e) {
            if (e instanceof typeorm_1.QueryFailedError) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `The Item with id: ${id} is not found`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: e,
                });
            }
            else {
                throw e;
            }
        }
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_dto_1.UpdateItemDto]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "remove", null);
exports.ItemController = ItemController = __decorate([
    (0, common_1.Controller)('item'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
//# sourceMappingURL=item.controller.js.map