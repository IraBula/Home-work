describe("Test suite", () => {
    it("Check adding item to cart", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/album-3");
        const productName = await $('.product-name > h1:nth-child(1)');
        const productNameValue = await productName.getText();
        browser.pause(6000);
        const cardButton = await $('#add-to-cart-button-53');
        browser.pause(6000);
        await cardButton.click();
        browser.pause(12000);

        const shopCart = await $('#topcartlink > a:nth-child(1)');
        await shopCart.click();

        const cardProductName = await $('.product-name');
        const cardProductNameText = await cardProductName.getText();
        
        expect(cardProductNameText).toEqual(productNameValue);

    })
})
