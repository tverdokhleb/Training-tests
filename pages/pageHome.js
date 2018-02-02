


// describe('waiting mine', function(){
    // beforeEach(async function(){
    //     await browser.driver.get('http://www.protractortest.org/#/');
    // });
    /*
       it("should start the test", async function() {
            await browser.driver.get('http://www.protractortest.org/#/');
            const globalTimer = 5000;
            var reference = element(by.id('drop4'));
            await reference.click();
            await browser.sleep(1000);

            var elementToFind = element(by.linkText('dfhxfgh'));
            var wait = 0;

            async function elementIsPreset(element, wait) {
                let a = await element.isPresent();
                if (a) {
                    return a
                }
                else if (a === false && wait !== 0) {
                    wait -= 1000;
                    await
                    browser.sleep(1000);
                    await
                    elementIsPreset(elementToFind, wait);
                }
                return false
            }

            await expect(elementIsPreset(elementToFind, 5000)).toBeTruthy()

        }); */

//     it("should start the test", async function() {
//         await browser.driver.get('http://www.protractortest.org/#/');
//         const globalTimer = 5000;
//         const reference = element(by.id('drop4'));
//         await reference.click();
//         await browser.sleep(1000);
//
//        const elementToFind = element(by.linkText('dfhxfgh'));
//         let waiter = 0;
//
//              async function elementIsDisplayed(element, wait) {
//                 try{
//                     let a = await element.isDisplayed();
//                     if(a && waiter < globalTimer){
//                          return a;
//                      }else if(!a && waiter <= globalTimer){
//                         await console.log('neg' +a)
//                         waiter =+ 1000;
//                         await browser.sleep(1000);
//                         await elementIsDisplayed(elementToFind, wait);
//                     }else if(!a && wait>globalTimer){
//                          throw 'time is out';
//
//                     }
//                 }
//                 catch(error) {
//
//                     await console.log(waiter)
//                     if (waiter <= globalTimer) {
//                         waiter = waiter + 1000;
//                         await browser.sleep(1000);
//                         await elementIsDisplayed(elementToFind, wait);
//                     }
//                     else if(waiter>globalTimer){
//
//                         throw 'element is invisible';
//                        // return 'element is invisible'
//                     }
//                 }
//         }
//         await expect(elementIsDisplayed(elementToFind, globalTimer)).toBe(true);
//
//     });
//
// });
