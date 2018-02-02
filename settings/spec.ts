import  { Page }  from '../tests/tests.js';
import {by, element} from "protractor";

const yandex : Page =  new Page('https://yandex.ru/');

describe('Checking main page', () => {


    describe('checking login for mail', () => {

        it('input login for mail', async() =>{
            await yandex.go();
            await yandex.inputLogin('AutotestUser');
            await yandex.inputPassword('AutotestUser123');
            await yandex.enterWithLogin();
            let user: any = await yandex.userName.getText();
            expect(user).toEqual('AutotestUser');
            await yandex.exitUser();
        });

        it('yandex-mail logout (password is wrong)', async() =>{
            await yandex.go();
            await yandex.inputLogin('AutotestUser');
            await yandex.inputPassword('NoAutotestUser123');
            await yandex.checkErrorInput();
            let error : any = await yandex.loginError.getText();
            expect(error).toEqual('Неверный пароль');
            // let error : any = await yandex.loginError.isPresent();
            // expect(error).toBe(true);
            await yandex.leftMailPage();
            let user: any = await yandex.userName.isPresent();
            expect(user).toBe(false);
        });

        it('yandex-mail logout (wrong userName)', async() =>{
            await yandex.go();
            await yandex.inputLogin('NoAutotestUser');
            await yandex.inputPassword('AutotestUser123');
            await yandex.checkErrorInput();
            // let error : any = await yandex.loginError.isPresent();
            // expect(error).toBe(true);
            let error : any = await yandex.loginError.getText();
            expect(error).toEqual('Такого аккаунта нет');
            await yandex.leftMailPage();
        });
    });

    describe('yandex navigation', ()=>{

        it('check yandex navigation services', async()=>{
            const video : any = element(by.css('.home-link[href="//yandex.by/video"]'));
            const news : any = element(by.css('.home-link[href="https://news.yandex.by/"]'));
            const pictures : any = element(by.css('.home-link[href="//yandex.by/images/"]'));
            const market : any = element(by.css('.home-link[href="https://market.yandex.by/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch"]'));
            const map : any = element(by.css('.home-link[href="https://yandex.by/maps"]'));
            const translater : any = element(by.css('[href="https://translate.yandex.by/"]'));
            const music : any = element(by.css('[href="https://music.yandex.by/"]'));
            await yandex.go();
            let v: any  =  await yandex.checkLink(video, yandex.startPage);
            expect(v).toBe(true);
            let p:  any = await yandex.checkLink(pictures, yandex.startPage);
            expect(p).toBe(true);
            let n:  any = await yandex.checkLink(news, yandex.startPage);
            expect(n).toBe(true);
            let m:  any = await yandex.checkLink(market, yandex.startPage);
            expect(m).toBe(true);
            let ma:  any = await yandex.checkLink(map, yandex.startPage2);
            expect(ma).toBe(true);
            let t:  any = await yandex.checkLink(translater, yandex.startPage);
            expect(t).toBe(true);
            let mus:  any = await yandex.checkLink(music, yandex.startPage3);
            expect(mus).toBe(true);
        })
    });

    describe('yandex language', ()=>{
        it('check yandex language', async()=>{
            await yandex.go();
            await yandex.clickLanguage();
            await yandex.checkLanguage('en', 'English');
            // let lang : any = yandex.currentlanguage.getText();
            // expect(lang).toEqual('En');
        })
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