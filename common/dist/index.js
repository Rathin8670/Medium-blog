"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateblogInput = exports.blogpostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6)
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.blogpostInput = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional()
});
exports.updateblogInput = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional()
});
