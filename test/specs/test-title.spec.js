describe("Test suite", () => {
    it("Test title", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");
        const pageTitle = await browser.getTitle();
        //console.log(pageTitle);
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
    });
    
})
