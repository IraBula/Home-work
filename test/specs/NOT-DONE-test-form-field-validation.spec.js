describe("Test suite", () => {
    it("Test title", async () => {
        await browser.maximizeWindow();
        await browser.url("https://www.epam.com/about/who-we-are/contact");
    //     const submitButton = await $('button[type="submit"]')
    //    // browser.pause(6000);
    //     submitButton.click();
    //const contactForm = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor');
    await browser.submitForm('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor');

        // const form = await $$('.validation-text');
        // for (let i = 0; i < form.length; i++) {
        //     console.log(await form[i].getTagName());

        // }
        // console.log(form.length);
        // const requiredFields = await form.map((field) => {
        //     console.log(field);
        //     return field.getValue();

        // });
        const namelInput = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name');
        // await namelInput.clearValue();
        // await namelInput.click(); 
        const nameErrorMessage = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error');
        console.log(await nameErrorMessage.getHTML());
        const isNameDisplayed = await nameErrorMessage.isDisplayed();
        expect(isNameDisplayed).toEqual(true);

        // const emailInput = await $('input[name="user_email"]');
        // emailInput.clearValue();
        // //await emailInput.focus(); // Or you can use browser.keys('Tab') to move focus away
        // const errorMessage = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error');
        // console.log(await errorMessage.getHTML());
        // const isDisplayed = await errorMessage.isDisplayed();
        // expect(isDisplayed).toEqual(true);

    })
})
