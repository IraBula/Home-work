describe("Test suite", () => {
    it("Check adding item to wishlist", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/album-3");
        const productName = await $('.product-name > h1:nth-child(1)');
        const productNameValue = await productName.getText();
        browser.pause(6000);
        const wishButton = await $('#add-to-wishlist-button-53');
        browser.pause(6000);
        await wishButton.click();

        const wishLink = await $('.ico-wishlist');
        await wishLink.click();

        const wishProductName = await $('td.product > a:nth-child(1)');
        const wishProductNameText = await wishProductName.getText();

        expect(wishProductNameText).toEqual(productNameValue);

    })
})
