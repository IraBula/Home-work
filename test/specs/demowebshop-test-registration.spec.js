describe("Test suite", () => {
    it("Check that it is possible to register a User", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const registerLink = await $('.ico-register');
        browser.pause(6000);
        await registerLink.click();

        const firstName = await $('#FirstName'); 
        await firstName.addValue('John');
        const lastName = await $('#LastName'); 
        await lastName.addValue('Doe');
        const email = await $('#Email'); 
        await email.addValue('kisso.ir@gmail.com');

        const password = await $('#Password'); 
        await password.addValue('!Epam1234');
        const passwordConfirm = await $('#ConfirmPassword'); 
        await passwordConfirm.addValue('!Epam1234');

        const registerButton = await $('#register-button');
        browser.pause(6000);
        await registerButton.click();

        const registerPage = await $('.page-title');
        const registerTitle = await registerPage.getTitle();
        browser.pause(6000);
        expect(registerTitle).toEqual('Demo Web Shop. Register');
})
})
