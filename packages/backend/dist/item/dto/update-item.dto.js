"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const item_dto_1 = require("./item.dto");
class UpdateItemDto extends (0, mapped_types_1.PartialType)(item_dto_1.ItemDto) {
}
exports.UpdateItemDto = UpdateItemDto;
//# sourceMappingURL=update-item.dto.js.map