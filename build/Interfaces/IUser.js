"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaZod = void 0;
const zod_1 = require("zod");
const userSchemaZod = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: 'Must be 3 or more characters long' }),
    email: zod_1.z.string(),
});
exports.userSchemaZod = userSchemaZod;
