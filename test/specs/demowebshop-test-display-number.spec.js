describe("Test suite", () => {
    it("Check changing display number of producrs", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const bookMenu = await $('.top-menu > li:nth-child(1) > a:nth-child(1)');
        browser.pause(6000);
        await bookMenu.click();
        const booksPage = await $('.page-title > h1:nth-child(1)');
        console.log(booksPage);
        const bookPageExist = await booksPage.isExisting();

        const currentPageSize = await $('#products-pagesize').getValue();
        console.log(currentPageSize);

        const displayOption = $('#products-pagesize');
        await displayOption.selectByIndex(0);

        const itemCount = await browser.$$('.product-item').length;
           expect(itemCount).toEqual(4);
        
    })
})
