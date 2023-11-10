describe("Test suite", () => {
    it("Test logo", async () => {
        await browser.maximizeWindow();
        await browser.url("https://www.epam.com/about");
    const downloadButton = await ($('div.button:nth-child(3) > div:nth-child(1)')).nextElement();
       
        const buttonHref = await downloadButton.getAttribute("href");
        console.log(buttonHref);
    });

})
