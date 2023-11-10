describe("Test suite", () => {
    it("Test theme mode", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");
        await browser.maximizeWindow();
        //browser.pause(6000);
        const modeToggle = await $('section.theme-switcher-ui:nth-child(3) > div:nth-child(1)');
        //browser.pause(6000);

        await modeToggle.click();

        const bodyElement = await $('body'); // Select the <body> element

        // Get the value of the 'class' attribute
        const classAttributeValue = await bodyElement.getAttribute('class');
          // Check if the 'class' attribute contains 'light-mode'
        if (classAttributeValue.includes('light-mode')) {
            console.log('Light mode is active');} 
            else {
            console.log('Light mode is not active');
        }
expect(classAttributeValue).toContain('light-mode')
    })
})
