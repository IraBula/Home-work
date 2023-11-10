describe("Test suite", () => {
    it("Check sorting by Name:A-Z", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const bookMenu = await $('.top-menu > li:nth-child(1) > a:nth-child(1)');
        browser.pause(6000);
        await bookMenu.click();
        const booksPage = await $('.page-title > h1:nth-child(1)');
        console.log(booksPage);
        const bookPageExist = await booksPage.isExisting();

        const sortByOption = $('#products-orderby');
        await sortByOption.selectByIndex(2);
        const productNames = $$('.product-item .product-title');
        const isSortedName = verifySortingOrder(productNames);

        function verifySortingOrder(productNames) {
            for (let i = 0; i < productNames.length - 1; i++) {
                const currentName = productNames[i].getText().toLowerCase();
                const nextName = productNames[i + 1].getText().toLowerCase();

                if (currentName.localeCompare(nextName) > 0) {
                    return false;
                }
            }
            return true;
        }
        expect(isSortedName).toEqual(true)
    })


    it("Check sorting by Price: Low to High", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const bookMenu = await $('.top-menu > li:nth-child(1) > a:nth-child(1)');
        browser.pause(6000);
        await bookMenu.click();
        const booksPage = await $('.page-title > h1:nth-child(1)');
        console.log(booksPage);
        const bookPageExist = await booksPage.isExisting();

        const sortByOption = $('#products-orderby');
        await sortByOption.selectByIndex(4);
        console.log(await sortByOption.getValue());
        
        const productPrices = $$('.product-item .price');
        const isSortedPrice = checkSortingOrderByPrice(productPrices);

        function checkSortingOrderByPrice(productPrices) {
            for (let i = 0; i < productPrices.length - 1; i++) {
                const currentPrice = parseFloat(productPrices[i].getText().replace('$', ''));
                const nextPrice = parseFloat(productPrices[i + 1].getText().replace('$', ''));

                if (currentPrice > nextPrice) {
                    return false;
                }
            }
            return true;
        }
        expect(isSortedPrice).toEqual(true)
    })
})
