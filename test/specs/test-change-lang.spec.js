describe("Test suite", () => {
    it("Check that allow to change language to Ukrainian", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");
        const langSelector = await $('.location-selector__button');
        browser.pause(6000);
        await langSelector.click();

        const getlangClass = await $('.location-selector__button'); 
        const areaExpanded = await getlangClass.getAttribute('aria-expanded');
        
        
        if (areaExpanded=='true') {
            const selectUkrainian = await $('li.location-selector__item:nth-child(6) > a:nth-child(1)');
            browser.pause(6000);
            console.log('area expanded')
            await selectUkrainian.click();

            browser.pause(6000);
            const getSite = await $('html'); 
            const getCurrentLang = await getSite.getAttribute('lang');
            console.log(getCurrentLang);
        }
            else {console.log('Language selector is not clicked');}
            expect(getCurrentLang).toEqual('uk-UA');
})

})
