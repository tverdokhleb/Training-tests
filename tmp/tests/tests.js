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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var awaits_js_1 = require("../functions/awaits.js");
var wait = new awaits_js_1.Awaits();
var Page = /** @class */ (function () {
    function Page(address) {
        this.startPage = protractor_1.element(protractor_1.by.css('a.logo'));
        this.startPage2 = protractor_1.element(protractor_1.by.css('.logo-view'));
        this.startPage3 = protractor_1.element(protractor_1.by.css('a.logo__ya'));
        this.loginInput = protractor_1.element(protractor_1.by.name('login'));
        this.passwordLogin = protractor_1.element(protractor_1.by.name('passwd'));
        this.inputBtn = protractor_1.element(protractor_1.by.buttonText('Войти'));
        this.userName = protractor_1.element(protractor_1.by.css('.mail-User-Name'));
        this.userExitMail = protractor_1.element(protractor_1.by.cssContainingText('.b-mail-dropdown__item__content', 'Выход'));
        this.userNameLogin = protractor_1.element(protractor_1.by.css('.desk-notif-card__usermenu-switcher'));
        this.userNameExit = protractor_1.element(protractor_1.by.css('.usermenu__link'));
        this.loginError = protractor_1.element(protractor_1.by.css('.passport-Domik-Form-Error'));
        this.exitFromMail = protractor_1.element(protractor_1.by.css('.passport-Domik-Retpath'));
        this.languageBtn = protractor_1.element(protractor_1.by.css('.dropdown-menu__switcher[title="Выбрать язык"]'));
        this.currentlanguage = protractor_1.element(protractor_1.by.css('span.link__inner'));
        // public addLanguageBtn :  any = element(by.css('.button_js_inited'));
        //public video : any = element(by.css('.home-link[href="//yandex.by/video"]'));
        this.videoHeader = protractor_1.element(protractor_1.by.css('.heading__text'));
        this.address = address;
    }
    Page.prototype.checkLink = function (link, backpage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wait.elementIsDisplayed(link, 3000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, link.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, wait.elementIsDisplayed(backpage, 5000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, backpage.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Page.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.waitForAngularEnabled(false);
                // browser.ignoreSynchronization = true;
                protractor_1.browser.driver.get(this.address);
                return [2 /*return*/];
            });
        });
    };
    Page.prototype.inputLogin = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //let inputLogin = element(by.name('login'));
                    return [4 /*yield*/, wait.elementIsDisplayed(this.loginInput, 2000)];
                    case 1:
                        //let inputLogin = element(by.name('login'));
                        _a.sent();
                        return [4 /*yield*/, this.loginInput.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loginInput.sendKeys(login)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.inputPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // let passwordLogin = element(by.name('passwd'));
                    return [4 /*yield*/, wait.elementIsDisplayed(this.passwordLogin, 2000)];
                    case 1:
                        // let passwordLogin = element(by.name('passwd'));
                        _a.sent();
                        return [4 /*yield*/, this.passwordLogin.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passwordLogin.sendKeys(password)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.enterWithLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loginInput.getAttribute() === null || this.passwordLogin.getAttribute() === null)) return [3 /*break*/, 2];
                        protractor_1.browser.sleep(500);
                        return [4 /*yield*/, this.enterWithLogin()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.inputBtn.click()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, wait.elementIsDisplayed(this.userName, 5000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.userName.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.exitUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wait.elementIsDisplayed(this.userExitMail, 5000)];
                    case 1:
                        _a.sent();
                        this.userExitMail.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.checkErrorInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loginInput.getAttribute() === null || this.passwordLogin.getAttribute() === null)) return [3 /*break*/, 2];
                        protractor_1.browser.sleep(500);
                        return [4 /*yield*/, this.enterWithLogin()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.inputBtn.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, wait.elementIsDisplayed(this.loginError, 5000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.leftMailPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wait.elementIsDisplayed(this.exitFromMail, 5000)];
                    case 1:
                        _a.sent();
                        this.exitFromMail.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.clickLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wait.elementIsDisplayed(this.languageBtn, 5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.languageBtn.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.checkLanguage = function (lg, language) {
        return __awaiter(this, void 0, void 0, function () {
            var choseMoreLang, choseLang, addLanguage, btnSave;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.css('.b-menu__layout-vert-cell_position_last'))];
                    case 1:
                        choseMoreLang = _a.sent();
                        return [4 /*yield*/, choseMoreLang.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css('.select__button'))];
                    case 3:
                        choseLang = _a.sent();
                        return [4 /*yield*/, choseLang.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('span.select__text', language))];
                    case 5:
                        addLanguage = _a.sent();
                        return [4 /*yield*/, addLanguage.click()];
                    case 6:
                        _a.sent();
                        protractor_1.browser.sleep(5000);
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css('.form__save'))];
                    case 7:
                        btnSave = _a.sent();
                        return [4 /*yield*/, wait.elementIsDisplayed(btnSave, 5000)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, btnSave.click()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.changeLocation = function (city, country) {
        this.country = country;
        var elem = protractor_1.element(protractor_1.by.css('.geolink .geolink__reg'));
        elem.click();
        var inputLine = protractor_1.element(protractor_1.by.id('city__front-input'));
        inputLine.clear();
        inputLine.sendKeys(city);
        var countryElement = protractor_1.element(protractor_1.by.cssContainingText('.b-autocomplete-item__details', country));
        wait.elementIsDisplayed(countryElement, 5000);
        countryElement.click();
    };
    ;
    Page.prototype.finedArray = function () {
        var elemMore = protractor_1.element(protractor_1.by.css('.home-arrow__tabs .home-tabs a.home-tabs__more-switcher'));
        wait.elementIsPresent(elemMore, 5000);
        elemMore.click();
    };
    Page.prototype.saveArrayMoreLondon = function () {
        this.finedArray();
        var arrayLondon = protractor_1.element.all(protractor_1.by.xpath('//div[@class=\'home-tabs__more-item\']'));
        return arrayLondon.getText();
    };
    Page.prototype.saveArrayMoreParis = function () {
        this.finedArray();
        var arrayParis = protractor_1.element.all(protractor_1.by.xpath('//div[@class=\'home-tabs__more-item\']'));
        return arrayParis.getText();
    };
    return Page;
}());
exports.Page = Page;
