import {browser,by,element} from 'protractor';
import { Awaits } from '../functions/awaits.js';

const wait : Awaits = new Awaits();

export class Page{
    public address : string;
    public country : string;
    public startPage :  any = element(by.css('a.logo'));
    public startPage2 :  any = element(by.css('.logo-view'));
    public startPage3 :  any = element(by.css('a.logo__ya'));
    public loginInput : any = element(by.name('login'));
    public passwordLogin :  any = element(by.name('passwd'));
    public inputBtn : any = element(by.buttonText('Войти'));
    public userName : any = element(by.css('.mail-User-Name'));
    public userExitMail : any = element(by.cssContainingText('.b-mail-dropdown__item__content', 'Выход'));
    public userNameLogin : any = element(by.css('.desk-notif-card__usermenu-switcher'));
    public userNameExit : any = element(by.css('.usermenu__link'));
    public loginError : any = element(by.css('.passport-Domik-Form-Error'));
    public exitFromMail : any = element(by.css('.passport-Domik-Retpath'));
    public languageBtn :  any = element(by.css('.dropdown-menu__switcher[title="Выбрать язык"]'));
    public currentlanguage : any = element(by.css('span.link__inner'));
    // public addLanguageBtn :  any = element(by.css('.button_js_inited'));
    //public video : any = element(by.css('.home-link[href="//yandex.by/video"]'));
    public videoHeader = element(by.css('.heading__text'));

 constructor(address){
        this.address = address;
    }

    public async checkLink(link, backpage){
        await wait.elementIsDisplayed(link, 3000);
        await link.click();
        await wait.elementIsDisplayed(backpage, 5000);
        await backpage.click();
        return true;
    }

    public async go(){
         browser.waitForAngularEnabled(false);
         // browser.ignoreSynchronization = true;
         browser.driver.get(this.address);
    }
    public async inputLogin(login){
        //let inputLogin = element(by.name('login'));
        await wait.elementIsDisplayed(this.loginInput, 2000);
        await this.loginInput.click();
        await this.loginInput.sendKeys(login);
    }
    public async inputPassword(password){
        // let passwordLogin = element(by.name('passwd'));
        await wait.elementIsDisplayed(this.passwordLogin, 2000);
        await this.passwordLogin.click();
        await this.passwordLogin.sendKeys(password);
    }
    public async enterWithLogin(){
        if(this.loginInput.getAttribute() === null || this.passwordLogin.getAttribute() === null){
            browser.sleep(500);
            await this.enterWithLogin();
        }else{
            await this.inputBtn.click();
        }
        await wait.elementIsDisplayed(this.userName, 5000);
        await this.userName.click();

    }
    public async exitUser(){
        await wait.elementIsDisplayed(this.userExitMail, 5000);
        this.userExitMail.click();

    }
    public async checkErrorInput(){
        if(this.loginInput.getAttribute() === null || this.passwordLogin.getAttribute() === null){
            browser.sleep(500);
            await this.enterWithLogin();
        }else{
            await this.inputBtn.click();
            await wait.elementIsDisplayed(this.loginError, 5000);
        }
    }
    public async leftMailPage(){
        await wait.elementIsDisplayed(this.exitFromMail, 5000);
        this.exitFromMail.click();
    }

    public async clickLanguage(){
        await wait.elementIsDisplayed(this.languageBtn, 5000);
        await this.languageBtn.click();
    }
    public async checkLanguage(lg, language){
        // let currentLanguage : any = await wait.elementIsDisplayed(this.languages, 5000);
        // // browser.sleep(5000);
        // // this.languages.click();
        // // let currentLanguage : any = this.choseLang.getText();
        // if(currentLanguage === language){
        //     await this.languages.click();
        //     browser.sleep(5000);
        // }else{
            let choseMoreLang = await element(by.css('.b-menu__layout-vert-cell_position_last'));
            await choseMoreLang.click();
            let choseLang = await element(by.css('.select__button'));
            await choseLang.click();
            let addLanguage = await element(by.cssContainingText('span.select__text', language));
            await addLanguage.click();
            browser.sleep(5000);
            let btnSave = await element(by.css('.form__save'));
            await wait.elementIsDisplayed(btnSave, 5000);
            await btnSave.click();
    }

    public changeLocation(city, country){
            this.country = country;
            let elem = element(by.css('.geolink .geolink__reg'));
            elem.click();
            let inputLine = element(by.id('city__front-input'));
            inputLine.clear();
            inputLine.sendKeys(city);
            let countryElement = element(by.cssContainingText('.b-autocomplete-item__details', country));
            wait.elementIsDisplayed(countryElement, 5000);
            countryElement.click();
    };
    finedArray(){
        let elemMore = element(by.css('.home-arrow__tabs .home-tabs a.home-tabs__more-switcher'));
        wait.elementIsPresent(elemMore, 5000);
        elemMore.click();
    }
    public saveArrayMoreLondon(){
        this.finedArray();
        let arrayLondon = element.all(by.xpath('//div[@class=\'home-tabs__more-item\']'));
       return arrayLondon.getText();
    }
    public saveArrayMoreParis(){
        this.finedArray();
        const arrayParis = element.all(by.xpath('//div[@class=\'home-tabs__more-item\']'));
       return arrayParis.getText();
    }

}
