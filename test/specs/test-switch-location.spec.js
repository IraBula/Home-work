describe("Test suite", () => {
    it("Check possibility to switch list by region", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");

        const locationList = $$('.js-tabs-links-list .js-tabs-link');
        const regionList = await locationList.map((link, index) => {

            if (index == 2) {
                link.click();
            }
            return link.getText();
        })
        const activeLocation = $('div.tabs-23__title:nth-child(3) > a:nth-child(1)');
        const openedLocation = await activeLocation.getComputedLabel();
        expect(openedLocation).toEqual('APAC')
                const expectRegions = [
            'AMERICAS',
            'EMEA',
            'APAC'
        ];
        expect(regionList).toEqual(expectRegions)
    })
})
