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
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(service) {
        this.service = service;
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.service.findAll();
            return res.status(200).json(users);
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield this.service.findOne(id);
            return res.status(200).json(user);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            const user = yield this.service.create(newUser);
            return res.status(201).json(user);
        });
    }
}
exports.default = UserController;
