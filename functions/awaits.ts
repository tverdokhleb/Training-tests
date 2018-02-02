import { browser } from 'protractor';

export class Awaits{

     //  с помощью промисов
     // public elementIsPresent(element, wait) {
     //     element.isPresent().then((result) => {
     //         if(result){
     //             return result;
     //         }else if(!result && wait !== 0){
     //             wait -= 1000;
     //             browser.sleep(1000);
     //             this.elementIsPresent(element, wait);
     //         }
     //         return false;
     //     });
     // };

    //  с помощью промисов
    // public elementIsDisplayed(element, wait) {
    //     browser.sleep(1000);
    //     element.isDisplayed().then(
    //         result => {
    //             if( result &&  wait !== 0){
    //                 return result;
    //             }else if(!result && wait > 0){
    //                         browser.sleep(1000);
    //                         this.elementIsDisplayed(element, wait - 1000);
    //                     }else if(!result && wait === 0){
    //                     throw 'time is out';
    //                     }
    //         }, error =>{
    //             if (error && wait > 0) {
    //                         browser.sleep(1000);
    //                         this.elementIsDisplayed(element, wait - 1000);
    //                     }
    //                     else if(wait === 0){
    //                         throw 'element is invisible';
    //             }
    //     });
    // }

    public async elementIsPresent(element, wait) {
        let a = await element.isPresent();
        if (a) {
            return a;
        }
        else if (a === false && wait !== 0) {
            wait -= 1000;
            await
                browser.sleep(1000);
            await
                this.elementIsPresent(a, wait);
        }
        return false;
    };

    public async elementIsDisplayed(element, wait) {
        try {
            browser.sleep(1000);
            let a = await element.isDisplayed();
            if (a && wait > 0) {
                return a;
            } else if (!a && wait > 0) {
                await browser.sleep(1000);
                await this.elementIsDisplayed(element, wait - 1000);
            } else if (!a && wait === 0) {
                throw 'time is out';

            }
        }
        catch (error) {
            if (wait > 0) {
                await browser.sleep(1000);
                await this.elementIsDisplayed(element, wait - 1000);
            }
            else if (wait === 0) {
                throw 'element is invisible';
            }
        }
    }

}