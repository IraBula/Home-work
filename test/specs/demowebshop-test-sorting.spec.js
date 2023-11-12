describe("Test suite", () => {
    it("Check sorting by Name:A-Z", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const bookMenu = await $('.top-menu > li:nth-child(1) > a:nth-child(1)');
        browser.pause(6000);
        await bookMenu.click();
        const booksPage = await $('.page-title > h1:nth-child(1)');
        const sortByOption = $('#products-orderby');
        await sortByOption.selectByIndex(1);

        const productNames = $$('.product-item .product-title a');
        const productListNames = await productNames.map((items) => {

            return items.getText();
        })

        const isSortedName = verifySortingOrder(productListNames);

        function verifySortingOrder(productListNames) {
            for (let i = 0; i < productListNames.length - 1; i++) {
                const currentName = productListNames[i].toLowerCase();
                const nextName = productListNames[i + 1].toLowerCase();

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

        const sortByOption = $('#products-orderby');
        await sortByOption.selectByIndex(3);

        const productPrices = $$('.product-item .actual-price');
        const productPriceValue = await productPrices.map((item) => {
            return item.getText();
        })

        const isSortedPrice = checkSortingOrderByPrice(productPriceValue);

        function checkSortingOrderByPrice(productPrices) {
            for (let i = 0; i < productPrices.length - 1; i++) {
                const currentPrice = parseFloat(productPrices[i]);
                const nextPrice = parseFloat(productPrices[i + 1]);

                if (currentPrice > nextPrice) {
                    return false;
                }
            }
            return true;
        }
        expect(isSortedPrice).toEqual(true)
    })
})
