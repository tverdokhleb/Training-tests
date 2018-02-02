"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tests_js_1 = require("../tests/tests.js");
var protractor_1 = require("protractor");
var yandex = new tests_js_1.Page('https://yandex.ru/');
describe('Checking main page', function () {
    describe('checking login for mail', function () {
        it('input login for mail', function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex.go()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputLogin('AutotestUser')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputPassword('AutotestUser123')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, yandex.enterWithLogin()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, yandex.userName.getText()];
                    case 5:
                        user = _a.sent();
                        expect(user).toEqual('AutotestUser');
                        return [4 /*yield*/, yandex.exitUser()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('yandex-mail logout (password is wrong)', function () { return __awaiter(_this, void 0, void 0, function () {
            var error, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex.go()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputLogin('AutotestUser')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputPassword('NoAutotestUser123')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, yandex.checkErrorInput()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, yandex.loginError.getText()];
                    case 5:
                        error = _a.sent();
                        expect(error).toEqual('Неверный пароль');
                        // let error : any = await yandex.loginError.isPresent();
                        // expect(error).toBe(true);
                        return [4 /*yield*/, yandex.leftMailPage()];
                    case 6:
                        // let error : any = await yandex.loginError.isPresent();
                        // expect(error).toBe(true);
                        _a.sent();
                        return [4 /*yield*/, yandex.userName.isPresent()];
                    case 7:
                        user = _a.sent();
                        expect(user).toBe(false);
                        return [2 /*return*/];
                }
            });
        }); });
        it('yandex-mail logout (wrong userName)', function () { return __awaiter(_this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex.go()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputLogin('NoAutotestUser')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, yandex.inputPassword('AutotestUser123')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, yandex.checkErrorInput()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, yandex.loginError.getText()];
                    case 5:
                        error = _a.sent();
                        expect(error).toEqual('Такого аккаунта нет');
                        return [4 /*yield*/, yandex.leftMailPage()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('yandex navigation', function () {
        it('check yandex navigation services', function () { return __awaiter(_this, void 0, void 0, function () {
            var video, news, pictures, market, map, translater, music, v, p, n, m, ma, t, mus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        video = protractor_1.element(protractor_1.by.css('.home-link[href="//yandex.by/video"]'));
                        news = protractor_1.element(protractor_1.by.css('.home-link[href="https://news.yandex.by/"]'));
                        pictures = protractor_1.element(protractor_1.by.css('.home-link[href="//yandex.by/images/"]'));
                        market = protractor_1.element(protractor_1.by.css('.home-link[href="https://market.yandex.by/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch"]'));
                        map = protractor_1.element(protractor_1.by.css('.home-link[href="https://yandex.by/maps"]'));
                        translater = protractor_1.element(protractor_1.by.css('[href="https://translate.yandex.by/"]'));
                        music = protractor_1.element(protractor_1.by.css('[href="https://music.yandex.by/"]'));
                        return [4 /*yield*/, yandex.go()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex.checkLink(video, yandex.startPage)];
                    case 2:
                        v = _a.sent();
                        expect(v).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(pictures, yandex.startPage)];
                    case 3:
                        p = _a.sent();
                        expect(p).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(news, yandex.startPage)];
                    case 4:
                        n = _a.sent();
                        expect(n).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(market, yandex.startPage)];
                    case 5:
                        m = _a.sent();
                        expect(m).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(map, yandex.startPage2)];
                    case 6:
                        ma = _a.sent();
                        expect(ma).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(translater, yandex.startPage)];
                    case 7:
                        t = _a.sent();
                        expect(t).toBe(true);
                        return [4 /*yield*/, yandex.checkLink(music, yandex.startPage3)];
                    case 8:
                        mus = _a.sent();
                        expect(mus).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('yandex language', function () {
        it('check yandex language', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex.go()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex.clickLanguage()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, yandex.checkLanguage('en', 'English')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// xdescribe('checking locations',  function() {
//
//     it('Compare London and Paris arrays \'More\'', function(){
//         yandex.go();
//         yandex.changeLocation('Лондон', "Великобритания");
//         let a:any = yandex.saveArrayMoreLondon();
//         yandex.go();
//         yandex.changeLocation('Париж', "Франция");
//         let b:any = yandex.saveArrayMoreParis();
//         expect(a).toEqual( b );
//     });
// }); 
