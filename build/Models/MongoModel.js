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
class MongoModel {
    constructor(model) {
        this._model = model;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.find();
        });
    }
    findOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findOne({ _id });
        });
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('mongoModel', obj);
            return this._model.create(Object.assign({}, obj));
        });
    }
}
exports.default = MongoModel;
