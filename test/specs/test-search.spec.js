describe("Test suite", () => {
    it("Check the search function", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");
        const searchButton = await $('.search-icon');
        browser.pause(6000);
        await searchButton.click();

        const searchInput = await $('#new_form_search'); 
        await searchInput.addValue('AI');
        const findButton =await $('.custom-button');
        await findButton.click();
        const searchResultList =await $('.search-results__counter');
        const getLabelResult = await searchResultList.getComputedLabel()
        expect(getLabelResult).toHaveTextContaining('results for');
    })
})
