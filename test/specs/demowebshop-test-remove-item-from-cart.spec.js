describe("Test suite", () => {
    it("Check removing item from cart", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/album-3");
        const productName = await $('.product-name > h1:nth-child(1)');
        const productNameValue = await productName.getText();
        browser.pause(6000);
        const cardButton = await $('#add-to-cart-button-53');
        //browser.pause(6000);
        await cardButton.click();
        browser.pause(12000);

        const shopCart = await $('#topcartlink > a:nth-child(1)');
        await shopCart.click();
        browser.pause(12000);

        const cardProductName = await $('.product-name');
        const cardProductNameText = await cardProductName.getText();
        expect(cardProductNameText).toEqual(productNameValue);

        const removeCheck = await $('.remove-from-cart');
        await removeCheck.click();
        browser.pause(12000);

        const UpdateShopCart = await $('input.button-2:nth-child(1)')
        await UpdateShopCart.click();
        browser.pause(12000);

        const emptyCart = await $('.order-summary-content');
        const emptyCartText = await emptyCart.getText();
        expect(emptyCartText).toEqual('Your Shopping Cart is empty!')

    })
})
