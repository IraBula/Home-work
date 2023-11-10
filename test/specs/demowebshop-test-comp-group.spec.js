describe("Test suite", () => {
    it("Check that Computers’ group has 3 sub-groups with correct names", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const computerGroup = await $$('.block-category-navigation ul.list a');
        for (let i = 0; i < computerGroup.length; i++) {
            if (await computerGroup[i].getText() == 'Computers') {
                await computerGroup[i].click();
            }
        }
        const subGroup = $$('.block-category-navigation ul.list li.active ul.sublist a');
        const subcatText = await subGroup.map((cat) => {
            return cat.getText();
        })
              const subExpect = [
            'Desktops',
            'Notebooks',
            'Accessories'
        ];
        expect(subcatText).toEqual(subExpect)
        
    })
})
