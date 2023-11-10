describe("Test suite", () => {
    it("Test logo", async () => {
        await browser.maximizeWindow();
        await browser.url("https://www.epam.com/about");
        const logoIcon = await $('a.header__logo-container:nth-child(2) > img:nth-child(3)');
        const aboutTitle = await browser.getTitle();
        //browser.pause(6000);
        await logoIcon.click();
        const pageUrl = await browser.getUrl();
        expect(pageUrl).toEqual('https://www.epam.com/');
    });

})
