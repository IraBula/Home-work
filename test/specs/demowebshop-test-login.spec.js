describe("Test suite", () => {
    it("Check that it is possible to login with existed user", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const loginLink = await $('.ico-login');
        browser.pause(6000);
        await loginLink.click();


        const email = await $('#Email');
        await email.addValue('kisso.ir@gmail.com');
        const password = await $('#Password');
        await password.addValue('!Epam1234');
        const loginButton = await $('.login-button');
        browser.pause(6000);
        await loginButton.click();

        const logoutButton = await $('.ico-logout');
        const logoutExist = await logoutButton.isExisting();
        //const welcomeMessageText = await welcomeMessage.getText();
        browser.pause(6000);
        expect(logoutExist).toEqual(true);
    })
})
